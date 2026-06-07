const appData = {
  restaurant: {
    name: 'Ресторан "Золотая Лоза"',
    address: 'ул. Тверская, 12, Москва',
    phone: '+7 (495) 123-45-67',
    inn: '7701123456',
    ogrn: '1234567890123',
    email: 'info@golden-vine.ru',
    website: 'golden-vine.ru',
    founded: 2015,
    employees: 48
  },

  menu: {
    'Напитки': [
      { id: 'd1', name: 'Эспрессо', price: 180, icon: 'coffee' },
      { id: 'd2', name: 'Капучино', price: 250, icon: 'coffee' },
      { id: 'd3', name: 'Латте', price: 280, icon: 'coffee' },
      { id: 'd4', name: 'Чай чёрный', price: 150, icon: 'coffee' },
      { id: 'd5', name: 'Чай зелёный', price: 150, icon: 'coffee' },
      { id: 'd6', name: 'Лимонад', price: 200, icon: 'coffee' },
      { id: 'd7', name: 'Сок апельс.', price: 180, icon: 'coffee' },
      { id: 'd8', name: 'Вода мин.', price: 120, icon: 'coffee' },
      { id: 'd9', name: 'Морс клюкв.', price: 160, icon: 'coffee' }
    ],
    'Еда': [
      { id: 'f1', name: 'Борщ', price: 320, icon: 'food' },
      { id: 'f2', name: 'Солянка', price: 350, icon: 'food' },
      { id: 'f3', name: 'Стейк Рибай', price: 890, icon: 'food' },
      { id: 'f4', name: 'Паста Карбонара', price: 450, icon: 'food' },
      { id: 'f5', name: 'Цезарь с курицей', price: 380, icon: 'food' },
      { id: 'f6', name: 'Ризотто с грибами', price: 420, icon: 'food' },
      { id: 'f7', name: 'Бургер гурме', price: 490, icon: 'food' },
      { id: 'f8', name: 'Филе лосося', price: 650, icon: 'food' },
      { id: 'f9', name: 'Овощное рагу', price: 280, icon: 'food' }
    ],
    'Десерты': [
      { id: 's1', name: 'Тирамису', price: 350, icon: 'food' },
      { id: 's2', name: 'Чизкейк', price: 320, icon: 'food' },
      { id: 's3', name: 'Панна-котта', price: 290, icon: 'food' },
      { id: 's4', name: 'Фондан шоколадный', price: 380, icon: 'food' },
      { id: 's5', name: 'Мороженое', price: 180, icon: 'food' },
      { id: 's6', name: 'Наполеон', price: 250, icon: 'food' }
    ]
  },

  todayTransactions: [
    { id: 't1', items: [{id:'d2', qty:2},{id:'f3', qty:1}], total: 1390, method: 'card', time: '09:15', customer: 'Анна С.' },
    { id: 't2', items: [{id:'d1', qty:1},{id:'f4', qty:1}], total: 630, method: 'cash', time: '09:42', customer: 'Иван П.' },
    { id: 't3', items: [{id:'d3', qty:1},{id:'s1', qty:1}], total: 630, method: 'wallet', time: '10:05', customer: 'Мария К.' },
    { id: 't4', items: [{id:'d5', qty:2},{id:'f1', qty:1},{id:'f5', qty:1}], total: 1030, method: 'card', time: '10:30', customer: 'Дмитрий В.' },
    { id: 't5', items: [{id:'d7', qty:1},{id:'f6', qty:1},{id:'s2', qty:1}], total: 920, method: 'cash', time: '11:00', customer: 'Елена Н.' },
    { id: 't6', items: [{id:'d2', qty:1},{id:'f2', qty:1},{id:'f9', qty:1}], total: 880, method: 'card', time: '11:25', customer: 'Алексей Р.' },
    { id: 't7', items: [{id:'d9', qty:1},{id:'f7', qty:2}], total: 1140, method: 'wallet', time: '11:50', customer: 'Ольга Т.' },
    { id: 't8', items: [{id:'d4', qty:1},{id:'f8', qty:1},{id:'s4', qty:1}], total: 1180, method: 'card', time: '12:15', customer: 'Сергей М.' },
    { id: 't9', items: [{id:'d3', qty:2},{id:'s3', qty:1}], total: 850, method: 'cash', time: '12:40', customer: 'Наталья К.' },
    { id: 't10', items: [{id:'d6', qty:1},{id:'f5', qty:1},{id:'s5', qty:2}], total: 940, method: 'card', time: '13:10', customer: 'Павел И.' },
    { id: 't11', items: [{id:'d1', qty:2},{id:'f3', qty:1},{id:'s1', qty:1}], total: 1590, method: 'wallet', time: '13:45', customer: 'Виктория А.' },
    { id: 't12', items: [{id:'d8', qty:1},{id:'f4', qty:1},{id:'s2', qty:1}], total: 950, method: 'card', time: '14:20', customer: 'Артём Д.' },
    { id: 't13', items: [{id:'d2', qty:1},{id:'f6', qty:1}], total: 670, method: 'cash', time: '14:55', customer: 'Ксения Б.' },
    { id: 't14', items: [{id:'d7', qty:1},{id:'f7', qty:1},{id:'s4', qty:1}], total: 1050, method: 'card', time: '15:30', customer: 'Максим К.' },
    { id: 't15', items: [{id:'d5', qty:1},{id:'f1', qty:1},{id:'s3', qty:1}], total: 760, method: 'wallet', time: '16:00', customer: 'Алина Ф.' }
  ],

  dailyRevenue: [
    { day: 'Пн', amount: 45200 },
    { day: 'Вт', amount: 38900 },
    { day: 'Ср', amount: 41300 },
    { day: 'Чт', amount: 47600 },
    { day: 'Пт', amount: 52300 },
    { day: 'Сб', amount: 58700 },
    { day: 'Вс', amount: 34100 }
  ],

  weeklyRevenue: [
    { week: '20-26 янв', amount: 285000 },
    { week: '27-2 фев', amount: 312000 },
    { week: '3-9 фев', amount: 298000 },
    { week: '10-16 фев', amount: 341000 },
    { week: '17-23 фев', amount: 367000 },
    { week: '24-2 мар', amount: 389000 },
    { week: '3-9 мар', amount: 356000 }
  ],

  popularItems: [
    { name: 'Капучино', count: 47, revenue: 11750 },
    { name: 'Стейк Рибай', count: 32, revenue: 28480 },
    { name: 'Цезарь с курицей', count: 28, revenue: 10640 },
    { name: 'Тирамису', count: 25, revenue: 8750 },
    { name: 'Паста Карбонара', count: 22, revenue: 9900 }
  ],

  customerSegments: [
    { name: 'Бизнес-ланч', count: 156, avg: 890, pct: 35 },
    { name: 'Вечерние гости', count: 98, avg: 2150, pct: 22 },
    { name: 'Кофе-брейк', count: 124, avg: 320, pct: 28 },
    { name: 'Доставка', count: 67, avg: 1450, pct: 15 }
  ],

  peakHours: [
    { hour: '08:00-10:00', orders: 45 },
    { hour: '10:00-12:00', orders: 62 },
    { hour: '12:00-14:00', orders: 89 },
    { hour: '14:00-16:00', orders: 56 },
    { hour: '16:00-18:00', orders: 34 },
    { hour: '18:00-20:00', orders: 71 },
    { hour: '20:00-22:00', orders: 48 }
  ],

  bigData: {
    totalCustomers: 2847,
    avgCheck: 785,
    returnRate: 68,
    avgLoyalty: 14.3,
    topCategory: 'Еда',
    categoryShare: 52,
    genderSplit: { male: 42, female: 58 },
    ageGroups: [
      { group: '18-25', pct: 18 },
      { group: '26-35', pct: 34 },
      { group: '36-45', pct: 28 },
      { group: '46-60', pct: 15 },
      { group: '60+', pct: 5 }
    ],
    smartSegments: [
      { name: 'Постоянные гости', desc: 'Посещают более 2 раз в неделю', count: 312, avgMonth: 5800 },
      { name: 'Бизнес-аудитория', desc: 'Обеды в будние дни, 12:00-15:00', count: 524, avgMonth: 4200 },
      { name: 'Семейные визиты', desc: 'Посещения в выходные, от 3 персон', count: 218, avgMonth: 3500 },
      { name: 'Молодёжь', desc: 'Вечерние визиты, кофе и десерты', count: 445, avgMonth: 2800 }
    ],
    popularCombos: [
      { combo: 'Капучино + Тирамису', orders: 189 },
      { combo: 'Стейк + Красное вино', orders: 142 },
      { combo: 'Борщ + Сметана + Хлеб', orders: 98 }
    ]
  }
};

