import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "default",
  size = "md",
  color,
  shape = "round",
  disabled = false,
  iconStart,
  iconEnd,
  active = false,
  loading = false,
  block = false,
  className,
  position = "center",
  link,
  target,
  ...props
}) => {
  const positionClasses = classNames({
    "!justify-start": position === "start",
    "!justify-center": position === "center",
    "!justify-end": position === "end",
  });

  const buttonClasses = classNames(
    "inline-flex items-center justify-center font-poppins font-semibold transition-all duration-200  transform active:scale-95",
    positionClasses,
    {
      "bg-primary-blue text-white border-2 border-transparent hover:bg-primary-blue":
        variant === "default",
      "bg-transparent text-primary-blue border-2 border-primary-blue hover:text-primary-blue":
        variant === "twoTone",
      "bg-transparent text-current": variant === "plain",
      "bg-white text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white":
        variant === "outline",
      "px-5 py-2 text-base sm:leading-8 sm:text-lg": size === "md",
      "px-4 py-2 text-sm sm:leading-7 sm:text-base": size === "sm",
      "px-3 py-1 text-xs sm:leading-6 sm:text-sm": size === "xs",
      "px-6 py-3 text-xl sm:leading-9 sm:text-2xl": size === "lg",
      "rounded-lg": shape === "round",
      "rounded-full": shape === "circle",
      "rounded-none": shape === "none",
      "cursor-not-allowed": disabled || loading,
      "w-full": block,
    },
    color && `text-${color} border-${color}`,
    !disabled &&
      !loading &&
      color &&
      variant === "outline" &&
      `hover:bg-${color} hover:text-white`,
  );

  return link ? (
    <Link
      to={link}
      target={target}
      className={`${buttonClasses} ${className}`}
      role="button"
      aria-disabled={disabled || loading}
      {...props}
    >
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {loading ? "Loading..." : children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </Link>
  ) : (
    <button
      className={`${buttonClasses} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {loading ? "Loading..." : children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["solid", "twoTone", "plain", "default", "outline"]),
  position: PropTypes.oneOf(["start", "center", "end"]),
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  color: PropTypes.string,
  shape: PropTypes.oneOf(["round", "circle", "none"]),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
  loading: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
