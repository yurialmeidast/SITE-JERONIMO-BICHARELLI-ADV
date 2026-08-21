import React, { useState } from "react";

interface LogoProps {
  variant?: "dark-bg" | "light-bg";
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark-bg",
  className = "",
  size = "md"
}) => {
  const isDarkBg = variant === "dark-bg";
  const [imgSrc, setImgSrc] = useState<string>(
    isDarkBg ? "/logo_white.png" : "/logo.png"
  );

  // Sizing tokens calibrated for balanced, elegant proportions
  const heightClasses = {
    sm: "h-9 sm:h-10 md:h-11",
    md: "h-11 sm:h-12 md:h-13",
    lg: "h-13 sm:h-15 md:h-16",
    xl: "h-16 sm:h-18 md:h-20"
  };

  const handleError = () => {
    // If white/dark variant fails to load, fallback to original uploaded file
    if (imgSrc !== "/logo_alta_jeronimo_sem_fundo.png") {
      setImgSrc("/logo_alta_jeronimo_sem_fundo.png");
    }
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={imgSrc}
        alt="Jerônimo Bicharelli Advogados"
        onError={handleError}
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02] drop-shadow-sm`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
