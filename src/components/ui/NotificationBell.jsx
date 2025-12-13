import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { cn } from "@/components/ui/utils";

export const NotificationBell = ({ count }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="relative">
      <Bell
        className={cn(
          "w-6 h-6 text-foreground transition-all duration-200",
          isAnimating && "animate-notification-bounce"
        )}
      />
      {count > 0 && (
        <span
          className={cn(
            "absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center",
            "rounded-full text-xs font-bold gradient-primary text-primary-foreground",
            isAnimating && "animate-pulse-glow"
          )}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </div>
  );
};
