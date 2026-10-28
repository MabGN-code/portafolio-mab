
import { cn } from "cn";


interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const ButtonSizeClasses: Size = {
  xs: "text-xs px-2",
  sm: "text-sm px-2",
  md: "text-base px-2",
  lg: "text-lg px-2",
  xl: "text-xl px-2",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size: keyof Size;
  
}
function Button({ children, size = "md", className, type = 'button', disabled, ...props  }: ButtonProps) {

  return (
    <button 
    type={type}
    disabled={disabled}
    className={cn(`
      rounded-2xl
      px-2
      w-fit
      hover:transition-colors duration-200 ease-in-out
      bg-pink-400
      dark:bg-pink-100
      dark:text-pink-800
      hover:bg-pink-100
      hover:text-pink-800
      hover:dark:bg-pink-400
      hover:dark:text-pink-100

     ${className}`, ButtonSizeClasses[size])
     }
     {...props}
    >
      {children}
    </button>
  );
}

export default Button;
