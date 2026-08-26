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

  // Exact sizing classes
  const sizeClasses = {
    sm: showText ? "h-9 sm:h-10 w-auto" : "h-8 sm:h-9 w-auto",
    md: showText ? "h-11 sm:h-13 md:h-14 lg:h-15 w-auto" : "h-10 sm:h-11 md:h-13 w-auto",
    lg: showText ? "h-16 sm:h-18 md:h-22 w-auto" : "h-14 sm:h-16 md:h-18 w-auto",
    xl: showText ? "h-22 sm:h-26 md:h-32 w-auto" : "h-20 sm:h-24 md:h-28 w-auto",
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.md;

  if (!showText) {
    return (
      <svg
        viewBox="0 0 108 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSizeClass} object-contain select-none drop-shadow-md transition-transform duration-300 group-hover:scale-105 ${className}`}
        aria-label="Jeronimo Bicharelli - Monograma"
      >
        <g transform="translate(16, 16)">
          <rect x="4" y="4" width="76" height="128" rx="38" stroke="#D96B27" strokeWidth="5" fill="none" />
          <g fill="#D96B27">
            {/* J Top Serif & Hook */}
            <path d="M30 26 H54 V30 C50 30 48 31 47 34 V102 C47 114 39 120 30 117 C25 115 23 110 26 106 C28 103 31 104 33 107 C35 110 39 109 40 102 V34 C39 31 36 30 30 30 Z" />
            {/* B Lobes and structure */}
            <path d="M38 34 H55 C66 34 72 40 72 49 C72 56 67 61 58 62 C68 63 75 70 75 80 C75 91 66 98 52 98 H28 V93 H36 V39 H30 V34 H38 Z M44 40 V58 H54 C61 58 65 54 65 49 C65 43 61 40 53 40 Z M44 64 V92 H51 C60 92 65 87 65 80 C65 73 60 64 50 64 Z" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSizeClass} object-contain select-none drop-shadow-md transition-transform duration-300 group-hover:scale-105`}
        aria-label="Jeronimo Bicharelli Advogados"
      >
        {/* Monogram Capsule */}
        <g transform="translate(16, 12)">
          <rect x="4" y="4" width="76" height="128" rx="38" stroke="#D96B27" strokeWidth="5" fill="none" />
          <g fill="#D96B27">
            {/* J Top Serif */}
            <path d="M30 26 H54 V30 C50 30 48 31 47 34 V102 C47 114 39 120 30 117 C25 115 23 110 26 106 C28 103 31 104 33 107 C35 110 39 109 40 102 V34 C39 31 36 30 30 30 Z" />
            {/* B Lobes and structure */}
            <path d="M38 34 H55 C66 34 72 40 72 49 C72 56 67 61 58 62 C68 63 75 70 75 80 C75 91 66 98 52 98 H28 V93 H36 V39 H30 V34 H38 Z M44 40 V58 H54 C61 58 65 54 65 49 C65 43 61 40 53 40 Z M44 64 V92 H51 C60 92 65 87 65 80 C65 73 60 64 50 64 Z" fillRule="evenodd" />
          </g>
        </g>

        {/* Typography: JERONIMO (sem ^), BICHARELLI, ADVOGADOS */}
        <text
          x="120"
          y="58"
          fontFamily="'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontSize="36"
          fontWeight="600"
          fill={isDark ? "#FFFFFF" : "#0A192F"}
          letterSpacing="1.5"
        >
          JERONIMO
        </text>
        <text
          x="120"
          y="98"
          fontFamily="'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontSize="36"
          fontWeight="600"
          fill={isDark ? "#FFFFFF" : "#0A192F"}
          letterSpacing="1.5"
        >
          BICHARELLI
        </text>
        <text
          x="122"
          y="126"
          fontFamily="'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif"
          fontSize="15"
          fontWeight="500"
          fill={isDark ? "#CBD5E1" : "#475569"}
          letterSpacing="6.5"
        >
          ADVOGADOS
        </text>
      </svg>
    </div>
  );
};
