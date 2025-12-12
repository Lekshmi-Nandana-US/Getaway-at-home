/* --- 1. Pantry Configuration --- */
const pantryData = {
    Indian: {
        "Essentials": ["Rice", "Wheat Flour", "Besan", "Bread", "Lentils (Dal)", "Chickpeas"],
        "Vegetables": ["Potatoes", "Onions", "Tomatoes", "Cauliflower", "Spinach", "Peas", "Ginger", "Garlic"],
        "Dairy": ["Yogurt", "Paneer", "Milk", "Butter", "Ghee", "Cream"],
        "Spices": ["Cumin", "Turmeric", "Chili Powder", "Mustard Seeds", "Garam Masala", "Coriander Powder"]
    },
    Japanese: {
        "Essentials": ["Short Grain Rice", "Noodles (Udon/Soba)", "Panko", "Tofu", "Sesame Seeds"],
        "Seasoning": ["Soy Sauce", "Miso Paste", "Mirin", "Sake", "Rice Vinegar", "Dashi", "Sesame Oil"],
        "Vegetables": ["Scallions", "Daikon", "Cabbage", "Mushrooms", "Ginger", "Garlic", "Carrots"],
        "Proteins": ["Egg", "Chicken", "Salmon", "Pork", "Ground Meat"]
    },
    French: {
        "Essentials": ["Baguette", "Flour", "Pasta", "Dijon Mustard", "Red Wine", "White Wine"],
        "Dairy": ["Butter", "Heavy Cream", "Cheese (Gruyere)", "Milk", "Parmesan"],
        "Vegetables": ["Onions", "Potatoes", "Carrots", "Garlic", "Thyme", "Parsley", "Eggplant", "Zucchini", "Mushrooms"],
        "Proteins": ["Chicken", "Beef", "Eggs", "Bacon", "White Fish"]
    }
};

