// ==========================================
// 1. ТОВАРЛАРДЫН МАССИВИ (25 продукт)
// ==========================================
const products = [
    { id: 1, name: "Classic Burger", category: "burger", price: 220, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80", description: "Жаңы бышырылган котлет, свежий салат жана соус." },
    { id: 2, name: "Cheeseburger", category: "burger", price: 250, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&auto=format&fit=crop&q=80", description: "Эритилген даамдуу сыр кошулган классикалык бургер." },
    { id: 3, name: "Double Burger", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop&q=80", description: "Эки эсе чоң порция жана кош котлет." },
    { id: 4, name: "Chicken Burger", category: "burger", price: 230, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&auto=format&fit=crop&q=80", description: "Кытырак тоок этинен жасалган сонун бургер." },
    { id: 5, name: "BBQ Burger", category: "burger", price: 290, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&auto=format&fit=crop&q=80", description: "Барбекю соусу менен өзгөчө даам." },
    { id: 6, name: "Spicy Burger", category: "burger", price: 270, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=80", description: "Ачуу сүйүүчүлөр үчүн атайын калемпир кошулган." },
    { id: 7, name: "Big Boss Burger", category: "burger", price: 390, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&auto=format&fit=crop&q=80", description: "Эң чоң жана эң ток кардарлар үчүн." },

    { id: 8, name: "Classic Shaurma", category: "shaurma", price: 200, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&auto=format&fit=crop&q=80", description: "Фирменный соус, тоок эти жана лаваш." },
    { id: 9, name: "Chicken Shaurma", category: "shaurma", price: 220, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&auto=format&fit=crop&q=80", description: "Ширелүү тоок эти жана жашылчалар." },
    { id: 10, name: "Beef Shaurma", category: "shaurma", price: 280, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&auto=format&fit=crop&q=80", description: "Уй эти кошулган даамдуу шаурма." },
    { id: 11, name: "Cheese Shaurma", category: "shaurma", price: 250, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&auto=format&fit=crop&q=80", description: "Көп сыр менен капталып даярдалган." },
    { id: 12, name: "Spicy Shaurma", category: "shaurma", price: 240, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&auto=format&fit=crop&q=80", description: "Мезгилдүү ачуу соустар менен." },
    { id: 13, name: "XXL Shaurma", category: "shaurma", price: 330, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&auto=format&fit=crop&q=80", description: "Чоң форматтагы атактуу шаурма." },

    { id: 14, name: "Classic Ramen", category: "ramen", price: 280, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=80", description: "Даамдуу бульон, кесме жана жумуртка." },
    { id: 15, name: "Chicken Ramen", category: "ramen", price: 300, image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&auto=format&fit=crop&q=80", description: "Тоок эти кошулган ысык рамен." },
    { id: 16, name: "Beef Ramen", category: "ramen", price: 350, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop&q=80", description: "Жумшак уй эти жана жыпар жыттуу бульон." },
    { id: 17, name: "Spicy Ramen", category: "ramen", price: 320, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=80", description: "Ачуу спайси кошулмасы менен." },
    { id: 18, name: "Cheese Ramen", category: "ramen", price: 330, image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&auto=format&fit=crop&q=80", description: "Сырдын даамы менен байытылган рамен." },
    { id: 19, name: "Seafood Ramen", category: "ramen", price: 400, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&auto=format&fit=crop&q=80", description: "Деңиз азыктары кошулган премиум рамен." },

    { id: 20, name: "Classic Wings", category: "wings", price: 250, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop&q=80", description: "Кытырак канаттар фирмалык соус менен." },
    { id: 21, name: "Spicy Wings", category: "wings", price: 270, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&auto=format&fit=crop&q=80", description: "Оттуу ачуу канаттар." },
    { id: 22, name: "BBQ Wings", category: "wings", price: 290, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop&q=80", description: "Барбекю глазурундагы канаттар." },
    { id: 23, name: "Crispy Wings", category: "wings", price: 280, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&auto=format&fit=crop&q=80", description: "Өзгөчө кыртырак кыртыш." },
    { id: 24, name: "Cheese Wings", category: "wings", price: 300, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop&q=80", description: "Сыр соусуна чумкутулган крылышки." },
    { id: 25, name: "Hot Wings", category: "wings", price: 290, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&auto=format&fit=crop&q=80", description: "Өтө ачуу жана даамдуу." }
];

// ==========================================
// 2. КОРЗИНА ЖАНА LOCALSTORAGE
// ==========================================
let cart = JSON.parse(localStorage.getItem('fastfood_cart')) || [];

const productsGrid = document.getElementById('productsGrid');
const categoryBtns = document.querySelectorAll('.cat-btn');
const cartOpenBtn = document.getElementById('cartOpenBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const toast = document.getElementById('toast');

// ==========================================
// 3. МЕНЮНУ ЭКРАНГА ЧЫГАРУУ
// ==========================================
function displayProducts(category = 'all') {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-body">
                <div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                </div>
                <div class="product-footer">
                    <span class="product-price">${product.price} сом</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)">Кошуу</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        displayProducts(category);
    });
});

// ==========================================
// 4. КОРЗИНА ЖАНА UPSCALE (КОШУМЧА СУНУШ) ФУНКЦИЯСЫ
// ==========================================
function addToCart(productId, event) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showToast();

    // 🍟 ПРЕМИУМ ФУНКЦИЯ: Товар кошулганда суусундук же картошка фри кошууга сунуштоо
    if (product.category === 'burger' && Math.random() > 0.5) {
        setTimeout(() => {
            const addCola = confirm(`🍟 "${product.name}" буюртмаңызга кошумча 120 сомго Кока-Кола жана Картошка Фри кошосузбу?`);
            if (addCola) {
                cart.push({
                    id: Date.now(),
                    name: "🥤 Комбо кошумча (Фри + Кола)",
                    price: 120,
                    quantity: 1,
                    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"
                });
                updateCart();
                alert("Ура! Комбо комплект корзинага кошулду!");
            }
        }, 500);
    }

    // Учуу анимациясы
    if (event && event.target) {
        const button = event.target;
        const card = button.closest('.product-card');
        const img = card ? card.querySelector('.product-img') : null;

        if (img && cartOpenBtn) {
            const imgRect = img.getBoundingClientRect();
            const cartBtnRect = cartOpenBtn.getBoundingClientRect();

            const flyer = document.createElement('img');
            flyer.src = product.image;
            flyer.classList.add('flying-item');
            
            flyer.style.top = `${imgRect.top}px`;
            flyer.style.left = `${imgRect.left}px`;
            document.body.appendChild(flyer);

            setTimeout(() => {
                flyer.style.top = `${cartBtnRect.top}px`;
                flyer.style.left = `${cartBtnRect.left}px`;
                flyer.style.width = '20px';
                flyer.style.height = '20px';
                flyer.style.opacity = '0.5';
            }, 50);

            setTimeout(() => {
                flyer.remove();
                cartOpenBtn.classList.add('bounce');
                setTimeout(() => {
                    cartOpenBtn.classList.remove('bounce');
                }, 400);
            }, 850);
        }
    }
}

function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        updateCart();
    });
}

function updateCart() {
    localStorage.setItem('fastfood_cart', JSON.stringify(cart));
    
    if (cartBadge) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalCount;
    }

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: #777; margin-top: 40px;">Корзина бош</p>';
        } else {
            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                
                itemDiv.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span>${item.quantity} × ${item.price} сом = ${item.quantity * item.price} сом</span>
                    </div>
                    <div class="cart-item-controls">
                        <button onclick="decreaseQuantity(${item.id})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${item.id})">+</button>
                        <button onclick="removeFromCart(${item.id})" style="background-color: #b20710; margin-left: 5px;"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
        }
    }

    if (cartTotalPrice) {
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalPrice.textContent = `${totalPrice} сом`;
    }
}

// ==========================================
// 5. МОДАЛ ЖАНА TOAST
// ==========================================
if (cartOpenBtn && cartModal) {
    cartOpenBtn.addEventListener('click', () => cartModal.classList.add('open'));
}

if (cartCloseBtn && cartModal) {
    cartCloseBtn.addEventListener('click', () => cartModal.classList.remove('open'));
}

window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('open');
});

function showToast() {
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Корзина бош!');
            return;
        }
        alert('Ийгиликтүү заказ берилди! Оператор сиз менен байланышат.');
        cart = [];
        updateCart();
        if (cartModal) cartModal.classList.remove('open');
    });
}

// ==========================================
// 6. ИЗДӨӨ (SEARCH)
// ==========================================
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase().trim();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchText) || 
            product.description.toLowerCase().includes(searchText)
        );

        productsGrid.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #777; padding: 40px;">Тилекке каршы, эч нерсе табылган жок...</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-body">
                    <div>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-desc">${product.description}</p>
                    </div>
                    <div class="product-footer">
                        <span class="product-price">${product.price} сом</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)">Кошуу</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    });
}

// ==========================================
// 7. БАКТЫЛУУ БОНУС ДӨҢГӨЛӨГҮ
// ==========================================
const spinBtn = document.getElementById('spinBtn');
const wheelResult = document.getElementById('wheelResult');
let hasSpun = localStorage.getItem('fastfood_has_spun') === 'true';

if (hasSpun && spinBtn) {
    spinBtn.disabled = true;
    spinBtn.style.opacity = '0.5';
    spinBtn.style.cursor = 'not-allowed';
    if (wheelResult) wheelResult.textContent = 'Сиз буга чейин бонус уткансыз! 🎉';
}

if (spinBtn) {
    spinBtn.addEventListener('click', () => {
        if (hasSpun) return;

        spinBtn.textContent = 'Айланууда... 🔄';
        spinBtn.disabled = true;

        const prizes = [
            "🏆 Куттуктайбыз! 10% арзандатуу уттуңуз!",
            "🎉 Баракелде! Бекер 1л Кока-Кола уттуңуз!",
            "🔥 Сонун! Фирмалык соус белекке берилет!",
            "🎁 Ура! Кийинки буюртмага 15% скидка!",
            "✨ Бул жолу бош чыкты, кийинки жолу сөзсүз утасыз!"
        ];

        setTimeout(() => {
            const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
            if (wheelResult) wheelResult.textContent = randomPrize;
            spinBtn.textContent = 'Утуш алынды ✅';
            localStorage.setItem('fastfood_has_spun', 'true');
            hasSpun = true;
        }, 2000);
    });
}

// ==========================================
// 8. БУРГЕР КОНСТРУКТОРУ (ИНГРЕДИЕНТТЕР)
// ==========================================
const ingredients = [
    { id: 101, name: "Котлет (уй эти)", price: 100, emoji: "🥩" },
    { id: 102, name: "Котлет (тоок эти)", price: 80, emoji: "🍗" },
    { id: 103, name: "Сыр (Чеддер)", price: 30, emoji: "🧀" },
    { id: 104, name: "Салат жалбырагы", price: 15, emoji: "🥬" },
    { id: 105, name: "Помидор", price: 15, emoji: "🍅" },
    { id: 106, name: "Туздуу бадыраң", price: 20, emoji: "🥒" },
    { id: 107, name: "Пияз", price: 10, emoji: "🧅" },
    { id: 108, name: "Ачуу соус", price: 20, emoji: "🌶️" },
    { id: 109, name: "Фирмалык соус", price: 25, emoji: "🍯" }
];

const BASE_BURGER_PRICE = 150; 
let selectedIngredients = [];

const ingredientsList = document.getElementById('ingredientsList');
const burgerVisual = document.getElementById('burgerVisual');
const constructorPrice = document.getElementById('constructorPrice');
const addCreatedToCartBtn = document.getElementById('addCreatedToCartBtn');

function renderIngredientsList() {
    if (!ingredientsList) return;
    ingredientsList.innerHTML = '';
    
    ingredients.forEach(ing => {
        const item = document.createElement('div');
        item.style.cssText = "display: flex; justify-content: space-between; align-items: center; background-color: #1a1a1a; padding: 10px 15px; border-radius: 8px; border: 1px solid #333; margin-bottom: 8px;";
        
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 20px;">${ing.emoji}</span>
                <span style="color: #fff; font-weight: 500;">${ing.name} <strong style="color: #ffcc00;">(+${ing.price} сом)</strong></span>
            </div>
            <button class="add-ing-btn" onclick="addIngredientToBurger(${ing.id})" style="background-color: #e50914; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-weight: 600;">Кошуу</button>
        `;
        ingredientsList.appendChild(item);
    });
}

function addIngredientToBurger(ingId) {
    const ingredient = ingredients.find(ing => ing.id === ingId);
    if (ingredient) {
        selectedIngredients.push(ingredient);
        updateBurgerView();
    }
}

function updateBurgerView() {
    const extraPrice = selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);
    const totalPrice = BASE_BURGER_PRICE + extraPrice;
    
    if (constructorPrice) {
        constructorPrice.textContent = totalPrice;
    }

    if (burgerVisual) {
        burgerVisual.innerHTML = '';
        
        const topBun = document.createElement('div');
        topBun.textContent = "🍔";
        topBun.style.fontSize = "35px";
        burgerVisual.appendChild(topBun);
        
        selectedIngredients.forEach(ing => {
            const ingDiv = document.createElement('div');
            ingDiv.textContent = ing.emoji;
            ingDiv.style.fontSize = "26px";
            burgerVisual.appendChild(ingDiv);
        });

        const bottomBun = document.createElement('div');
        bottomBun.textContent = "🍔";
        bottomBun.style.fontSize = "35px";
        burgerVisual.appendChild(bottomBun);
    }
}

if (addCreatedToCartBtn) {
    addCreatedToCartBtn.addEventListener('click', () => {
        if (selectedIngredients.length === 0) {
            alert('Сураныч, жок дегенде бир ингредиент тандаңыз!');
            return;
        }

        const ingNames = selectedIngredients.map(ing => ing.name).join(', ');
        const extraPrice = selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);
        const totalPrice = BASE_BURGER_PRICE + extraPrice;

        const customBurger = {
            id: Date.now(),
            name: `Өз Бургериң (${selectedIngredients.length} ингр.)`,
            category: "burger",
            price: totalPrice,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
            description: `Курамы: ${ingNames}`
        };

        cart.push({ ...customBurger, quantity: 1 });
        updateCart();
        showToast();

        alert('Уникалдуу бургериңиз корзинага кошулду! 🛒');
        
        selectedIngredients = [];
        updateBurgerView();
    });
}

// Барак ачылганда баардык функцияларды автоматтык түрдө иштетүү
displayProducts('all');
updateCart();
renderIngredientsList();
updateBurgerView();