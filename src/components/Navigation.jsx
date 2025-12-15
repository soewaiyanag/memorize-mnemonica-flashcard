import { cn } from '../utils/cn';
import { getThemeColors } from '../utils/theme';

const Navigation = ({ onPrev, onNext, canGoPrev, canGoNext, theme }) => {
  const colors = getThemeColors(theme);

  return (
    <div className="flex gap-2 sm:gap-4 justify-center items-center">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={cn(
          "flex-1 px-3 sm:px-6 py-2 sm:py-4 rounded-lg text-xs sm:text-base font-semibold border-2",
          colors.bgSecondary,
          colors.textOnSecondary,
          colors.borderPrimary,
          canGoPrev ? "cursor-pointer" : "cursor-not-allowed opacity-40"
        )}
      >
        ← Previous
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={cn(
          "flex-1 px-3 sm:px-6 py-2 sm:py-4 rounded-lg text-xs sm:text-base font-semibold border-2",
          colors.bgSecondary,
          colors.textOnSecondary,
          colors.borderPrimary,
          canGoNext ? "cursor-pointer" : "cursor-not-allowed opacity-40"
        )}
      >
        Next →
      </button>
    </div>
  );
};

export default Navigation;
