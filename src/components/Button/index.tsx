interface ButtonProps {
  character: string;
  value?: string;
  fn?: (e: any) => void;
  variantStyle?: string;
}

export function Button({ character, value, fn, variantStyle }: ButtonProps) {
  return(
    <button
      className={variantStyle}
      value={value}
      onClick={fn}
    >
      {character}
    </button>
  )
}