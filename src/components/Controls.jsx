import { cn } from '../utils/cn';
import { getThemeColors } from '../utils/theme';

const Controls = ({ selectedGroups, onGroupToggle, mode, onModeChange, theme }) => {
  const colors = getThemeColors(theme);

  const groups = [
    { id: 1, range: '1-13' },
    { id: 2, range: '14-26' },
    { id: 3, range: '27-39' },
    { id: 4, range: '40-52' },
  ];

  return (
    <div className={cn("rounded-lg p-6 border-2", colors.bgSecondary, colors.borderPrimary)}>
      {/* Group Selector */}
      <div className="mb-6">
        <h3 className={cn("text-sm font-semibold mb-3 uppercase tracking-wide", colors.textSecondary)}>
          Select Groups
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => onGroupToggle(group.id)}
              className={cn(
                "px-4 py-3 rounded-lg font-semibold border-2 cursor-pointer",
                colors.borderPrimary,
                selectedGroups.includes(group.id)
                  ? cn(colors.bgPrimary, colors.textOnPrimary)
                  : cn(colors.bgSecondary, colors.textOnSecondary)
              )}
            >
              Group {group.id} ({group.range})
            </button>
          ))}
        </div>
      </div>

      {/* Mode Selector */}
      <div>
        <h3 className={cn("text-sm font-semibold mb-3 uppercase tracking-wide", colors.textSecondary)}>
          Practice Mode
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onModeChange('number')}
            className={cn(
              "px-4 py-3 rounded-lg font-semibold border-2 cursor-pointer",
              colors.borderPrimary,
              mode === 'number'
                ? cn(colors.bgPrimary, colors.textOnPrimary)
                : cn(colors.bgSecondary, colors.textOnSecondary)
            )}
          >
            Number → Card
          </button>
          <button
            onClick={() => onModeChange('card')}
            className={cn(
              "px-4 py-3 rounded-lg font-semibold border-2 cursor-pointer",
              colors.borderPrimary,
              mode === 'card'
                ? cn(colors.bgPrimary, colors.textOnPrimary)
                : cn(colors.bgSecondary, colors.textOnSecondary)
            )}
          >
            Card → Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
