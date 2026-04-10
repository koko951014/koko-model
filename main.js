class LottoBalls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set numbers(numbers) {
    this.shadowRoot.innerHTML = `
      <style>
        .ball-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .ball {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
          font-weight: bold;
          margin: 0 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
      </style>
    `;
    const container = document.createElement('div');
    container.classList.add('ball-container');

    numbers.forEach(number => {
      const ball = document.createElement('div');
      ball.classList.add('ball');
      ball.textContent = number;
      ball.style.backgroundColor = this.getBallColor(number);
      container.appendChild(ball);
    });

    this.shadowRoot.appendChild(container);
  }

  getBallColor(number) {
    if (number <= 10) return '#f2b526'; // Yellow
    if (number <= 20) return '#3498db'; // Blue
    if (number <= 30) return '#e74c3c'; // Red
    if (number <= 40) return '#2ecc71'; // Green
    return '#9b59b6'; // Purple
  }
}

customElements.define('lotto-balls', LottoBalls);

const generatorBtn = document.getElementById('generator-btn');
const lottoBalls = document.querySelector('lotto-balls');

generatorBtn.addEventListener('click', () => {
  const numbers = generateLottoNumbers();
  lottoBalls.numbers = numbers;
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers).sort((a,b) => a-b);
}
