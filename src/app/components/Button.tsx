import React from "react";

type ButtonAsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "default" | "gray" | "red" | "pink" | "circle" | "work";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: "default" | "gray" | "red" | "pink" | "circle" | "work";
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
  const isCircle = variant === "circle";

  const baseStyles = isCircle
    ? "w-10 h-10 p-0 rounded-full shadow flex items-center justify-center transition-all duration-300"
    : "flex justify-center px-8 py-3 rounded-full shadow hover:shadow-md transition-all duration-300";

  const variantStyles = {
    default: "font-semibold text-gray-800 bg-white hover:bg-gray-100/80",
    gray: "font-normal hover:font-semibold text-gray-800 bg-gray-100/80 hover:bg-white",
    red: "font-semibold bg-white text-abouttext hover:bg-abouttext/50 hover:text-white",
    pink: "font-normal hover:font-semibold bg-abouttext/50 text-white hover:bg-white hover:text-abouttext",
    circle: "bg-gray-200 hover:bg-gray-300",
    work: "font-normal hover:font-semibold bg-abouttext/60 text-white hover:bg-abouttext/80",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <a
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
