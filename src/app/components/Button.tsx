import React from "react";

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "default" | "gray";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: "default" | "gray";
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-medium text-gray-800 flex justify-center px-8 py-3 rounded-full shadow hover:shadow-md transition-all duration-300";

  const variantStyles = {
    default: "font-semibold bg-white hover:bg-gray-100/80",
    gray: "font-normal hover:font-semibold bg-gray-100/80 hover:bg-white",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    // Renderiza <a> com estilos de botão
    return (
      <a
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Renderiza <button>
  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
