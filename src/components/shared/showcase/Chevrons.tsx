import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  translateX: number;
  setTranslateX: Dispatch<SetStateAction<number>>;
  maxTranslate: number;
  step: number;
};

export default function Chevrons({
  translateX,
  setTranslateX,
  maxTranslate,
  step,
}: Props) {
  const handleNextRight = () => {
    setTranslateX((prev) => Math.max(prev - step, maxTranslate));
  };

  const handleNextLeft = () => {
    setTranslateX((prev) => Math.min(prev + step, 0));
  };

  return (
    <div className="chevrons-container">
      <button
        disabled={translateX >= 0}
        onClick={handleNextLeft}
        className="chevrons"
        aria-label="Ver produtos anteriores"
        type="button"
      >
        <ChevronLeft size={20} color="#3F3F40" aria-hidden="true" />
      </button>
      <button
        disabled={translateX <= maxTranslate}
        onClick={handleNextRight}
        className="chevrons"
        aria-label="Ver próximos produtos"
        type="button"
      >
        <ChevronRight size={20} color="#3F3F40" aria-hidden="true" />
      </button>
    </div>
  );
}
