
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LessonCard from "@/components/LessonCard";
import { useEffect, useState } from "react";
import { Book, Code, Palette, Box, Layers, Monitor, Grid3X3 } from "lucide-react";

const Lessons = () => {
  // State for progress tracking
  const [progressData, setProgressData] = useState<Record<string, number>>({});
  
  useEffect(() => {
    // Load progress data from localStorage
    const savedProgress = localStorage.getItem("lessonProgress");
    if (savedProgress) {
      try {
        setProgressData(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to parse progress data", e);
      }
    }
  }, []);

  // All lesson categories
  const lessonCategories = [
    {
      title: "HTML Fundamentals",
      description: "Learn the building blocks of web pages",
      lessons: [
        {
          id: "html-basics",
          title: "HTML Basics",
          description: "Learn the structure of HTML documents and essential tags",
          icon: <Code size={24} />,
          path: "/lessons/html-basics"
        },
        {
          id: "html-semantics",
          title: "Semantic HTML",
          description: "Use semantic elements to improve accessibility and SEO",
          icon: <Book size={24} />,
          path: "/lessons/html-semantics"
        },
        {
          id: "html-forms",
          title: "HTML Forms",
          description: "Create interactive forms for user input",
          icon: <Code size={24} />,
          path: "/lessons/html-forms"
        }
      ]
    },
    {
      title: "CSS Fundamentals",
      description: "Style your web pages with CSS",
      lessons: [
        {
          id: "css-basics",
          title: "CSS Basics",
          description: "Learn how to style HTML elements with CSS",
          icon: <Palette size={24} />,
          path: "/lessons/css-basics"
        },
        {
          id: "css-selectors",
          title: "CSS Selectors",
          description: "Master different ways to target HTML elements",
          icon: <Palette size={24} />,
          path: "/lessons/css-selectors"
        },
        {
          id: "css-box-model",
          title: "CSS Box Model",
          description: "Understand content, padding, borders, and margins",
          icon: <Box size={24} />,
          path: "/lessons/css-box-model"
        }
      ]
    },
    {
      title: "Layout Techniques",
      description: "Create flexible and responsive layouts",
      lessons: [
        {
          id: "flexbox",
          title: "Flexbox Layout",
          description: "Create one-dimensional layouts with Flexbox",
          icon: <Box size={24} />,
          path: "/lessons/flexbox"
        },
        {
          id: "grid",
          title: "CSS Grid",
          description: "Create two-dimensional layouts with Grid",
          icon: <Grid3X3 size={24} />,
          path: "/lessons/grid"
        },
        {
          id: "positioning",
          title: "CSS Positioning",
          description: "Control the position of elements on the page",
          icon: <Layers size={24} />,
          path: "/lessons/positioning"
        }
      ]
    },
    {
      title: "Advanced CSS",
      description: "Take your CSS skills to the next level",
      lessons: [
        {
          id: "animations",
          title: "CSS Animations",
          description: "Create keyframe animations and transitions",
          icon: <Layers size={24} />,
          path: "/lessons/animations"
        },
        {
          id: "responsive",
          title: "Responsive Design",
          description: "Make your website look great on all devices",
          icon: <Monitor size={24} />,
          path: "/lessons/responsive"
        },
        {
          id: "transforms",
          title: "CSS Transforms",
          description: "Apply 2D and 3D transformations to elements",
          icon: <Layers size={24} />,
          path: "/lessons/transforms"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-6">All Lessons</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Explore our comprehensive curriculum covering HTML and CSS fundamentals through advanced techniques.
              </p>
            </div>

            <div className="space-y-20">
              {lessonCategories.map((category, index) => (
                <div key={index}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        title={lesson.title}
                        description={lesson.description}
                        icon={lesson.icon}
                        path={lesson.path}
                        progress={progressData[lesson.id] || 0}
                        completed={progressData[lesson.id] === 100}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Lessons;
