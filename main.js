class LottoBalls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set numbers(numbers) {
    this.render(numbers);
  }

  render(numbers) {
    this.shadowRoot.innerHTML = `
      <style>
        .ball-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 20px;
        }
        .ball {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: white;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }
        .ball:hover {
          transform: scale(1.1);
        }
      </style>
      <div class="ball-container">
        ${numbers.map(num => `
          <div class="ball" style="background-color: ${this.getBallColor(num)}">
            ${num}
          </div>
        `).join('')}
      </div>
    `;
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

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
});

// Generator Logic
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
