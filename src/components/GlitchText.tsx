interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <span 
      className={`glitch ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;
