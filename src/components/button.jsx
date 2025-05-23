// src/components/Button.jsx
import React from "react";
import PropTypes from "prop-types";

const sizes = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
  neutral: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
  success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
  error: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
};

export default function Button({
  children,
  size = "md",
  variant = "primary",
  disabled = false,
  showLeftIcon = true,
  leftIcon: LeftIcon,
  showRightIcon = true,
  rightIcon: RightIcon,
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2
        ${sizes[size]} ${variants[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      disabled={disabled}
      {...props}
    >
      {showLeftIcon && LeftIcon && <LeftIcon className="w-5 h-5" />}
      {children}
      {showRightIcon && RightIcon && <RightIcon className="w-5 h-5" />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "neutral", "success", "error"]),
  disabled: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  leftIcon: PropTypes.elementType,
  showRightIcon: PropTypes.bool,
  rightIcon: PropTypes.elementType,
};