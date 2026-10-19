const recipes = [
  {
    name: 'Berry & Honey Breakfast Bowl', type: 'meal', minutes: 10, serves: 1, emoji: '🍓',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80',
    description: 'A bright, creamy bowl that makes breakfast feel like a treat.',
    ingredients: ['1 cup thick yogurt', '½ cup fresh berries', '¼ cup crunchy granola', '1 teaspoon honey'],
    steps: ['Spoon the yogurt into a bowl and smooth the top.', 'Add berries and granola in little colorful clusters.', 'Finish with honey and enjoy straight away.'], link: 'index.html#desserts', linkText: 'Explore sweet treats'
  },
  {
    name: 'Chocolate Banana Mug Cake', type: 'dessert', minutes: 8, serves: 1, emoji: '🍫',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    description: 'A warm, fudgy little cake for a chocolate craving—no oven needed.',
    ingredients: ['1 ripe banana, mashed', '3 tablespoons flour', '1 tablespoon cocoa powder', '2 tablespoons milk', '1 teaspoon chocolate chips'],
    steps: ['Stir the mashed banana, flour, cocoa, and milk in a microwave-safe mug until smooth.', 'Fold in the chocolate chips.', 'Microwave for 60–90 seconds, checking that the center is just set. Cool briefly before eating.'], link: 'index.html#desserts', linkText: 'Shop chocolate desserts'
  },
  {
    name: 'Golden Masala Oats', type: 'meal', minutes: 15, serves: 2, emoji: '🥣',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=80',
    description: 'Cozy savory oats with warming spices and fresh, colorful toppings.',
    ingredients: ['1 cup rolled oats', '2 cups water or milk', '½ teaspoon cumin', '½ cup chopped vegetables', 'Salt and pepper to taste'],
    steps: ['Warm cumin in a saucepan for 30 seconds, then add the vegetables and stir until tender.', 'Add oats, liquid, salt, and pepper. Simmer gently for 5–7 minutes, stirring.', 'Taste, adjust seasoning, and serve warm with herbs or yogurt.'], link: 'index.html#desserts', linkText: 'Explore the Mishti menu'
  },
  {
    name: 'Mango Lassi Cooler', type: 'drink', minutes: 5, serves: 2, emoji: '🥭',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    description: 'A cool, creamy mango drink with a gentle hint of cardamom.',
    ingredients: ['1 cup ripe mango pieces', '¾ cup plain yogurt', '½ cup chilled milk', '1 teaspoon honey, to taste', 'A pinch of cardamom'],
    steps: ['Add mango, yogurt, milk, honey, and cardamom to a blender.', 'Blend until creamy and smooth. Add a splash more milk if you prefer it thinner.', 'Pour into chilled glasses and serve right away.'], link: 'index.html#drinks', linkText: 'Discover drinks'
  },
  {
    name: 'Strawberry Chocolate Toast', type: 'dessert', minutes: 10, serves: 2, emoji: '🍞',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80',
    description: 'Crisp toast, soft chocolate, and fresh fruit—simple enough for any day.',
    ingredients: ['2 slices of bread', '2 tablespoons chocolate spread', '½ cup sliced strawberries', '1 teaspoon chopped nuts (optional)'],
    steps: ['Toast the bread until golden and crisp.', 'Spread chocolate over each warm slice.', 'Top with strawberries and nuts, then serve while the toast is warm.'], link: 'index.html#desserts', linkText: 'Shop desserts'
  },
  {
    name: 'Mint Lime Sparkler', type: 'drink', minutes: 5, serves: 2, emoji: '🍋',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=80',
    description: 'A refreshing citrus cooler with mint and plenty of sparkle.',
    ingredients: ['1 lime, juiced', '8 mint leaves', '2 teaspoons sugar or honey', '1½ cups sparkling water', 'Ice'],
    steps: ['Gently muddle mint with lime juice and sugar in a jug.', 'Add ice and sparkling water, then stir lightly.', 'Taste, adjust sweetness, and pour into glasses with extra mint.'], link: 'index.html#drinks', linkText: 'Discover drinks'
  },
  {
    name: 'Creamy Tomato Soup', type: 'meal', minutes: 25, serves: 2, emoji: '🍅',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    description: 'A comforting bowl with mellow tomato flavor and a silky finish.',
    ingredients: ['4 ripe tomatoes, chopped', '½ small onion, chopped', '1 cup vegetable stock', '2 tablespoons cream or coconut milk', 'Salt and pepper'],
    steps: ['Cook the onion in a little oil until soft, then add tomatoes and a pinch of salt.', 'Add stock and simmer for 15 minutes, until the tomatoes are very soft.', 'Blend carefully until smooth, stir in cream, and season to taste.'], link: 'index.html#soups', linkText: 'Explore soups'
  },
  {
    name: 'Cinnamon Apple Crumble Cup', type: 'dessert', minutes: 15, serves: 2, emoji: '🍎',
    image: 'https://images.unsplash.com/photo-1562007908-17c67e878c4b?auto=format&fit=crop&w=900&q=80',
    description: 'Tender cinnamon apples under a quick, crunchy oat topping.',
    ingredients: ['1 apple, diced', '¼ cup rolled oats', '1 tablespoon butter', '1 teaspoon brown sugar', 'A pinch of cinnamon'],
    steps: ['Place diced apple with cinnamon in two small microwave-safe cups.', 'Rub oats, butter, and sugar together, then sprinkle over the apple.', 'Microwave for 2–3 minutes until the apple softens, or bake at 180°C until golden. Let cool slightly.'], link: 'index.html#desserts', linkText: 'Find a sweet treat'
  }
];

