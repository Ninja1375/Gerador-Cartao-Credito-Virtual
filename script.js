let isFrontSide = true;

function generateCard() {
    const cardNumber = generateCardNumber();
    const cardHolder = document.getElementById('card-holder-input').value || 'NOME DO TITULAR';
    const expiryDate = document.getElementById('expiry-date-input').value || '12/25';
    const cvv = document.getElementById('cvv-input').value || '123';
    
    document.getElementById('card-number').innerText = cardNumber;
    document.getElementById('card-holder').innerText = cardHolder;
    document.getElementById('expiry-date').innerText = `VALIDADE: ${expiryDate}`;
    document.getElementById('cvv').innerText = `CVV: ${cvv}`;
}

function generateCardNumber() {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10);
        if ((i + 1) % 4 === 0 && i !== 15) {
            cardNumber += ' ';
        }
    }
    return cardNumber;
}

function toggleCardSide() {
    const card = document.getElementById('card');
    if (isFrontSide) {
        card.style.transform = 'rotateY(180deg)';
    } else {
        card.style.transform = 'rotateY(0deg)';
    }
    isFrontSide = !isFrontSide;
}

function downloadCard() {
    const cardSide = isFrontSide ? 'card-front' : 'card-back';
    const card = document.getElementById(cardSide);
    html2canvas(card).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = isFrontSide ? 'cartao_virtual_frente.png' : 'cartao_virtual_verso.png';
        link.click();
    });
}

const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.2/html2canvas.min.js';
document.body.appendChild(script);
