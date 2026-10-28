import { cn } from "cn";

interface BadgeSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const BadgeSizeClasses: Record<keyof BadgeSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
  size: keyof BadgeSize;
}
function Badge({ children, size = "md", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        `border-solid border-2 rounded-xl px-2 py-1 w-fit`,
        BadgeSizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