/* --- 2. Recipe Database --- */
const allRecipes = [
    // INDIAN
    { id: 101, cuisine: "Indian", title: "Jeera Rice", category: "Side", baseServings: 2, image: "https://placehold.co/600x400/d68c6d/ffffff?text=Jeera+Rice", description: "Fragrant basmati rice with toasted cumin.", ingredients: [{ name: "Rice", amount: 1, unit: "cup" }, { name: "Cumin", amount: 1, unit: "tsp" }, { name: "Ghee", amount: 1, unit: "tbsp" }, { name: "Water", amount: 2, unit: "cups" }], instructions: ["Rinse rice 3 times.", "Heat ghee, sizzle cumin.", "Add rice/water/salt.", "Simmer covered 15 mins."] },
    { id: 102, cuisine: "Indian", title: "Aloo Gobi", category: "Main", baseServings: 3, image: "https://placehold.co/600x400/d68c6d/ffffff?text=Aloo+Gobi", description: "Spiced potatoes and cauliflower.", ingredients: [{ name: "Potatoes", amount: 2, unit: "large" }, { name: "Cauliflower", amount: 1, unit: "head" }, { name: "Turmeric", amount: 0.5, unit: "tsp" }, { name: "Cumin", amount: 1, unit: "tsp" }], instructions: ["Cut veggies.", "Sauté spices.", "Cook veggies covered 20 mins."] },
    { id: 103, cuisine: "Indian", title: "Palak Paneer", category: "Main", baseServings: 4, image: "https://placehold.co/600x400/d68c6d/ffffff?text=Palak+Paneer", description: "Cottage cheese in spinach gravy.", ingredients: [{ name: "Spinach", amount: 1, unit: "bunch" }, { name: "Paneer", amount: 200, unit: "g" }, { name: "Cream", amount: 2, unit: "tbsp" }, { name: "Garlic", amount: 3, unit: "cloves" }], instructions: ["Blanch spinach and blend.", "Fry paneer.", "Simmer puree with spices.", "Add paneer/cream."] },
    { id: 104, cuisine: "Indian", title: "Chana Masala", category: "Main", baseServings: 4, image: "https://placehold.co/600x400/d68c6d/ffffff?text=Chana+Masala", description: "Spicy chickpea curry.", ingredients: [{ name: "Chickpeas", amount: 2, unit: "cups" }, { name: "Onions", amount: 2, unit: "medium" }, { name: "Tomatoes", amount: 2, unit: "medium" }, { name: "Chili Powder", amount: 1, unit: "tsp" }], instructions: ["Sauté onions/tomatoes.", "Add spices.", "Simmer with chickpeas."] },
    { id: 105, cuisine: "Indian", title: "Dal Tadka", category: "Main", baseServings: 4, image: "https://placehold.co/600x400/d68c6d/ffffff?text=Dal+Tadka", description: "Lentils tempered with garlic.", ingredients: [{ name: "Lentils", amount: 1, unit: "cup" }, { name: "Garlic", amount: 4, unit: "cloves" }, { name: "Ghee", amount: 2, unit: "tbsp" }, { name: "Chili", amount: 2, unit: "whole" }], instructions: ["Boil lentils.", "Fry garlic/chili in ghee.", "Pour over lentils."] },
    { id: 106, cuisine: "Indian", title: "Matar Paneer", category: "Main", baseServings: 3, image: "https://placehold.co/600x400/d68c6d/ffffff?text=Matar+Paneer", description: "Paneer and peas curry.", ingredients: [{ name: "Paneer", amount: 200, unit: "g" }, { name: "Peas", amount: 1, unit: "cup" }, { name: "Tomatoes", amount: 2, unit: "medium" }, { name: "Cream", amount: 1, unit: "tbsp" }], instructions: ["Make tomato gravy.", "Add peas and paneer.", "Finish with cream."] },

    // JAPANESE
    { id: 201, cuisine: "Japanese", title: "Miso Soup", category: "Side", baseServings: 2, image: "https://placehold.co/600x400/8A9A5B/ffffff?text=Miso+Soup", description: "Soybean soup with tofu.", ingredients: [{ name: "Dashi", amount: 2, unit: "cups" }, { name: "Miso Paste", amount: 2, unit: "tbsp" }, { name: "Tofu", amount: 0.5, unit: "block" }, { name: "Scallions", amount: 1, unit: "stalk" }], instructions: ["Heat dashi.", "Add tofu.", "Whisk in miso (don't boil)."] },
    { id: 202, cuisine: "Japanese", title: "Teriyaki Chicken", category: "Main", baseServings: 2, image: "https://placehold.co/600x400/8A9A5B/ffffff?text=Teriyaki+Chicken", description: "Glazed chicken thighs.", ingredients: [{ name: "Chicken", amount: 2, unit: "thighs" }, { name: "Soy Sauce", amount: 2, unit: "tbsp" }, { name: "Mirin", amount: 2, unit: "tbsp" }, { name: "Sugar", amount: 1, unit: "tbsp" }], instructions: ["Pan fry chicken.", "Add sauce ingredients.", "Glaze until sticky."] },
    { id: 203, cuisine: "Japanese", title: "Egg Fried Rice", category: "Main", baseServings: 2, image: "https://placehold.co/600x400/8A9A5B/ffffff?text=Fried+Rice", description: "Wok-fried rice.", ingredients: [{ name: "Rice", amount: 2, unit: "cups" }, { name: "Egg", amount: 2, unit: "large" }, { name: "Scallions", amount: 2, unit: "stalks" }, { name: "Soy Sauce", amount: 1, unit: "tbsp" }], instructions: ["Scramble egg.", "Fry rice high heat.", "Add soy sauce."] },
    { id: 204, cuisine: "Japanese", title: "Chicken Katsu", category: "Main", baseServings: 2, image: "https://placehold.co/600x400/8A9A5B/ffffff?text=Chicken+Katsu", description: "Fried chicken cutlet.", ingredients: [{ name: "Chicken", amount: 2, unit: "breasts" }, { name: "Panko", amount: 1, unit: "cup" }, { name: "Egg", amount: 1, unit: "large" }, { name: "Flour", amount: 0.5, unit: "cup" }], instructions: ["Bread chicken (Flour > Egg > Panko).", "Deep fry.", "Slice."] },
    { id: 205, cuisine: "Japanese", title: "Yakisoba", category: "Main", baseServings: 2, image: "https://placehold.co/600x400/8A9A5B/ffffff?text=Yakisoba", description: "Stir-fried noodles.", ingredients: [{ name: "Noodles", amount: 200, unit: "g" }, { name: "Cabbage", amount: 1, unit: "cup" }, { name: "Pork", amount: 100, unit: "g" }, { name: "Soy Sauce", amount: 2, unit: "tbsp" }], instructions: ["Stir fry pork/veg.", "Add noodles.", "Toss with sauce."] },
    { id: 206, cuisine: "Japanese", title: "Agedashi Tofu", category: "Starter", baseServings: 2, image: "https://placehold.co/600x400/8A9A5B/ffffff?text=Agedashi+Tofu", description: "Fried tofu in broth.", ingredients: [{ name: "Tofu", amount: 1, unit: "block" }, { name: "Starch", amount: 0.5, unit: "cup" }, { name: "Dashi", amount: 1, unit: "cup" }, { name: "Soy Sauce", amount: 1, unit: "tbsp" }], instructions: ["Coat tofu in starch.", "Deep fry.", "Serve in hot broth."] },

    // FRENCH
    { id: 301, cuisine: "French", title: "French Onion Soup", category: "Starter", baseServings: 4, image: "https://placehold.co/600x400/6b7b8c/ffffff?text=Onion+Soup", description: "Caramelized onion broth.", ingredients: [{ name: "Onions", amount: 5, unit: "large" }, { name: "Broth", amount: 4, unit: "cups" }, { name: "Cheese", amount: 1, unit: "cup" }, { name: "Baguette", amount: 4, unit: "slices" }], instructions: ["Caramelize onions (45 mins).", "Add broth.", "Top with bread/cheese.", "Broil."] },
    { id: 302, cuisine: "French", title: "Quiche Lorraine", category: "Main", baseServings: 6, image: "https://placehold.co/600x400/6b7b8c/ffffff?text=Quiche", description: "Bacon cheese tart.", ingredients: [{ name: "Eggs", amount: 4, unit: "large" }, { name: "Cream", amount: 1, unit: "cup" }, { name: "Bacon", amount: 6, unit: "strips" }, { name: "Cheese", amount: 1, unit: "cup" }], instructions: ["Fry bacon.", "Mix eggs/cream.", "Bake in crust 40 mins."] },
    { id: 303, cuisine: "French", title: "Potato Gratin", category: "Side", baseServings: 4, image: "https://placehold.co/600x400/6b7b8c/ffffff?text=Gratin", description: "Baked creamy potatoes.", ingredients: [{ name: "Potatoes", amount: 4, unit: "large" }, { name: "Cream", amount: 1.5, unit: "cups" }, { name: "Garlic", amount: 2, unit: "cloves" }, { name: "Thyme", amount: 1, unit: "sprig" }], instructions: ["Slice potatoes thin.", "Layer with cream/herbs.", "Bake 1 hour."] },
    { id: 304, cuisine: "French", title: "Ratatouille", category: "Main", baseServings: 4, image: "https://placehold.co/600x400/6b7b8c/ffffff?text=Ratatouille", description: "Veggie stew.", ingredients: [{ name: "Eggplant", amount: 1, unit: "medium" }, { name: "Zucchini", amount: 2, unit: "medium" }, { name: "Tomatoes", amount: 3, unit: "medium" }, { name: "Thyme", amount: 1, unit: "tsp" }], instructions: ["Sauté veggies separately.", "Combine and simmer."] },
    { id: 305, cuisine: "French", title: "Coq au Vin", category: "Main", baseServings: 4, image: "https://placehold.co/600x400/6b7b8c/ffffff?text=Coq+au+Vin", description: "Chicken in wine.", ingredients: [{ name: "Chicken", amount: 4, unit: "pieces" }, { name: "Red Wine", amount: 2, unit: "cups" }, { name: "Bacon", amount: 4, unit: "strips" }, { name: "Mushrooms", amount: 1, unit: "cup" }], instructions: ["Brown chicken/bacon.", "Add veggies/wine.", "Simmer 1 hour."] },
    { id: 306, cuisine: "French", title: "Sole Meunière", category: "Main", baseServings: 2, image: "https://placehold.co/600x400/6b7b8c/ffffff?text=Sole+Meunière", description: "Fish in butter sauce.", ingredients: [{ name: "Fish", amount: 2, unit: "fillets" }, { name: "Butter", amount: 4, unit: "tbsp" }, { name: "Lemon", amount: 1, unit: "half" }, { name: "Parsley", amount: 1, unit: "tbsp" }], instructions: ["Flour fish.", "Fry in butter.", "Top with lemon butter."] }
];

