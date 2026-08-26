import React from "react";
import {
  LOGO_DARK_BASE64,
  LOGO_LIGHT_BASE64,
  EMBLEM_BASE64,
} from "../data/logoAssets";

interface LogoProps {
  variant?: "dark-bg" | "light-bg";
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark-bg",
  className = "",
  showText = true,
  size = "md",
}) => {
  const isDark = variant === "dark-bg";

  // Exact responsive height scaling
  const sizeClasses = {
    sm: showText ? "h-9 sm:h-10 w-auto" : "h-8 sm:h-9 w-auto",
    md: showText ? "h-11 sm:h-13 md:h-14 lg:h-15 w-auto" : "h-10 sm:h-11 md:h-13 w-auto",
    lg: showText ? "h-16 sm:h-18 md:h-22 w-auto" : "h-14 sm:h-16 md:h-18 w-auto",
    xl: showText ? "h-22 sm:h-26 md:h-32 w-auto" : "h-20 sm:h-24 md:h-28 w-auto",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  if (!showText) {
    return (
      <img
        src={EMBLEM_BASE64}
        alt="Jeronimo Bicharelli - Monograma"
        className={`${currentSizeClass} object-contain select-none drop-shadow-sm transition-transform duration-300 group-hover:scale-105 ${className}`}
        loading="eager"
        decoding="sync"
      />
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={isDark ? LOGO_DARK_BASE64 : LOGO_LIGHT_BASE64}
        alt="Jeronimo Bicharelli Advogados"
        className={`${currentSizeClass} object-contain select-none drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
