
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Book, Layers, Box, Palette, Code, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import LessonCard from "@/components/LessonCard";
import { useEffect } from "react";

const Index = () => {
  // Calculate progress from localStorage
  const calculateProgress = (lessonId: string) => {
    const progressData = localStorage.getItem("lessonProgress");
    if (!progressData) return 0;
    
    try {
      const progress = JSON.parse(progressData);
      return progress[lessonId] || 0;
    } catch (e) {
      return 0;
    }
  };

  // Check if a lesson is completed
  const isLessonCompleted = (lessonId: string) => {
    return calculateProgress(lessonId) === 100;
  };

  // Featured lessons
  const featuredLessons = [
    {
      id: "html-basics",
      title: "HTML Basics",
      description: "Learn the fundamentals of HTML structure and semantics",
      icon: <Code size={24} />,
      path: "/lessons/html-basics"
    },
    {
      id: "css-basics",
      title: "CSS Basics",
      description: "Master styling with CSS selectors, properties, and values",
      icon: <Palette size={24} />,
      path: "/lessons/css-basics"
    },
    {
      id: "flexbox",
      title: "Flexbox Layout",
      description: "Create flexible layouts with CSS Flexbox",
      icon: <Box size={24} />,
      path: "/lessons/flexbox"
    },
    {
      id: "animations",
      title: "CSS Animations",
      description: "Bring your websites to life with keyframes and transitions",
      icon: <Layers size={24} />,
      path: "/lessons/animations"
    },
    {
      id: "responsive",
      title: "Responsive Design",
      description: "Build websites that work on any device with media queries",
      icon: <Monitor size={24} />,
      path: "/lessons/responsive"
    },
    {
      id: "grid",
      title: "CSS Grid",
      description: "Create complex two-dimensional layouts with CSS Grid",
      icon: <Book size={24} />,
      path: "/lessons/grid"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Featured Lessons Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Featured Lessons</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Start your web development journey with these carefully crafted, interactive lessons.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  icon={lesson.icon}
                  path={lesson.path}
                  progress={calculateProgress(lesson.id)}
                  completed={isLessonCompleted(lesson.id)}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/lessons"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View All Lessons
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Our unique approach makes learning HTML and CSS intuitive and engaging.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learn</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Study web concepts through clear explanations and visual examples.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Practice</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Experiment with live code editors to see instant results.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Box size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Master</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Complete challenges to solidify your knowledge and skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of students who are learning HTML and CSS through our interactive, animated lessons.
            </p>
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary font-medium px-8 py-4 shadow-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
