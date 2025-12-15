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

  if (theme === 'forest') {
    return {
      bg: 'bg-forest-light',
      bgPrimary: 'bg-forest-dark',
      bgSecondary: 'bg-forest-light',
      textPrimary: 'text-forest-darkest',
      textSecondary: 'text-forest-dark',
      textOnPrimary: 'text-forest-light',
      textOnSecondary: 'text-forest-darkest',
      border: 'border-forest-darkest',
      borderPrimary: 'border-forest-darkest',
      progressBg: 'bg-forest-medium',
      progressFill: 'bg-forest-darkest',
    };
  }

  if (theme === 'midnight') {
    return {
      bg: 'bg-midnight-medium',
      bgPrimary: 'bg-midnight-dark',
      bgSecondary: 'bg-midnight-medium',
      textPrimary: 'text-midnight-gold',
      textSecondary: 'text-midnight-gold',
      textOnPrimary: 'text-midnight-gold',
      textOnSecondary: 'text-midnight-gold',
      border: 'border-midnight-gold',
      borderPrimary: 'border-midnight-gold',
      progressBg: 'bg-midnight-dark',
      progressFill: 'bg-midnight-gold',
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
