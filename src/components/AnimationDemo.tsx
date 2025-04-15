
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface AnimationDemoProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  controls?: boolean;
}

const AnimationDemo = ({
  title,
  children,
  description,
  controls = true,
}: AnimationDemoProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);

  // Reset animation
  const resetAnimation = () => {
    setKey((prev) => prev + 1);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-medium">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>

      <div
        key={key}
        className="p-8 flex items-center justify-center min-h-[300px] bg-gray-50 dark:bg-gray-900"
        style={{ animationPlayState: isPlaying ? "running" : "paused" }}
      >
        {children}
      </div>

      {controls && (
        <div className="p-4 flex justify-center space-x-4 border-t border-gray-200 dark:border-gray-700">
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            onClick={resetAnimation}
            aria-label="Reset animation"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimationDemo;
