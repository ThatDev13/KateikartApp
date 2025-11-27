const card = document.querySelector('.card');
const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const prevBtn = document.getElementById('prev-btn');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');

let currentCard = 0;
let cards = [];

// Sample data (in case localStorage is empty)
const sampleCards = [
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "sofern"?', answer: 'Konditionalsatz' },
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "bevor"?', answer: 'Temporalsatz' },
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "welche"?', answer: 'Relativsatz' },
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "weil"?', answer: 'Kausalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "falls"?', answer: 'Konditionalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "damit"?', answer: 'Finalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "nachdem"?', answer: 'Temporalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "da"?', answer: 'Kausalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "wenn"?', answer: 'Konditionalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "als"?', answer: 'Temporalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "um zu"?', answer: 'Finalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "das"?', answer: 'Finalsatz, Relativsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "während"?', answer: 'Temporal'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "seit"?', answer: 'Temporalsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "der"?', answer: 'Relativsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "die"?', answer: 'Relativsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "dem"?', answer: 'Relativsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "dem"?', answer: 'Relativsatz'},
    { question: 'Zu welchem Adverbialsatz gehört die Konjunktion "welcher"?', answer: 'Relativsatz'},
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getCardsFromLocalStorage() {
    cards = sampleCards;
    shuffleArray(cards); // Shuffle the cards
    localStorage.setItem('flashcards', JSON.stringify(cards));
}

function showCard() {
    if (cards.length === 0) {
        cardFront.textContent = 'Bitte füge neue Karten hinzu.';
        cardBack.textContent = '';
        return;
    }
    cardFront.textContent = cards[currentCard].question;
    cardBack.textContent = cards[currentCard].answer;
    card.classList.remove('flipped');
}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextCard() {
    if (cards.length === 0) return;
    currentCard = (currentCard + 1) % cards.length;
    showCard();
}

function prevCard() {
    if (cards.length === 0) return;
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard();
}

// Event Listeners
flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Initial load
getCardsFromLocalStorage();
showCard();
