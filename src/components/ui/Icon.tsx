import { cn } from "cn";

interface IconSize {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface IconProps {
  className?: string;
  IconName: string;
  variant: "outlined" | "solid";
  size?: keyof IconSize;
}

const iconSizeClasses: IconSize = {
  xs: "w-3 h-3 text-xs",
  sm: "w-4 h-4 text-sm",
  md: "w-5 h-5 text-base",
  lg: "w-6 h-6 text-lg",
  xl: "w-7 h-7 text-xl",
};

function Icon({
  variant = "solid",
  className,
  IconName,
  size = "md",
}: IconProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        iconSizeClasses[size],
        {
          "material-symbols-outlined": variant === "outlined",
          "material-symbols-solid": variant === "solid",
        },
        className,
      )}
    >
      {IconName}
    </span>
  );
}

export default Icon;