// Extend menu items with enabled flag
for (const cat of Object.keys(appData.menu)) {
  appData.menu[cat].forEach(item => item.enabled = true);
}

const adminData = {
  outlets: [
    { id: 'o1', name: 'Ресторан "Золотая Лоза"', address: 'ул. Тверская, 12', revenue: 385000, cashierCount: 3, transactions: 214, city: 'Москва' },
    { id: 'o2', name: 'Кафе "Городское"', address: 'пр. Невский, 45', revenue: 212000, cashierCount: 2, transactions: 118, city: 'СПб' },
    { id: 'o3', name: 'Ресторан "Восток"', address: 'ул. Байкальская, 8', revenue: 298000, cashierCount: 2, transactions: 156, city: 'Москва' }
  ],
  cashiers: [
    { id: 'c1', name: 'Елена Петрова', outlet: 'o1', active: true, shift: 'Дневная', rating: 4.8, revenue: 142000, transactions: 89, phone: '+7 (915) 123-45-67' },
    { id: 'c2', name: 'Иван Смирнов', outlet: 'o1', active: true, shift: 'Ночная', rating: 4.5, revenue: 118000, transactions: 67, phone: '+7 (916) 234-56-78' },
    { id: 'c3', name: 'Мария Козлова', outlet: 'o1', active: false, shift: 'Дневная', rating: 4.9, revenue: 125000, transactions: 78, phone: '+7 (917) 345-67-89' },
    { id: 'c4', name: 'Анна Кузнецова', outlet: 'o2', active: true, shift: 'Дневная', rating: 4.7, revenue: 98000, transactions: 54, phone: '+7 (918) 456-78-90' },
    { id: 'c5', name: 'Дмитрий Волков', outlet: 'o2', active: false, shift: 'Дневная', rating: 4.3, revenue: 87000, transactions: 48, phone: '+7 (919) 567-89-01' },
    { id: 'c6', name: 'Ольга Соколова', outlet: 'o3', active: true, shift: 'Дневная', rating: 4.6, revenue: 135000, transactions: 82, phone: '+7 (920) 678-90-12' },
    { id: 'c7', name: 'Павел Морозов', outlet: 'o3', active: false, shift: 'Ночная', rating: 4.4, revenue: 89000, transactions: 51, phone: '+7 (921) 789-01-23' }
  ],
  nextCashierId: 8
};

