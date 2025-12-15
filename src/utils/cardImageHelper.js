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
  const filename = `${fileValue}_of_${cardSuit}.png`;

  // Return the import path for Vite
  return new URL(`../assets/card-images/${filename}`, import.meta.url).href;
};
