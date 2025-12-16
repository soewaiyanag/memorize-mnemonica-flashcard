// Helper function to get the card image path
export const getCardImage = (card) => {
  const { value, suit } = card;

  // Convert suit to lowercase for filename
  const cardSuit = suit.toLowerCase();

  // Map card values to filename format
  const valueMap = {
    'Ace': 'ace',
    'Two': '2',
    'Three': '3',
    'Four': '4',
    'Five': '5',
    'Six': '6',
    'Seven': '7',
    'Eight': '8',
    'Nine': '9',
    'Ten': '10',
    'Jack': 'jack',
    'Queen': 'queen',
    'King': 'king'
  };

  const fileValue = valueMap[value];

  // Use "2" version for face cards (Jack, Queen, King)
  const isFaceCard = value === 'Jack' || value === 'Queen' || value === 'King';
  const filename = isFaceCard
    ? `${fileValue}_of_${cardSuit}2.png`
    : `${fileValue}_of_${cardSuit}.png`;

  // Return the import path for Vite
  return new URL(`../assets/card-images/${filename}`, import.meta.url).href;
};
