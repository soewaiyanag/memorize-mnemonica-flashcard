import { useState, useEffect } from 'react';
import { getCardImage } from '../utils/cardImageHelper';
import cardBackImage from '../assets/card-images/noc-back.png';

const Flashcard = ({ card, isFlipped, onFlip, mode, theme }) => {
  const cardImageUrl = getCardImage(card);
  const [showName, setShowName] = useState(false);
  const [showPosition, setShowPosition] = useState(false);

  // Determine what to show based on mode and flip state
  // Card mode: always show card name
  // Number mode: only show card name after flipping
  const showCardFront = mode === 'card' || (mode === 'number' && isFlipped);

  // Determine when to rotate the card (show face vs back)
  // Number mode: start with back, flip to show face
  // Card mode: start with face, flip to show back
  const shouldRotateCard = (mode === 'number' && isFlipped) || (mode === 'card' && !isFlipped);

  // Determine when to show position number
  // Number mode: always show position
  // Card mode: only show position after flipping (when showing answer)
  const shouldShowPosition = mode === 'number' || (mode === 'card' && isFlipped);

  // Show name halfway through flip animation (300ms) and complete by end of flip (600ms total)
  useEffect(() => {
    if (showCardFront) {
      if (mode === 'card') {
        // In card mode, always show name immediately
        setShowName(true);
      } else {
        // In number mode, show name after flip animation
        const timer = setTimeout(() => {
          setShowName(true);
        }, 300); // Start halfway through the 600ms flip
        return () => clearTimeout(timer);
      }
    } else {
      setShowName(false);
    }
  }, [showCardFront, mode]);

  // Show position with same timing as card name
  useEffect(() => {
    if (shouldShowPosition) {
      if (mode === 'number') {
        // In number mode, always show position immediately
        setShowPosition(true);
      } else {
        // In card mode, show position after flip animation
        const timer = setTimeout(() => {
          setShowPosition(true);
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      setShowPosition(false);
    }
  }, [shouldShowPosition, mode]);

  // Get theme colors
  const getThemeColors = () => {
    if (theme === 'sea') {
      return {
        textPrimary: 'text-sea-dark',
        textSecondary: 'text-sea-medium',
        border: 'border-sea-dark',
      };
    }
    return {
      textPrimary: 'text-coffee-dark',
      textSecondary: 'text-coffee-gray',
      border: 'border-coffee-dark',
    };
  };

  const colors = getThemeColors();

  return (
    <div className="flex flex-col items-center">
      {/* Info Display Above Card */}
      <div className="mb-4 sm:mb-8 text-center h-[80px] sm:h-[140px] flex flex-col">
        {/* Show position based on mode */}
        <div
          className={`mb-1 sm:mb-2 transition-opacity duration-300 ${
            showPosition ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`text-[10px] sm:text-xs font-bold ${colors.textSecondary}/70 mb-1 sm:mb-2 uppercase tracking-widest`}>
            Position
          </div>
          <div className={`text-4xl sm:text-7xl font-extrabold ${colors.textPrimary}`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
            {card.num}
          </div>
        </div>

        {/* Show card name only when card face is visible and animation is complete */}
        <div
          className={`mt-1 sm:mt-3 transition-opacity duration-300 ${
            showName ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {showCardFront && (
            <div className={`text-base sm:text-2xl font-bold ${colors.textPrimary}`} style={{ fontFamily: 'Georgia, serif' }}>
              {card.value} of {card.suit}
            </div>
          )}
        </div>
      </div>

      {/* Playing Card with Flip Animation */}
      <div
        onClick={onFlip}
        className="relative cursor-pointer perspective-1000 w-[200px] h-[280px] sm:w-[300px] sm:h-[420px]"
      >
        <div
          className={`relative w-full h-full transition-transform duration-600 transform-style-3d ${
            shouldRotateCard ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front Side - Card Back */}
          <div className="absolute w-full h-full backface-hidden">
            <div className={`w-full h-full rounded-2xl overflow-hidden border-2 ${colors.border}`}>
              <img
                src={cardBackImage}
                alt="Card back"
                className="w-full h-full object-fill"
              />
            </div>
          </div>

          {/* Back Side - Card Front */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className={`w-full h-full rounded-2xl overflow-hidden border-2 ${colors.border}`}>
              <img
                src={cardImageUrl}
                alt={`${card.value} of ${card.suit}`}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tap to flip hint */}
      <div className={`text-center mt-3 sm:mt-6 text-xs sm:text-sm ${colors.textSecondary} italic`}>
        Click card to flip
      </div>
    </div>
  );
};

export default Flashcard;
