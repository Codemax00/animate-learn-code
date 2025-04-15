
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Learn HTML & CSS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Through Animation
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
              Master web development fundamentals with interactive, 
              animated lessons that make complex concepts simple to understand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link 
                to="/lessons" 
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white shadow hover:bg-primary/90 transition-colors"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Animated illustration */}
          <div className="flex-1 relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative animate-float">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <pre className="text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-hidden">
                    <code>
                      <span className="syntax-tag">&lt;div</span> 
                      <span className="syntax-attribute"> class</span>=
                      <span className="syntax-string">"animate-bounce"</span>
                      <span className="syntax-tag">&gt;</span>
                      <br />
                      &nbsp;&nbsp;Learn through animation!
                      <br />
                      <span className="syntax-tag">&lt;/div&gt;</span>
                    </code>
                  </pre>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-500 rounded-lg animate-pulse-slow opacity-70"></div>
                <div className="absolute -top-6 -left-6 h-16 w-16 bg-purple-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
            <p className="text-gray-600 dark:text-gray-400">Interactive Lessons</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
            <p className="text-gray-600 dark:text-gray-400">Animated Examples</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
            <p className="text-gray-600 dark:text-gray-400">Beginner Friendly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