let history = ['home'];
let currentCategory = 'Напитки';
let cart = [];
let receiptId = 1;
let currentMode = 'cashier';

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  document.querySelectorAll('.theme-toggle .icon, .theme-toggle-small .icon-sm').forEach(icon => {
    const use = icon.querySelector('use');
    if (use) use.setAttribute('href', next === 'light' ? '#icon-moon' : '#icon-sun');
  });
  localStorage.setItem('cashier-theme', next);
}

function loadTheme() {
  const saved = localStorage.getItem('cashier-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.querySelectorAll('.theme-toggle .icon, .theme-toggle-small .icon-sm').forEach(icon => {
    const use = icon.querySelector('use');
    if (use) use.setAttribute('href', saved === 'light' ? '#icon-moon' : '#icon-sun');
  });
}

function toggleMode() {
  const knob = document.getElementById('modeKnob');
  const cashierLabel = document.getElementById('cashierLabel');
  const adminLabel = document.getElementById('adminLabel');
  const toggle = document.querySelector('.mode-toggle');
  const btn = document.getElementById('enterBtn');

  currentMode = currentMode === 'cashier' ? 'admin' : 'cashier';

  if (toggle) toggle.classList.toggle('driver', currentMode === 'admin');
  if (cashierLabel) cashierLabel.classList.toggle('active', currentMode === 'cashier');
  if (adminLabel) adminLabel.classList.toggle('active', currentMode === 'admin');
  if (btn) {
    btn.innerHTML = currentMode === 'cashier'
      ? 'Открыть кассу <svg class="icon"><use href="#icon-arrow"/></svg>'
      : 'Панель управления <svg class="icon"><use href="#icon-arrow"/></svg>';
  }
  localStorage.setItem('cashier-mode', currentMode);
}

function initMode() {
  const saved = localStorage.getItem('cashier-mode') || 'cashier';
  if (saved !== currentMode) toggleMode();
}

function openApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('cashier-appOpen', 'true');
  updateBottomNav();
  showPage('home');
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  history = ['home'];
  localStorage.setItem('cashier-appOpen', 'false');
}

function updateBottomNav() {
  const nav = document.getElementById('bottomNav');
  if (currentMode === 'admin') {
    nav.innerHTML = `
      <button class="nav-item active" onclick="showPage('admin-outlets', this)">
        <svg class="icon-nav"><use href="#icon-building"/></svg>
        <span>Точки</span>
      </button>
      <button class="nav-item" onclick="showPage('admin-cashiers', this)">
        <svg class="icon-nav"><use href="#icon-users"/></svg>
        <span>Кассиры</span>
      </button>
      <button class="nav-item" onclick="showPage('admin-menu', this)">
        <svg class="icon-nav"><use href="#icon-food"/></svg>
        <span>Меню</span>
      </button>
      <button class="nav-item" onclick="showPage('admin-analytics', this)">
        <svg class="icon-nav"><use href="#icon-chart"/></svg>
        <span>Аналитика</span>
      </button>
    `;
  } else {
    nav.innerHTML = `
      <button class="nav-item active" onclick="showPage('home', this)">
        <svg class="icon-nav"><use href="#icon-home"/></svg>
        <span>Главная</span>
      </button>
      <button class="nav-item" onclick="showPage('pos', this)">
        <svg class="icon-nav"><use href="#icon-wallet"/></svg>
        <span>Касса</span>
      </button>
      <button class="nav-item" onclick="showPage('analytics', this)">
        <svg class="icon-nav"><use href="#icon-chart"/></svg>
        <span>Аналитика</span>
      </button>
      <button class="nav-item" onclick="showPage('profile', this)">
        <svg class="icon-nav"><use href="#icon-user"/></svg>
        <span>Профиль</span>
      </button>
    `;
  }
}

function showPage(pageName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
  }
  history.push(pageName);
  updateHeader(pageName);
  renderContent(pageName);
  localStorage.setItem('cashier-lastPage', pageName);
  localStorage.setItem('cashier-history', JSON.stringify(history));
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prev = history[history.length - 1];
    updateHeader(prev);
    renderContent(prev);
    localStorage.setItem('cashier-lastPage', prev);
    localStorage.setItem('cashier-history', JSON.stringify(history));
    if (history.length === 1) {
      localStorage.removeItem('cashier-lastPage');
      localStorage.removeItem('cashier-history');
      localStorage.setItem('cashier-appOpen', 'false');
    }
    document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
  }
}

function updateHeader(pageName) {
  const titles = {
    home: 'Главная',
    pos: 'Касса',
    analytics: 'Аналитика',
    profile: 'Профиль',
    'admin-outlets': 'Торговые точки',
    'admin-cashiers': 'Кассиры',
    'admin-menu': 'Управление меню',
    'admin-analytics': 'Аналитика'
  };
  document.getElementById('appTitle').textContent = titles[pageName] || 'Главная';
  const timeEl = document.getElementById('headerTime');
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  }
}

function formatCurrency(n) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

