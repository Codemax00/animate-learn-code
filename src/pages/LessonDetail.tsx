
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationDemo from "@/components/AnimationDemo";
import CodeEditor from "@/components/CodeEditor";
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from "lucide-react";
import { getLessonContent } from "@/utils/lessonData";

interface LessonStep {
  title: string;
  content: string;
  codeHtml?: string;
  codeCss?: string;
  animation?: React.ReactNode;
  challenge?: {
    description: string;
    hint?: string;
    solution?: {
      html?: string;
      css?: string;
    };
  };
}

interface LessonContent {
  title: string;
  description: string;
  steps: LessonStep[];
}

const LessonDetail = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState<LessonContent | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  useEffect(() => {
    if (lessonId) {
      // Get lesson content from our utility
      const content = getLessonContent(lessonId);
      if (content) {
        setLesson(content);
        
        // Load progress from localStorage
        const savedProgress = localStorage.getItem("lessonProgress");
        if (savedProgress) {
          try {
            const progressData = JSON.parse(savedProgress);
            if (progressData[lessonId]) {
              setProgress(progressData[lessonId]);
              
              // Calculate current step based on progress
              const steps = content.steps.length;
              const stepIndex = Math.floor((progressData[lessonId] / 100) * steps) - 1;
              setCurrentStep(Math.max(0, stepIndex));
            }
          } catch (e) {
            console.error("Failed to parse progress data", e);
          }
        }
      }
    }
  }, [lessonId]);

  const saveProgress = () => {
    if (!lessonId || !lesson) return;
    
    // Calculate progress percentage
    const newProgress = Math.min(
      Math.round(((currentStep + 1) / lesson.steps.length) * 100),
      100
    );
    
    setProgress(newProgress);
    
    // Save to localStorage
    try {
      const savedProgress = localStorage.getItem("lessonProgress");
      const progressData = savedProgress ? JSON.parse(savedProgress) : {};
      progressData[lessonId] = newProgress;
      localStorage.setItem("lessonProgress", JSON.stringify(progressData));
    } catch (e) {
      console.error("Failed to save progress", e);
    }
  };

  const handleNextStep = () => {
    if (!lesson) return;
    
    const nextStep = currentStep + 1;
    if (nextStep < lesson.steps.length) {
      setCurrentStep(nextStep);
      saveProgress();
      setChallengeCompleted(false);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setChallengeCompleted(false);
    }
  };

  const verifyChallenge = (html: string, css: string) => {
    if (!lesson?.steps[currentStep].challenge?.solution) return false;
    
    const solution = lesson.steps[currentStep].challenge.solution;
    let isCorrect = true;
    
    // Very simple check - in a real app, you'd want more sophisticated validation
    if (solution.html && !html.includes(solution.html)) {
      isCorrect = false;
    }
    
    if (solution.css && !css.includes(solution.css)) {
      isCorrect = false;
    }
    
    setChallengeCompleted(isCorrect);
    
    if (isCorrect && currentStep === lesson.steps.length - 1) {
      // Lesson fully completed
      try {
        const savedProgress = localStorage.getItem("lessonProgress");
        const progressData = savedProgress ? JSON.parse(savedProgress) : {};
        progressData[lessonId as string] = 100;
        localStorage.setItem("lessonProgress", JSON.stringify(progressData));
        setProgress(100);
      } catch (e) {
        console.error("Failed to save completion", e);
      }
    }
    
    return isCorrect;
  };

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading lesson...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const currentStepData = lesson.steps[currentStep];
  const isLastStep = currentStep === lesson.steps.length - 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Lesson header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <Link to="/lessons" className="text-sm text-primary mb-2 inline-flex items-center hover:underline">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to Lessons
                </Link>
                <h1 className="text-3xl font-bold">{lesson.title}</h1>
              </div>
              
              <div className="bg-white dark:bg-gray-800 shadow-sm rounded-full h-4 w-48 overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400">
              {lesson.description}
            </p>
          </div>

          {/* Progress steps */}
          <div className="mb-10 overflow-auto">
            <div className="flex space-x-4 min-w-max">
              {lesson.steps.map((step, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === currentStep
                      ? "bg-primary text-primary-foreground"
                      : index < currentStep
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  }`}
                  onClick={() => {
                    if (index <= currentStep) {
                      setCurrentStep(index);
                    }
                  }}
                >
                  Step {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Current step content */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">{currentStepData.title}</h2>
            
            <div className="mb-10 prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: currentStepData.content }} />
            
            {/* Animation demo */}
            {currentStepData.animation && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Animation Example</h3>
                <AnimationDemo title="Live Demo">
                  {currentStepData.animation}
                </AnimationDemo>
              </div>
            )}
            
            {/* Code example */}
            {(currentStepData.codeHtml || currentStepData.codeCss) && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Code Example</h3>
                <CodeEditor
                  initialHtml={currentStepData.codeHtml}
                  initialCss={currentStepData.codeCss}
                  readOnly={true}
                />
              </div>
            )}
            
            {/* Challenge */}
            {currentStepData.challenge && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-6">
                  <p className="mb-4">{currentStepData.challenge.description}</p>
                  {currentStepData.challenge.hint && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-lg mb-4">
                      <strong>Hint:</strong> {currentStepData.challenge.hint}
                    </div>
                  )}
                </div>
                
                <CodeEditor
                  initialHtml={currentStepData.codeHtml}
                  initialCss={currentStepData.codeCss}
                  readOnly={false}
                />
                
                {challengeCompleted && (
                  <div className="mt-6 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Great job! You've completed this challenge.</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevStep}
              className={`flex items-center px-5 py-2.5 rounded-lg ${
                currentStep === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
            
            <button
              onClick={handleNextStep}
              className={`flex items-center px-5 py-2.5 rounded-lg ${
                isLastStep && !challengeCompleted
                  ? "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              disabled={isLastStep && !challengeCompleted}
            >
              {isLastStep ? "Complete Lesson" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LessonDetail;
