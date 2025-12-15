import { cn } from '../utils/cn';
import { getThemeColors } from '../utils/theme';

const Progress = ({ current, total, theme }) => {
  const percentage = (current / total) * 100;
  const colors = getThemeColors(theme);

  return (
    <div className={cn("rounded-lg p-3 sm:p-6 border-2", colors.bgSecondary, colors.borderPrimary)}>
      <div className="text-center mb-2 sm:mb-4">
        <span className={cn("text-sm sm:text-xl font-bold", colors.textPrimary)}>
          Card {current} of {total}
        </span>
      </div>
      <div className={cn("relative h-2 sm:h-3 rounded-full overflow-hidden", colors.progressBg)}>
        <div
          className={cn("h-full transition-all duration-300 ease-out", colors.progressFill)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
