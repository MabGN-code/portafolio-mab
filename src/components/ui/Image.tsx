import { cn } from "cn";
import NextImage, { ImageProps as NextImageProps } from "next/image";


interface ImageProps extends NextImageProps {
  containerClassName?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

const roundedClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  rounded = "lg",
  priority = false,
  ...props
}: ImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-200",
        roundedClasses[rounded],
        containerClassName
      )}
    >
      <NextImage
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-500 hover:scale-105",
          className
        )}
        {...props}
      />
    </div>
  );
}

export default Image;