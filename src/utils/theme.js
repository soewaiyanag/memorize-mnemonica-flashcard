export const getThemeColors = (theme) => {
  if (theme === 'sea') {
    return {
      bg: 'bg-sea-light',
      bgPrimary: 'bg-sea-accent',
      bgSecondary: 'bg-sea-light',
      textPrimary: 'text-sea-dark',
      textSecondary: 'text-sea-medium',
      textOnPrimary: 'text-sea-light',
      textOnSecondary: 'text-sea-dark',
      border: 'border-sea-dark',
      borderPrimary: 'border-sea-dark',
      progressBg: 'bg-sea-accent',
      progressFill: 'bg-sea-dark',
    };
  }

  // Coffee theme (default)
  return {
    bg: 'bg-coffee-light',
    bgPrimary: 'bg-coffee-dark',
    bgSecondary: 'bg-coffee-cream',
    textPrimary: 'text-coffee-dark',
    textSecondary: 'text-coffee-gray',
    textOnPrimary: 'text-coffee-cream',
    textOnSecondary: 'text-coffee-dark',
    border: 'border-coffee-dark',
    borderPrimary: 'border-coffee-dark',
    progressBg: 'bg-coffee-light',
    progressFill: 'bg-coffee-dark',
  };
};
