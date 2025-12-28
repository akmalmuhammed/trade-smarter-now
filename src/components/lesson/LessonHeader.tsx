import { ArrowLeft, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface LessonHeaderProps {
  courseTitle: string;
  lessonNumber: number;
  totalLessons: number;
  progress: number;
  timeLeft: number;
  xp: number;
}

export const LessonHeader = ({
  courseTitle,
  lessonNumber,
  totalLessons,
  progress,
  timeLeft,
  xp,
}: LessonHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <Link
            to="/courses/crypto"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Back to Course</span>
          </Link>
          
          <span className="text-sm text-muted-foreground font-medium">
            Lesson {lessonNumber} of {totalLessons}
          </span>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Menu className="w-4 h-4 text-muted-foreground" />
            </button>
            <Link to="/profile" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <User className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Progress value={progress} className="flex-1 h-2" />
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {Math.round(progress)}% • {timeLeft} min left
          </span>
          <div className="flex items-center gap-1 px-2 py-1 bg-xp/10 rounded-full">
            <span className="text-xp text-xs font-semibold">🏆 {xp} XP</span>
          </div>
        </div>
      </div>
    </header>
  );
};