/* --- Global State --- */
let activeCuisine = "";
let currentRecipe = null;
let currentServings = 2;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

/* --- DOM Elements --- */
const views = {
    landing: document.getElementById('landingView'),
    app: document.getElementById('appView'),
    detail: document.getElementById('detailView'),
    shopping: document.getElementById('shoppingView')
};

const components = {
    pantryForm: document.getElementById('pantryForm'),
    pantryTitle: document.getElementById('pantryTitle'),
    recipeGrid: document.getElementById('recipeGrid'),
    recipeCount: document.getElementById('recipeCount'),
    resultsTitle: document.getElementById('resultsTitle'),
    detailContent: document.getElementById('detailContent'),
    findBtn: document.getElementById('findBtn'),
    clearBtn: document.getElementById('clearBtn'),
    backBtn: document.getElementById('backBtn'),
    globalSearch: document.getElementById('globalSearch'),
    shoppingInput: document.getElementById('shoppingInput'),
    addShoppingBtn: document.getElementById('addShoppingBtn'),
    shoppingListContainer: document.getElementById('shoppingListContainer')
};

/* --- Navigation Functions (FIXED) --- */

function switchView(viewName) {
    const allViews = [
        document.getElementById('landingView'),
        document.getElementById('appView'),
        document.getElementById('detailView'),
        document.getElementById('shoppingView')
    ];

    // 1. Force Hide Everything (Clearing inline style allows CSS to control display)
    allViews.forEach(el => {
        if (el) {
            el.classList.remove('active-view');
            el.classList.add('hidden-view');
            el.style.display = "none"; // Hide completely
        }
    });

    // 2. Identify Target
    let target = null;
    if (viewName === 'landing') target = document.getElementById('landingView');
    if (viewName === 'app') target = document.getElementById('appView');
    if (viewName === 'detail') target = document.getElementById('detailView');
    if (viewName === 'shopping') target = document.getElementById('shoppingView');

    // 3. Show Target (Reset inline display so CSS rules take over)
    if (target) {
        target.classList.remove('hidden-view');
        target.classList.add('active-view');
        target.style.display = ""; // IMPORTANT: Clears 'none' and lets CSS Grid/Block work
    }

    window.scrollTo(0,0);
}

