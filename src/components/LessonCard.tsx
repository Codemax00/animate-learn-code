
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress?: number;
  path: string;
  completed?: boolean;
  className?: string;
}

const LessonCard = ({
  title,
  description,
  icon,
  progress = 0,
  path,
  completed = false,
  className,
}: LessonCardProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "group block relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {description}
            </p>
          </div>
          
          {completed && (
            <div className="p-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      
      {progress > 0 && !completed && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </Link>
  );
};

export default LessonCard;
