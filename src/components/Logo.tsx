import React from "react";

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

  // Exact image sizing classes with 3:1 aspect ratio, adjusted -15% for optimal proportion
  const sizeConfig = {
    sm: {
      full: "h-9 sm:h-10 w-auto",
      emblem: "h-8 sm:h-9 w-auto",
    },
    md: {
      full: "h-11 sm:h-13 md:h-14 lg:h-15 w-auto",
      emblem: "h-10 sm:h-11 md:h-13 w-auto",
    },
    lg: {
      full: "h-16 sm:h-18 md:h-22 w-auto",
      emblem: "h-14 sm:h-16 md:h-18 w-auto",
    },
    xl: {
      full: "h-22 sm:h-26 md:h-32 w-auto",
      emblem: "h-20 sm:h-24 md:h-28 w-auto",
    },
  };

  const current = sizeConfig[size] || sizeConfig.md;

  if (!showText) {
    return (
      <img
        src={isDark ? "/emblem_oficial_dark.png" : "/emblem_oficial_light.png"}
        alt="Jerônimo Bicharelli - Monograma"
        className={`${current.emblem} object-contain select-none drop-shadow-md transition-transform duration-300 group-hover:scale-105 ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={isDark ? "/logo_oficial_dark.png" : "/logo_oficial_trimmed.png"}
        alt="Jerônimo Bicharelli Advogados"
        className={`${current.full} object-contain select-none drop-shadow-md transition-transform duration-300 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
};
