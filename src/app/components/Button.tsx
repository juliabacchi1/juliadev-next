import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "gray";
}

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) => {
  // Estilos base comuns a todas as variações
  const baseStyles =
    "font-medium text-gray-800 flex justify-center px-8 py-3 rounded-full shadow hover:shadow-md transition-all duration-300";

  // Estilos específicos por variação
  const variantStyles = {
    default: "bg-white hover:bg-gray-100",
    gray: "bg-gray-100 hover:bg-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