function findItem(id) {
  for (const cat of Object.keys(appData.menu)) {
    const found = appData.menu[cat].find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

function renderContent(pageName) {
  const content = document.getElementById('content');
  if (pageName === 'home' && currentMode === 'cashier') content.innerHTML = renderHome();
  else if (pageName === 'home' && currentMode === 'admin') content.innerHTML = renderAdminOutlets();
  else if (pageName === 'pos') content.innerHTML = renderPOS();
  else if (pageName === 'analytics' && currentMode === 'cashier') content.innerHTML = renderAnalytics();
  else if (pageName === 'profile') content.innerHTML = renderProfile();
  else if (pageName === 'admin-outlets') content.innerHTML = renderAdminOutlets();
  else if (pageName === 'admin-cashiers') content.innerHTML = renderAdminCashiers();
  else if (pageName === 'admin-menu') content.innerHTML = renderAdminMenu();
  else if (pageName === 'admin-analytics') content.innerHTML = renderAdminAnalytics();
}

function renderHome() {
  const tx = appData.todayTransactions;
  const todayTotal = tx.reduce((s, t) => s + t.total, 0);
  const activeCustomers = [...new Set(tx.map(t => t.customer))].length;
  const avgCheck = Math.round(todayTotal / tx.length);

  const methodStats = { cash: 0, card: 0, wallet: 0 };
  tx.forEach(t => methodStats[t.method]++);

  const recentTx = tx.slice(-5).reverse();

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="flex:1">
              <div class="stat-label">Выручка за сегодня</div>
              <div class="stat-value" style="color:var(--primary)">${formatCurrency(todayTotal)}</div>
            </div>
            <div style="flex:1;border-left:1px solid rgba(255,255,255,0.1);padding-left:16px">
              <div class="stat-label">Средний чек</div>
              <div class="stat-value" style="color:var(--success)">${formatCurrency(avgCheck)}</div>
            </div>
          </div>
        </div>
        <div class="dashboard-card">
          <svg class="icon"><use href="#icon-clipboard"/></svg>
          <h4>Транзакции</h4>
          <div class="stat-value" style="font-size:28px">${tx.length}</div>
        </div>
        <div class="dashboard-card">
          <svg class="icon"><use href="#icon-users"/></svg>
          <h4>Посетители</h4>
          <div class="stat-value" style="font-size:28px">${activeCustomers}</div>
        </div>
      </div>

      <div class="dashboard-card wide" style="margin-top:12px">
        <div style="display:flex;gap:12px;justify-content:space-around">
          <div style="text-align:center">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Наличные</div>
            <div style="font-size:20px;font-weight:700;color:var(--primary)">${methodStats.cash}</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Карта</div>
            <div style="font-size:20px;font-weight:700;color:var(--success)">${methodStats.card}</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Внутр. валюта</div>
            <div style="font-size:20px;font-weight:700;color:var(--secondary)">${methodStats.wallet}</div>
          </div>
        </div>
      </div>

      <div class="events-feed">
        <h3>Последние транзакции</h3>
        ${recentTx.map(t => `
          <div class="event-item">
            <div class="event-icon"><svg class="icon-sm"><use href="#icon-${t.method === 'cash' ? 'cash' : t.method === 'card' ? 'card' : 'wallet'}"/></svg></div>
            <div class="event-info">
              <h4>${t.customer}</h4>
              <p>${t.time} • ${t.items.length} поз.</p>
            </div>
            <span class="event-amount">${formatCurrency(t.total)}</span>
            <span class="event-method">${t.method === 'cash' ? 'Нал' : t.method === 'card' ? 'Карта' : 'Кошелёк'}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPOS() {
  if (receiptId === 1) {
    const saved = localStorage.getItem('cashier-cart');
    if (saved) cart = JSON.parse(saved);
  }
  return buildPOSContent();
}

function buildPOSContent() {
  const items = appData.menu[currentCategory] || [];
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const categoryIcons = { 'Напитки': 'coffee', 'Еда': 'food', 'Десерты': 'food' };

  return `
    <div class="pos-container">
      <div class="pos-categories">
        ${Object.keys(appData.menu).map(cat => `
          <button class="category-btn ${cat === currentCategory ? 'active' : ''}" onclick="switchCategory('${cat}')">
            <svg class="icon-xs" style="margin-right:4px;vertical-align:middle"><use href="#icon-${categoryIcons[cat]}"/></svg>
            ${cat}
          </button>
        `).join('')}
      </div>

      <div class="products-grid">
        ${items.map(item => `
          <div class="product-item" onclick="addToCart('${item.id}')">
            <svg class="icon"><use href="#icon-${item.icon}"/></svg>
            <div class="product-name">${item.name}</div>
            <div class="product-price">${item.price} ₽</div>
          </div>
        `).join('')}
      </div>

      <div class="pos-cart">
        <div class="pos-cart-header">
          <h4>Корзина</h4>
          <span style="font-size:13px;color:var(--text-muted)">${cartCount} ${cartCount === 1 ? 'позиция' : cartCount < 5 ? 'позиции' : 'позиций'}</span>
        </div>
        ${cart.length === 0 ? `
          <div class="pos-empty-cart">
            <svg class="icon"><use href="#icon-wallet"/></svg>
            <p>Корзина пуста</p>
          </div>
        ` : `
          <div class="cart-items">
            ${cart.map(ci => `
              <div class="cart-item">
                <div class="cart-item-info">
                  <div class="cart-item-name">${ci.name}</div>
                  <div class="cart-item-price">${ci.price} ₽</div>
                </div>
                <div class="cart-item-controls">
                  <button class="qty-btn remove" onclick="updateCartQty('${ci.id}', -1)"><svg class="icon-xs"><use href="#icon-minus"/></svg></button>
                  <span class="cart-item-qty">${ci.qty}</span>
                  <button class="qty-btn" onclick="updateCartQty('${ci.id}', 1)"><svg class="icon-xs"><use href="#icon-plus"/></svg></button>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="pos-cart-total">
            <span>Итого:</span>
            <span>${formatCurrency(cartTotal)}</span>
          </div>
        `}
      </div>

      <div class="payment-section">
        <button class="payment-btn cash" ${cart.length === 0 ? 'disabled' : ''} onclick="processPayment('cash')">
          <svg class="icon"><use href="#icon-cash"/></svg>
          Наличные
        </button>
        <button class="payment-btn card" ${cart.length === 0 ? 'disabled' : ''} onclick="processPayment('card')">
          <svg class="icon"><use href="#icon-card"/></svg>
          Карта
        </button>
        <button class="payment-btn wallet" ${cart.length === 0 ? 'disabled' : ''} onclick="processPayment('wallet')">
          <svg class="icon"><use href="#icon-wallet"/></svg>
          Внутренняя валюта
        </button>
      </div>
    </div>
  `;
}

function switchCategory(cat) {
  currentCategory = cat;
  const content = document.getElementById('content');
  content.innerHTML = buildPOSContent();
}

function addToCart(id) {
  const item = findItem(id);
  if (!item) return;
  const existing = cart.find(ci => ci.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
  localStorage.setItem('cashier-cart', JSON.stringify(cart));
  document.getElementById('content').innerHTML = buildPOSContent();
}

function updateCartQty(id, delta) {
  const existing = cart.find(ci => ci.id === id);
  if (!existing) return;
  existing.qty += delta;
  if (existing.qty <= 0) {
    cart = cart.filter(ci => ci.id !== id);
  }
  localStorage.setItem('cashier-cart', JSON.stringify(cart));
  document.getElementById('content').innerHTML = buildPOSContent();
}

function processPayment(method) {
  if (cart.length === 0) return;
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const methodNames = { cash: 'Наличные', card: 'Банковская карта', wallet: 'Внутренняя валюта' };
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('ru-RU');
  const receiptNum = String(receiptId++).padStart(4, '0');

  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="pos-container">
      <div class="receipt-overlay">
        <div class="receipt-card">
          <div class="receipt-header">
            <svg class="icon"><use href="#icon-check"/></svg>
            <h3>Чек оплачен</h3>
            <p>${appData.restaurant.name}</p>
            <p>Чек №${receiptNum} от ${dateStr} ${timeStr}</p>
          </div>
          <div class="receipt-items">
            ${cart.map(ci => `
              <div class="receipt-item">
                <span>${ci.name} × ${ci.qty}</span>
                <span>${formatCurrency(ci.price * ci.qty)}</span>
              </div>
            `).join('')}
          </div>
          <div class="receipt-total">
            <span>ИТОГО:</span>
            <span>${formatCurrency(total)}</span>
          </div>
          <div class="receipt-method">
            <svg class="icon-xs" style="margin-right:4px;vertical-align:middle"><use href="#icon-${method === 'cash' ? 'cash' : method === 'card' ? 'card' : 'wallet'}"/></svg>
            Способ оплаты: ${methodNames[method]}
          </div>
          <button class="receipt-close-btn" onclick="newOrder()">
            <svg class="icon-xs" style="margin-right:6px;vertical-align:middle"><use href="#icon-plus"/></svg>
            Новый заказ
          </button>
        </div>
      </div>
    </div>
  `;
}

function newOrder() {
  cart = [];
  localStorage.removeItem('cashier-cart');
  receiptId = 1;
  showPage('pos');
}

function renderAnalytics() {
  const rev = appData.dailyRevenue;
  const maxRev = Math.max(...rev.map(r => r.amount));
  const weekTotal = rev.reduce((s, r) => s + r.amount, 0);
  const todayIdx = new Date().getDay();
  const todayRevIdx = todayIdx === 0 ? 6 : todayIdx - 1;
  const todayRev = rev[todayRevIdx].amount;
  const big = appData.bigData;

  return `
    <div class="page-content">
      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-chart"/></svg> Выручка за неделю</h3>
        <div class="chart-container">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px">
            <span style="font-size:12px;color:var(--text-muted)">${formatCurrency(weekTotal)}</span>
            <span style="font-size:12px;color:var(--text-muted)">Сегодня: ${formatCurrency(todayRev)}</span>
          </div>
          <div class="chart-bars">
            ${rev.map(r => {
              const h = Math.max((r.amount / maxRev) * 140, 8);
              const isToday = r === rev[todayRevIdx];
              return `
                <div class="chart-bar-wrapper">
                  <div class="chart-bar-value">${(r.amount / 1000).toFixed(0)}к</div>
                  <div class="chart-bar" style="height:${h}px;background:${isToday ? 'var(--primary)' : 'var(--success)'}"></div>
                  <div class="chart-bar-label">${r.day}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-star"/></svg> Популярные позиции</h3>
        ${appData.popularItems.map((item, idx) => `
          <div class="insight-card ${idx === 0 ? 'success' : ''}">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <h4>${idx + 1}. ${item.name}</h4>
                <p>Заказано ${item.count} раз</p>
              </div>
              <div class="insight-stat" style="font-size:16px">${formatCurrency(item.revenue)}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-database"/></svg> BigData — Структурированная база</h3>
        <div class="bigdata-grid">
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-users"/></svg>
            <h4>Всего гостей</h4>
            <div class="bigdata-value">${big.totalCustomers.toLocaleString()}</div>
            <p>за всё время</p>
          </div>
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-wallet"/></svg>
            <h4>Средний чек</h4>
            <div class="bigdata-value">${formatCurrency(big.avgCheck)}</div>
            <p>по всем визитам</p>
          </div>
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-check"/></svg>
            <h4>Возвращаемость</h4>
            <div class="bigdata-value">${big.returnRate}%</div>
            <p>повторных визитов</p>
          </div>
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-star"/></svg>
            <h4>Лояльность</h4>
            <div class="bigdata-value">${big.avgLoyalty}</div>
            <p>визитов в месяц</p>
          </div>
        </div>
        <div style="margin-top:12px">
          <div class="insight-card purple">
            <h4>Распределение по категориям</h4>
            <p>${big.topCategory} — ${big.categoryShare}% всех заказов</p>
            <div style="margin-top:8px;background:var(--bg-light);border-radius:8px;height:8px;overflow:hidden">
              <div style="height:100%;width:${big.categoryShare}%;background:linear-gradient(90deg,var(--primary),var(--success));border-radius:8px"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-target"/></svg> SmartData — Сегментирование аудитории</h3>
        ${big.smartSegments.map(seg => `
          <div class="insight-card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div>
                <h4>${seg.name}</h4>
                <p>${seg.desc}</p>
              </div>
              <div style="text-align:right">
                <div class="insight-stat" style="font-size:14px">${seg.count}</div>
                <p style="font-size:10px;color:var(--text-muted)">${formatCurrency(seg.avgMonth)}/мес</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-time"/></svg> Пиковые часы</h3>
        <div class="chart-container">
          <div class="chart-bars" style="height:120px">
            ${appData.peakHours.map(ph => {
              const h = Math.max((ph.orders / 89) * 100, 6);
              return `
                <div class="chart-bar-wrapper">
                  <div class="chart-bar" style="height:${h}px;background:var(--secondary)"></div>
                  <div class="chart-bar-label" style="font-size:7px">${ph.hour.split('-')[0]}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-food"/></svg> Популярные комбинации</h3>
        ${big.popularCombos.map(combo => `
          <div class="insight-card">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <h4>${combo.combo}</h4>
              <div class="insight-stat" style="font-size:16px">${combo.orders} ×</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-users"/></svg> Демография</h3>
        <div class="discover-grid">
          <div class="discover-item">
            <svg class="icon"><use href="#icon-user"/></svg>
            <h4>Мужчины</h4>
            <p>${big.genderSplit.male}%</p>
          </div>
          <div class="discover-item">
            <svg class="icon"><use href="#icon-union"/></svg>
            <h4>Женщины</h4>
            <p>${big.genderSplit.female}%</p>
          </div>
          ${big.ageGroups.map(ag => `
            <div class="discover-item">
              <h4>${ag.group}</h4>
              <p>${ag.pct}%</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="analytics-section">
        <h3><svg class="icon"><use href="#icon-chart"/></svg> Выручка по неделям</h3>
        <div class="chart-container">
          <div class="chart-bars" style="height:120px">
            ${(() => {
              const wRev = appData.weeklyRevenue;
              const wMax = Math.max(...wRev.map(r => r.amount));
              return wRev.map(r => {
                const h = Math.max((r.amount / wMax) * 100, 6);
                return `
                  <div class="chart-bar-wrapper">
                    <div class="chart-bar" style="height:${h}px;background:var(--primary)"></div>
                    <div class="chart-bar-value">${(r.amount / 1000).toFixed(0)}к</div>
                  </div>
                `;
              }).join('');
            })()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProfile() {
  const r = appData.restaurant;
  return `
    <div class="page-content">
      <div class="profile-card">
        <div class="profile-avatar">ЗЛ</div>
        <h3>${r.name}</h3>
        <p class="profile-role">Ресторан премиум-класса</p>
        <p class="profile-desc">${r.address}</p>
      </div>

      <div class="profile-info">
        <div class="info-row">
          <span class="info-label">Телефон</span>
          <span class="info-value">${r.phone}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">${r.email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Веб-сайт</span>
          <span class="info-value">${r.website}</span>
        </div>
        <div class="info-row">
          <span class="info-label">ИНН</span>
          <span class="info-value">${r.inn}</span>
        </div>
        <div class="info-row">
          <span class="info-label">ОГРН</span>
          <span class="info-value">${r.ogrn}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Год основания</span>
          <span class="info-value">${r.founded}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Сотрудников</span>
          <span class="info-value">${r.employees}</span>
        </div>
      </div>

      <div class="settings-section">
        <h4><svg class="icon"><use href="#icon-settings"/></svg> Настройки</h4>
        <div class="settings-item">
          <label>Звук сканера</label>
          <div class="toggle-track" style="background:var(--success)" onclick="toggleSetting(this, 'sound')">
            <div class="toggle-thumb" style="left:22px"></div>
          </div>
        </div>
        <div class="settings-item">
          <label>Авто-печать чека</label>
          <div class="toggle-track" style="background:var(--success)" onclick="toggleSetting(this, 'autoprint')">
            <div class="toggle-thumb" style="left:22px"></div>
          </div>
        </div>
        <div class="settings-item">
          <label>Ночной режим</label>
          <div class="toggle-track" style="background:var(--bg-light)" onclick="toggleSetting(this, 'nightmode')">
            <div class="toggle-thumb" style="left:2px"></div>
          </div>
        </div>
        <div class="settings-item">
          <label>Уведомления</label>
          <div class="toggle-track" style="background:var(--success)" onclick="toggleSetting(this, 'notifications')">
            <div class="toggle-thumb" style="left:22px"></div>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h4><svg class="icon"><use href="#icon-building"/></svg> О системе</h4>
        <div class="settings-item">
          <label>Версия</label>
          <span style="font-size:13px;color:var(--text-muted)">2.0.1</span>
        </div>
        <div class="settings-item">
          <label>Лицензия</label>
          <span style="font-size:13px;color:var(--text-muted)">Premium</span>
        </div>
      </div>

      <div class="version-info">
        Мобильная касса v2.0 &bull; BigData & SmartData Analytics<br>
        Разработано для сетевых заведений
      </div>
    </div>
  `;
}

/* ─── ADMIN PAGES ─── */

function getOutletName(id) {
  const o = adminData.outlets.find(o => o.id === id);
  return o ? o.name : '—';
}

function getOutletCashiers(outletId) {
  return adminData.cashiers.filter(c => c.outlet === outletId);
}

function renderAdminOutlets() {
  const totalRevenue = adminData.outlets.reduce((s, o) => s + o.revenue, 0);
  const totalTransactions = adminData.outlets.reduce((s, o) => s + o.transactions, 0);

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="flex:1">
              <div class="stat-label">Общая выручка</div>
              <div class="stat-value" style="color:var(--primary)">${formatCurrency(totalRevenue)}</div>
            </div>
            <div style="flex:1;border-left:1px solid rgba(255,255,255,0.1);padding-left:16px">
              <div class="stat-label">Транзакции</div>
              <div class="stat-value" style="color:var(--success);font-size:28px">${totalTransactions}</div>
            </div>
          </div>
        </div>
      </div>

      <h3 style="margin-top:16px">Торговые точки</h3>
      ${adminData.outlets.map(o => {
        const activeCashiers = getOutletCashiers(o.id).filter(c => c.active).length;
        return `
          <div class="outlet-card">
            <div class="outlet-header">
              <div class="outlet-icon"><svg class="icon"><use href="#icon-building"/></svg></div>
              <div class="outlet-info">
                <div class="outlet-name">${o.name}</div>
                <div class="outlet-addr">${o.address}</div>
              </div>
              <div class="outlet-revenue">${formatCurrency(o.revenue)}</div>
            </div>
            <div class="outlet-stats">
              <span><svg class="icon-xs"><use href="#icon-users"/></svg> ${activeCashiers}/${o.cashierCount} кассиров</span>
              <span><svg class="icon-xs"><use href="#icon-clipboard"/></svg> ${o.transactions} транз.</span>
            </div>
            <div class="outlet-cashiers">
              ${getOutletCashiers(o.id).map(c => `
                <div class="cashier-mini">
                  <div class="cashier-mini-dot ${c.active ? 'on' : 'off'}"></div>
                  <span>${c.name}</span>
                  <span class="cashier-mini-rev">${formatCurrency(c.revenue)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderAdminCashiers() {
  const cashiers = adminData.cashiers;
  const activeCount = cashiers.filter(c => c.active).length;

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="flex:1;text-align:center">
              <div class="stat-label">Всего кассиров</div>
              <div class="stat-value" style="color:var(--primary);font-size:28px">${cashiers.length}</div>
            </div>
            <div style="flex:1;text-align:center;border-left:1px solid rgba(255,255,255,0.1)">
              <div class="stat-label">Активны</div>
              <div class="stat-value" style="color:var(--success);font-size:28px">${activeCount}</div>
            </div>
            <div style="flex:1;text-align:center;border-left:1px solid rgba(255,255,255,0.1)">
              <div class="stat-label">Отключены</div>
              <div class="stat-value" style="color:var(--error);font-size:28px">${cashiers.length - activeCount}</div>
            </div>
          </div>
        </div>
      </div>

      <button class="add-cashier-btn" onclick="showAddCashierForm()">
        <svg class="icon"><use href="#icon-plus"/></svg>
        Добавить кассира
      </button>

      <div id="addCashierForm" class="add-cashier-form hidden">
        <input type="text" id="newCashierName" placeholder="Имя кассира" class="admin-input">
        <select id="newCashierOutlet" class="admin-input">
          <option value="">Выберите точку</option>
          ${adminData.outlets.map(o => `<option value="${o.id}">${o.name}</option>`).join('')}
        </select>
        <select id="newCashierShift" class="admin-input">
          <option value="Дневная">Дневная смена</option>
          <option value="Ночная">Ночная смена</option>
        </select>
        <div class="add-cashier-actions">
          <button class="btn-confirm" onclick="confirmAddCashier()">Добавить</button>
          <button class="btn-cancel" onclick="hideAddCashierForm()">Отмена</button>
        </div>
      </div>

      <h3 style="margin-top:16px">Список кассиров</h3>
      ${cashiers.map(c => {
        const oName = getOutletName(c.outlet);
        return `
          <div class="cashier-card ${c.active ? '' : 'disabled'}">
            <div class="cashier-avatar">${c.name.split(' ').map(s => s[0]).join('')}</div>
            <div class="cashier-info">
              <div class="cashier-name">${c.name}</div>
              <div class="cashier-meta">${oName} • ${c.shift} смена</div>
              <div class="cashier-meta">${c.phone} • ${c.transactions} транз.</div>
              <div class="cashier-stats">
                <span class="cashier-stat">${formatCurrency(c.revenue)}</span>
                <span class="cashier-stat" style="color:var(--primary)">★ ${c.rating}</span>
              </div>
            </div>
            <div class="cashier-toggle">
              <div class="toggle-track ${c.active ? 'on' : ''}" onclick="toggleCashier('${c.id}')">
                <div class="toggle-thumb" style="left:${c.active ? '22px' : '2px'}"></div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function showAddCashierForm() {
  document.getElementById('addCashierForm').classList.remove('hidden');
}

function hideAddCashierForm() {
  document.getElementById('addCashierForm').classList.add('hidden');
}

function confirmAddCashier() {
  const name = document.getElementById('newCashierName').value.trim();
  const outlet = document.getElementById('newCashierOutlet').value;
  const shift = document.getElementById('newCashierShift').value;
  if (!name || !outlet) { alert('Заполните имя и выберите точку'); return; }
  adminData.cashiers.push({
    id: 'c' + adminData.nextCashierId++,
    name: name,
    outlet: outlet,
    active: true,
    shift: shift,
    rating: 4.0,
    revenue: 0,
    transactions: 0,
    phone: '+7 (---) --- -- --'
  });
  const o = adminData.outlets.find(o => o.id === outlet);
  if (o) o.cashierCount++;
  hideAddCashierForm();
  renderContent('admin-cashiers');
}

function toggleCashier(id) {
  const c = adminData.cashiers.find(c => c.id === id);
  if (!c) return;
  c.active = !c.active;
  renderContent('admin-cashiers');
}

function renderAdminMenu() {
  return `
    <div class="page-content">
      <h3>Управление меню</h3>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:16px">Включайте и отключайте позиции в меню</p>
      ${Object.keys(appData.menu).map(cat => `
        <div class="menu-category-block">
          <h4 class="menu-cat-title"><svg class="icon"><use href="#icon-${cat === 'Напитки' ? 'coffee' : cat === 'Десерты' ? 'food' : 'food'}"/></svg> ${cat}</h4>
          ${appData.menu[cat].map(item => `
            <div class="menu-item-row ${item.enabled ? '' : 'disabled'}">
              <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-price">${item.price} ₽</div>
              </div>
              <div class="toggle-track ${item.enabled ? 'on' : ''}" onclick="toggleMenuItem('${item.id}', '${cat}')">
                <div class="toggle-thumb" style="left:${item.enabled ? '22px' : '2px'}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

function toggleMenuItem(id, cat) {
  const item = appData.menu[cat].find(i => i.id === id);
  if (!item) return;
  item.enabled = !item.enabled;
  renderContent('admin-menu');
}

function renderAdminAnalytics() {
  const totalRevenue = adminData.outlets.reduce((s, o) => s + o.revenue, 0);
  const totalTx = adminData.outlets.reduce((s, o) => s + o.transactions, 0);
  const totalCashiers = adminData.cashiers.length;
  const activeCashiers = adminData.cashiers.filter(c => c.active).length;
  const avgRevenuePerOutlet = Math.round(totalRevenue / adminData.outlets.length);
  const maxOutlet = [...adminData.outlets].sort((a, b) => b.revenue - a.revenue)[0];
  const topCashier = [...adminData.cashiers].sort((a, b) => b.revenue - a.revenue)[0];
  const maxRev = Math.max(...adminData.outlets.map(o => o.revenue));

  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="flex:1;text-align:center">
              <div class="stat-label">Общая выручка</div>
              <div class="stat-value" style="color:var(--primary)">${formatCurrency(totalRevenue)}</div>
            </div>
            <div style="flex:1;text-align:center;border-left:1px solid rgba(255,255,255,0.1)">
              <div class="stat-label">Средняя / точка</div>
              <div class="stat-value" style="color:var(--success);font-size:22px">${formatCurrency(avgRevenuePerOutlet)}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3>Выручка по точкам</h3>
        <div class="chart-container">
          <div class="chart-bars" style="height:140px">
            ${adminData.outlets.map(o => {
              const h = Math.max((o.revenue / maxRev) * 120, 12);
              return `
                <div class="chart-bar-wrapper">
                  <div class="chart-bar-value">${(o.revenue / 1000).toFixed(0)}к</div>
                  <div class="chart-bar" style="height:${h}px;background:var(--primary)"></div>
                  <div class="chart-bar-label" style="font-size:8px">${o.name.split('"')[1] || o.name}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3>Лучшие показатели</h3>
        <div class="insight-card success">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <h4>🏆 Лучшая точка</h4>
              <p>${maxOutlet.name} — ${formatCurrency(maxOutlet.revenue)}</p>
            </div>
          </div>
        </div>
        <div class="insight-card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <h4>⭐ Лучший кассир</h4>
              <p>${topCashier.name} — ${formatCurrency(topCashier.revenue)} (${getOutletName(topCashier.outlet)})</p>
            </div>
          </div>
        </div>
      </div>

      <div class="analytics-section">
        <h3>Сводка</h3>
        <div class="bigdata-grid">
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-building"/></svg>
            <h4>Точки</h4>
            <div class="bigdata-value">${adminData.outlets.length}</div>
          </div>
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-users"/></svg>
            <h4>Кассиры</h4>
            <div class="bigdata-value">${activeCashiers}/${totalCashiers}</div>
            <p>активных</p>
          </div>
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-clipboard"/></svg>
            <h4>Транзакции</h4>
            <div class="bigdata-value">${totalTx}</div>
          </div>
          <div class="bigdata-item">
            <svg class="icon"><use href="#icon-chart"/></svg>
            <h4>Ср. выручка</h4>
            <div class="bigdata-value">${formatCurrency(avgRevenuePerOutlet)}</div>
            <p>на точку</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleSetting(el, key) {
  const thumb = el.querySelector('.toggle-thumb');
  const isOn = thumb.style.left === '22px';
  if (isOn) {
    el.style.background = 'var(--bg-light)';
    thumb.style.left = '2px';
  } else {
    el.style.background = 'var(--success)';
    thumb.style.left = '22px';
  }
  localStorage.setItem('cashier-setting-' + key, isOn ? 'off' : 'on');
}

loadTheme();
initMode();