function goHome() {
    activeCuisine = "";
    switchView('landing');
    components.globalSearch.value = "";
}

function scrollToContact() {
    const footer = document.getElementById('contactSection');
    if(footer) footer.scrollIntoView({ behavior: 'smooth' });
}

function loadCuisine(cuisineName) {
    activeCuisine = cuisineName;
    components.pantryTitle.innerText = `${cuisineName} Pantry`;
    components.pantryForm.style.pointerEvents = "auto";
    components.pantryForm.style.opacity = "1";
    renderPantrySidebar(cuisineName);
    const cuisineRecipes = allRecipes.filter(r => r.cuisine === cuisineName);
    renderGrid(cuisineRecipes);
    components.resultsTitle.innerText = `${cuisineName} Recipes`;
    switchView('app');
}

/* --- FAVORITES LOGIC --- */

function toggleFavorite(id, event) {
    if(event) event.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    if(activeCuisine === "Favorites") {
        loadFavoritesView();
    } else {
        const btn = document.querySelector(`button[onclick*="toggleFavorite(${id}"]`);
        if(btn) btn.classList.toggle('liked');
    }
}

function loadFavoritesView() {
    activeCuisine = "Favorites";
    switchView('app');
    components.pantryTitle.innerText = "Favorites";
    components.pantryForm.innerHTML = `
        <div style="text-align:center; color:#666; padding: 1rem;">
            <p>You are viewing your saved recipes.</p>
            <p style="font-size:3rem; color:#C17C5C;">♥</p>
        </div>
    `;
    const favRecipes = allRecipes.filter(r => favorites.includes(r.id));
    components.resultsTitle.innerText = "My Saved Recipes";
    renderGrid(favRecipes);
}

