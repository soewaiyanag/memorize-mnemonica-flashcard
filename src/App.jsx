import { useState, useEffect } from 'react';
import { CARD_STACK } from './data/cardStack';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import Navigation from './components/Navigation';
import Progress from './components/Progress';
import shuffleIcon from './assets/suffle.png';
import { cn } from './utils/cn';
import { getThemeColors } from './utils/theme';

function App() {
  const [selectedGroups, setSelectedGroups] = useState([1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState('number');
  const [isShuffled, setIsShuffled] = useState(false);
  const [cards, setCards] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [theme, setTheme] = useState('coffee');

  const colors = getThemeColors(theme);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const loadCards = () => {
    let newCards = [];
    selectedGroups.forEach((group) => {
      const start = (group - 1) * 13;
      const end = Math.min(start + 13, CARD_STACK.length);
      newCards.push(...CARD_STACK.slice(start, end));
    });

    if (isShuffled) {
      newCards = shuffleArray(newCards);
    }

    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    loadCards();
  }, [selectedGroups, isShuffled]);

  const handleGroupToggle = (group) => {
    setSelectedGroups((prev) => {
      const index = prev.indexOf(group);
      if (index > -1) {
        if (prev.length > 1) {
          return prev.filter((g) => g !== group).sort((a, b) => a - b);
        }
        return prev;
      }
      return [...prev, group].sort((a, b) => a - b);
    });
  };

  const handleFlip = () => {
    if (!isTransitioning) {
      setIsFlipped(!isFlipped);
    }
  };

  const navigateCard = (newIndex) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsTransitioning(false);
      }, 600);
    } else {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isTransitioning) {
      navigateCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1 && !isTransitioning) {
      navigateCard(currentIndex + 1);
    }
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsFlipped(false);
  };

  if (cards.length === 0) {
    return <div>Loading...</div>;
  }

  const currentCard = cards[currentIndex];

  return (
    <div className={cn("min-h-screen py-8 px-4", colors.bg)}>
      <div className="max-w-5xl mx-auto">
        {/* Header with Theme Selector */}
        <div className="text-center mb-8">
          <div className="flex justify-end mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => setTheme('coffee')}
                className={cn(
                  "w-8 h-8 rounded-full border-2 cursor-pointer",
                  theme === 'coffee' ? 'ring-2 ring-offset-2' : ''
                )}
                style={{ backgroundColor: '#452829', borderColor: '#452829' }}
                title="Coffee Theme"
              />
              <button
                onClick={() => setTheme('sea')}
                className={cn(
                  "w-8 h-8 rounded-full border-2 cursor-pointer",
                  theme === 'sea' ? 'ring-2 ring-offset-2' : ''
                )}
                style={{ backgroundColor: '#0C2B4E', borderColor: '#0C2B4E' }}
                title="Sea Theme"
              />
            </div>
          </div>
          <h1 className={cn("text-5xl font-bold mb-2", colors.textPrimary)}>
            MN3M0N1CA Stack
          </h1>
          <p className={cn("text-xl", colors.textSecondary)}>
            Master the memory deck in groups of 13
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8">
          <Controls
            selectedGroups={selectedGroups}
            onGroupToggle={handleGroupToggle}
            mode={mode}
            onModeChange={handleModeChange}
            theme={theme}
          />
        </div>

        {/* Flashcard */}
        <div className="mb-6">
          <Flashcard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            mode={mode}
            theme={theme}
          />
        </div>

        {/* Action Buttons - Shuffle */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={handleShuffle}
            className={cn(
              "p-3 rounded-lg border-2 cursor-pointer",
              colors.borderPrimary,
              isShuffled ? cn(colors.bgPrimary) : cn(colors.bgSecondary)
            )}
            title="Shuffle cards"
          >
            <img
              src={shuffleIcon}
              alt="Shuffle"
              className={cn("w-6 h-6", isShuffled ? "brightness-0 invert" : "brightness-0")}
            />
          </button>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <Navigation
            onPrev={handlePrev}
            onNext={handleNext}
            canGoPrev={currentIndex > 0 && !isTransitioning}
            canGoNext={currentIndex < cards.length - 1 && !isTransitioning}
            theme={theme}
          />
        </div>

        {/* Progress */}
        <Progress current={currentIndex + 1} total={cards.length} theme={theme} />

        {/* Footer */}
        <div className={cn("mt-8 text-center text-xs", colors.textSecondary)}>
          <p>
            Developed by{' '}
            <a
              href="https://github.com/soewaiyanag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/soewaiyanag
            </a>
          </p>
          <p className="mt-1">
            Card back design credit to NOC House of Playing Cards
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
