const cards = [
    { question: 'Löse folgenden Term: 2x + 5 = 15', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 3x - 7 = 8', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 4x + 10 = 26', answer: 'x = 4' },
    { question: 'Löse folgenden Term: 5x - 3 = 22', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 6x + 8 = 44', answer: 'x = 6' },
    { question: 'Löse folgenden Term: 7x - 1 = 20', answer: 'x = 3' },
    { question: 'Löse folgenden Term: 8x + 12 = 28', answer: 'x = 2' },
    { question: 'Löse folgenden Term: 9x - 5 = 31', answer: 'x = 4' },
    { question: 'Löse folgenden Term: 10x + 2 = 52', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 2x - 9 = 1', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 3x + 11 = 26', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 4x - 6 = 14', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 5x + 1 = 46', answer: 'x = 9' },
    { question: 'Löse folgenden Term: 6x - 2 = 28', answer: 'x = 5' },
    { question: 'Löse folgenden Term: 7x + 9 = 65', answer: 'x = 8' },
    { question: 'Löse folgenden Term: 8x - 4 = 60', answer: 'x = 8' },
    { question: 'Löse folgenden Term: 9x + 7 = 88', answer: 'x = 9' },
    { question: 'Löse folgenden Term: 10x - 8 = 72', answer: 'x = 8' },
    { question: 'Löse folgenden Term: 2x + 13 = 19', answer: 'x = 3' },
];

let currentCard = 0;

const cardFront = document.querySelector('.card-front p');
const cardBack = document.querySelector('.card-back p');
const flipBtn = document.getElementById('flip-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showCard() {
    cardFront.textContent = cards[currentCard].question;
    cardBack.textContent = cards[currentCard].answer;
}

function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    showCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard();
}

flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

showCard();