/* --- SHOPPING LIST LOGIC --- */

function loadShoppingView() {
    switchView('shopping');
    renderShoppingList();
}

function addShoppingItem() {
    const text = components.shoppingInput.value.trim();
    if(text) {
        shoppingList.push(text);
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        components.shoppingInput.value = "";
        renderShoppingList();
    }
}

function removeShoppingItem(index) {
    shoppingList.splice(index, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    renderShoppingList();
}

function renderShoppingList() {
    components.shoppingListContainer.innerHTML = "";
    if(shoppingList.length === 0) {
        components.shoppingListContainer.innerHTML = "<p style='text-align:center; color:#999;'>Your list is empty.</p>";
        return;
    }
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item}</span><button class="delete-btn" onclick="removeShoppingItem(${index})">×</button>`;
        components.shoppingListContainer.appendChild(li);
    });
}

// Bind Shopping Button
if(components.addShoppingBtn) {
    components.addShoppingBtn.addEventListener('click', addShoppingItem);
    components.shoppingInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') addShoppingItem();
    });
}

/* --- Standard Grid/Pantry Logic --- */

function renderPantrySidebar(cuisine) {
    const data = pantryData[cuisine];
    components.pantryForm.innerHTML = ""; 
    for (const [category, items] of Object.entries(data)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        const title = document.createElement('h4');
        title.innerText = category;
        groupDiv.appendChild(title);
        items.forEach(item => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" value="${item}"> ${item}`;
            groupDiv.appendChild(label);
        });
        components.pantryForm.appendChild(groupDiv);
    }
}

function renderGrid(data) {
    components.recipeGrid.innerHTML = '';
    let selectedIngredients = [];
    const checkboxes = document.querySelectorAll('#pantryForm input[type="checkbox"]:checked');
    if(checkboxes.length > 0) {
        selectedIngredients = Array.from(checkboxes).map(cb => cb.value);
    }

    if (data.length === 0) {
        components.recipeGrid.innerHTML = '<p>No recipes found.</p>';
        components.recipeCount.innerText = '0 items';
        return;
    }

    components.recipeCount.innerText = `${data.length} items`;

    data.forEach(recipe => {
        const matchCount = recipe.ingredients.filter(ingObj => 
            selectedIngredients.includes(ingObj.name)
        ).length;
        let matchLabel = '';
        if (selectedIngredients.length > 0 && matchCount > 0) {
            matchLabel = `<span style="color:#C17C5C; font-size:0.8rem; font-weight:bold; display:block; margin-bottom:0.5rem;">✓ Matches ${matchCount} ingredients</span>`;
        }
        const isLiked = favorites.includes(recipe.id) ? 'liked' : '';
        const card = document.createElement('article');
        card.className = 'recipe-card';
        card.onclick = () => showDetail(recipe.id);
        card.innerHTML = `
            <button class="heart-btn ${isLiked}" onclick="toggleFavorite(${recipe.id}, event)">♥</button>
            <img src="${recipe.image}" alt="${recipe.title}" class="card-img">
            <div class="card-body">
                ${matchLabel}
                <span class="card-tag">${recipe.category}</span>
                <h3 class="card-title">${recipe.title}</h3>
                <p class="card-desc">${recipe.description}</p>
            </div>
        `;
        components.recipeGrid.appendChild(card);
    });
}

