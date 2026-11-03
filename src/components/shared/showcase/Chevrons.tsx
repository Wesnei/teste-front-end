import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  translateX: number;
  setTranslateX: Dispatch<SetStateAction<number>>;
};

export default function Chevrons({ translateX, setTranslateX }: Props) {
  const handleNextRight = () => {
    if (translateX > -1932) {
      setTranslateX((prev) => prev - 322);
    }
  };

  const handleNextLeft = () => {
    if (translateX < 0) {
      setTranslateX((prev) => prev + 322);
    }
  };

  return (
    <nav className="chevrons-container">
      <button
        disabled={translateX >= 0}
        onClick={handleNextLeft}
        className="chevrons"
        aria-label="Scroll to the left"
        type="button"
      >
        <ChevronLeft size={20} color="#3F3F40" />
      </button>
      <button
        disabled={translateX <= -1932}
        onClick={handleNextRight}
        className="chevrons"
        aria-label="Scroll to the right"
        type="button"
      >
        <ChevronRight size={20} color="#3F3F40" />
      </button>
    </nav>
  );
}
