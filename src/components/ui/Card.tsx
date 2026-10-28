import { cn } from "cn";
import React from "react"; 

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardRoot = ({ children, className, ...props }: CardRootProps) => {
  return (
    <div
      className={cn(
        // Estilos base, bordes y transiciones de tema / hover
        "group relative flex flex-col overflow-hidden rounded-lg border",
        "bg-white text-slate-900 border-slate-200 shadow-sm",
        "dark:bg-pink-100/60 dark:text-slate-100 dark:border-pink-200/80 dark:shadow-xl",
        "transition-all duration-200 ease-in-out",
        "hover:border-pink-400/50 hover:shadow-md dark:hover:border-pink-400/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-4 pb-3", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className, ...props }: CardTitleProps) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold tracking-tight transition-colors duration-200",
        "text-slate-900 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const CardDescription = ({ children, className, ...props }: CardDescriptionProps) => {
  return (
    <div
      className={cn(
        "text-sm text-pink-600 dark:text-pink-200 transition-colors duration-200 px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={cn("p-6 pt-0 flex-1", className)} {...props}>
      {children}
    </div>
  );
};

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardFooter = ({ children, className, ...props }: CardFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center p-6 mt-auto border-t border-slate-100 dark:border-slate-800/60 pt-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Exportación unificada en formato de objeto (Compound Component)
export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
};

export default Card;