function showDetail(id) {
    currentRecipe = allRecipes.find(r => r.id === id);
    if (!currentRecipe) return;
    currentServings = currentRecipe.baseServings;
    const stepsHTML = currentRecipe.instructions.map(step => `<li>${step}</li>`).join('');
    components.detailContent.innerHTML = `
        <div class="detail-header">
            <h2 class="detail-title">${currentRecipe.title}</h2>
            <p class="detail-meta">${currentRecipe.cuisine} • ${currentRecipe.category}</p>
            <div class="serving-control">
                <button class="serving-btn" onclick="updateServings(-1)">−</button>
                <span class="serving-display" id="servingDisplay">${currentServings} People</span>
                <button class="serving-btn" onclick="updateServings(1)">+</button>
            </div>
            <img src="${currentRecipe.image}" alt="${currentRecipe.title}">
        </div>
        <div class="detail-split">
            <div class="ingredients-list">
                <h3>Ingredients</h3>
                <ul id="dynamicIngredients"></ul>
            </div>
            <div class="steps-list">
                <h3>Instructions</h3>
                <ol>${stepsHTML}</ol>
            </div>
        </div>
    `;
    renderIngredientsList();
    switchView('detail');
}

window.updateServings = function(change) {
    const newCount = currentServings + change;
    if (newCount < 1 || newCount > 12) return;
    currentServings = newCount;
    document.getElementById('servingDisplay').innerText = `${currentServings} People`;
    renderIngredientsList();
}

function renderIngredientsList() {
    const listContainer = document.getElementById('dynamicIngredients');
    if(!currentRecipe || !listContainer) return;
    const base = currentRecipe.baseServings;
    const html = currentRecipe.ingredients.map(ing => {
        let newAmount = (ing.amount * currentServings) / base;
        let displayAmount = parseFloat(newAmount.toFixed(2));
        return `<li><span class="ingredient-amount">${displayAmount} ${ing.unit}</span> ${ing.name}</li>`;
    }).join('');
    listContainer.innerHTML = html;
}

/* --- Event Listeners --- */

components.findBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('#pantryForm input[type="checkbox"]:checked');
    const selectedIngredients = Array.from(checkboxes).map(cb => cb.value);
    let relevantRecipes = allRecipes.filter(r => r.cuisine === activeCuisine);
    if (selectedIngredients.length > 0) {
        const scored = relevantRecipes.map(recipe => {
            const matches = recipe.ingredients.filter(ing => selectedIngredients.includes(ing.name));
            return { recipe, count: matches.length };
        });
        const filtered = scored.filter(item => item.count > 0);
        filtered.sort((a,b) => b.count - a.count);
        relevantRecipes = filtered.map(item => item.recipe);
        components.resultsTitle.innerText = relevantRecipes.length > 0 ? "Best Matches" : "No Matches";
    } else {
        components.resultsTitle.innerText = `${activeCuisine} Recipes`;
    }
    renderGrid(relevantRecipes);
});

components.clearBtn.addEventListener('click', () => {
    document.querySelectorAll('#pantryForm input').forEach(i => i.checked = false);
    const cuisineRecipes = allRecipes.filter(r => r.cuisine === activeCuisine);
    components.resultsTitle.innerText = `${activeCuisine} Recipes`;
    renderGrid(cuisineRecipes);
});

components.backBtn.addEventListener('click', () => {
    switchView('app');
});

components.globalSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const term = e.target.value.toLowerCase().trim();
        if (!term) return;
        const matches = allRecipes.filter(recipe => {
            const titleMatch = recipe.title.toLowerCase().includes(term);
            const ingMatch = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(term));
            return titleMatch || ingMatch;
        });
        switchView('app');
        activeCuisine = "Search";
        components.pantryTitle.innerText = "Search Mode";
        components.pantryForm.innerHTML = `
            <div style="padding: 1rem; color: #666; font-style: italic; text-align: center;">
                <p>Showing global search results for <strong>"${term}"</strong>.</p>
                <br>
                <button onclick="goHome()" class="btn-secondary" style="font-size: 0.8rem;">Clear Search</button>
            </div>
        `;
        components.resultsTitle.innerText = matches.length > 0 ? `Found ${matches.length} results for "${term}"` : `No results for "${term}"`;
        renderGrid(matches);
        e.target.blur(); 
    }
});