const form = document.querySelector('#recipe-form');
const results = document.querySelector('#recipe-results');
const status = document.querySelector('#recipe-status');

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function createList(title, entries, tagName) {
  const section = document.createElement('section');
  section.append(makeElement('h4', '', title));
  const list = document.createElement(tagName);
  entries.forEach((entry) => list.append(makeElement('li', '', entry)));
  section.append(list);
  return section;
}

function renderRecipe(recipe, userIngredients, index) {
  const article = makeElement('article', 'recipe-card');
  article.style.animationDelay = `${index * 90}ms`;

  const visual = makeElement('div', 'recipe-card-image');
  const image = document.createElement('img');
  image.src = recipe.image;
  image.alt = recipe.name;
  image.loading = 'lazy';
  visual.append(image, makeElement('span', '', recipe.emoji));

  const body = makeElement('div', 'recipe-card-body');
  const category = recipe.type === 'meal' ? 'Meal & snack' : recipe.type === 'drink' ? 'Drink' : 'Sweet idea';
  body.append(
    makeElement('p', 'recipe-card-meta', `${category} · ${recipe.minutes} min · serves ${recipe.serves}`),
    makeElement('h3', '', recipe.name),
    makeElement('p', 'recipe-card-description', recipe.description),
    createList('You’ll need', recipe.ingredients, 'ul'),
    createList('Make it', recipe.steps, 'ol')
  );

  if (userIngredients.length) {
    body.append(makeElement('p', 'your-ingredients', `Your ingredients: ${userIngredients.join(', ')}. See which ones fit, and adjust the recipe to your taste.`));
  }

  const actions = makeElement('div', 'recipe-card-actions');
  const menuLink = document.createElement('a');
  menuLink.href = recipe.link;
  menuLink.textContent = recipe.linkText;
  const copyButton = makeElement('button', 'recipe-copy-button', 'Copy recipe');
  copyButton.type = 'button';
  copyButton.addEventListener('click', async () => {
    const text = `${recipe.name}\n\nIngredients:\n${recipe.ingredients.map((item) => `• ${item}`).join('\n')}\n\nSteps:\n${recipe.steps.map((step, stepIndex) => `${stepIndex + 1}. ${step}`).join('\n')}`;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = 'Copied!';
    } catch {
      copyButton.textContent = 'Copy unavailable';
    }
    window.setTimeout(() => { copyButton.textContent = 'Copy recipe'; }, 1800);
  });
  actions.append(menuLink, copyButton);
  body.append(actions);
  article.append(visual, body);
  return article;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const wantedType = document.querySelector('#recipe-type').value;
  const wantedTime = document.querySelector('#recipe-time').value;
  const userIngredients = document.querySelector('#recipe-ingredients').value
    .split(',').map((item) => item.trim()).filter(Boolean).slice(0, 8);

  let suggestions = recipes.filter((recipe) => wantedType === 'any' || recipe.type === wantedType);
  if (wantedTime === 'quick') suggestions = suggestions.filter((recipe) => recipe.minutes <= 15);
  if (wantedTime === 'easy') suggestions = suggestions.filter((recipe) => recipe.minutes <= 30);

  if (!suggestions.length) {
    status.textContent = 'No exact match yet—try “Surprise me” or choose another time.';
    results.replaceChildren();
    return;
  }

  const ingredientWords = userIngredients.map((item) => item.toLowerCase());
  suggestions.sort((first, second) => {
    const score = (recipe) => ingredientWords.reduce((total, word) => {
      const recipeText = `${recipe.name} ${recipe.description} ${recipe.ingredients.join(' ')}`.toLowerCase();
      return total + (recipeText.includes(word) ? 1 : 0);
    }, 0);
    return score(second) - score(first);
  });
  const selected = suggestions.slice(0, 3);
  results.replaceChildren(...selected.map((recipe, index) => renderRecipe(recipe, userIngredients, index)));
  status.textContent = `Here are ${selected.length} ideas${userIngredients.length ? ' to inspire your ingredient list' : ''}. Pick one and make it your own.`;
});

form.requestSubmit();
