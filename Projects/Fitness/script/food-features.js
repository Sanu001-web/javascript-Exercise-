
/* ShaanFitness Student Kitchen + Food Tracker.
   Public recipes work without a backend. Member diary requires configured Supabase Auth + database. */
(() => {
  const recipes = [
    {id:"protein-poha",name:"Protein Poha",category:"Breakfast",cost:35,calories:310,protein:13,carbs:48,fat:8,time:15,ingredients:["1 cup poha","25 g roasted peanuts","30 g peas","1 tsp oil","Lemon, mustard seeds and curry leaves"],steps:["Rinse poha briefly and let it soften.","Heat oil; crackle mustard seeds and curry leaves.","Add peas and cook until tender.","Fold in poha and peanuts; season and finish with lemon."],tags:["Vegetarian","Budget"]},
    {id:"egg-sandwich",name:"Egg Sandwich",category:"Breakfast",cost:42,calories:360,protein:20,carbs:34,fat:15,time:12,ingredients:["2 eggs","2 whole-wheat bread slices","Onion and tomato","1 tsp oil","Pepper and salt"],steps:["Boil or scramble the eggs.","Toast bread lightly.","Layer egg with sliced vegetables and seasoning.","Serve immediately."],tags:["High protein","Quick"]},
    {id:"paneer-bhurji",name:"Paneer Bhurji",category:"Lunch",cost:75,calories:390,protein:24,carbs:18,fat:25,time:18,ingredients:["100 g paneer","1 small onion","1 tomato","1 tsp oil","Turmeric, chilli and coriander"],steps:["Heat oil and soften onion.","Add tomato and spices; cook until soft.","Crumble paneer into the pan.","Cook for 3–4 minutes and garnish with coriander."],tags:["High protein","Vegetarian"]},
    {id:"sprouts-bowl",name:"Cooked Sprouts Bowl",category:"Snack",cost:30,calories:220,protein:14,carbs:34,fat:4,time:15,ingredients:["1 cup moong sprouts","1 small tomato","Cucumber","Lemon","Roasted cumin and salt"],steps:["Steam or boil sprouts until fully cooked and tender.","Cool slightly.","Mix with chopped vegetables, lemon and cumin.","Serve fresh."],tags:["High fibre","Vegetarian"]},
    {id:"besan-chilla",name:"Besan Chilla",category:"Breakfast",cost:28,calories:290,protein:12,carbs:36,fat:10,time:15,ingredients:["½ cup besan","½ onion","Tomato and coriander","Water","1 tsp oil"],steps:["Mix besan with water into a pourable batter.","Add chopped vegetables and seasoning.","Spread on a lightly oiled hot pan.","Cook both sides until golden."],tags:["Vegetarian","Budget"]},
    {id:"banana-oats",name:"Banana Peanut Oats",category:"Breakfast",cost:32,calories:350,protein:11,carbs:52,fat:12,time:5,ingredients:["½ cup oats","1 banana","1 tbsp peanut butter","150 ml milk or fortified soy milk"],steps:["Add oats and milk to a bowl.","Slice in banana.","Stir through peanut butter.","Serve chilled or warm."],tags:["No cooking","Quick"]},
    {id:"veg-rice",name:"Vegetable Rice",category:"Lunch",cost:38,calories:370,protein:8,carbs:66,fat:9,time:20,ingredients:["1 cup cooked rice","½ cup mixed vegetables","1 tsp oil","Cumin and basic spices"],steps:["Heat oil and cumin in a pan.","Add vegetables and cook until tender.","Add cooked rice and spices.","Mix thoroughly and heat through."],tags:["Vegetarian","Budget"]},
    {id:"dal-khichdi",name:"Dal Khichdi",category:"Dinner",cost:40,calories:390,protein:15,carbs:66,fat:7,time:25,ingredients:["¼ cup rice","¼ cup moong dal","½ cup vegetables","½ tsp oil","Turmeric and cumin"],steps:["Rinse rice and dal.","Add to a pressure cooker with vegetables, turmeric and water.","Cook until soft and porridge-like.","Finish with a small cumin tempering."],tags:["Comfort food","Vegetarian"]},
    {id:"curd-rice",name:"Curd Rice",category:"Dinner",cost:35,calories:330,protein:10,carbs:52,fat:9,time:10,ingredients:["1 cup cooked rice","½ cup plain curd","Cucumber","½ tsp oil","Mustard seeds and curry leaves"],steps:["Cool cooked rice until warm, not hot.","Mix with curd and cucumber.","Prepare a light mustard-seed and curry-leaf tempering.","Mix and serve."],tags:["Vegetarian","Quick"]},
    {id:"chana-salad",name:"Chana Salad",category:"Snack",cost:35,calories:280,protein:14,carbs:43,fat:6,time:10,ingredients:["¾ cup boiled kala chana","Tomato and onion","Cucumber","Lemon","Coriander and chaat masala"],steps:["Use fully cooked, cooled chana.","Chop the vegetables.","Toss everything with lemon and seasoning.","Serve fresh."],tags:["High fibre","High protein"]}
  ];
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const grid = $("#sf-recipe-grid");
  let activeUser = null, sb = null, entries = [], selectedDay = new Date().toISOString().slice(0,10);
  const config = window.SHAAN_SUPABASE_CONFIG || {};
  const configured = config.url && config.anonKey && !config.url.includes("YOUR_") && !config.anonKey.includes("YOUR_");

  function renderRecipes() {
    if (!grid) return;
    const q = ($("#sf-recipe-search")?.value || "").trim().toLowerCase();
    const category = $("#sf-recipe-category")?.value || "all";
    const budget = $("#sf-recipe-budget")?.value || "all";
    const filtered = recipes.filter(r => (category === "all" || r.category === category) && (budget === "all" || r.cost < Number(budget)) && (!q || `${r.name} ${r.ingredients.join(" ")}`.toLowerCase().includes(q)));
    $("#sf-recipe-count").textContent = `${filtered.length} recipe${filtered.length === 1 ? "" : "s"} found`;
    grid.innerHTML = filtered.length ? filtered.map(r => `<article class="sf-recipe-card"><p class="eyebrow sky-blue">${esc(r.category)} · ${r.time} min</p><h3>${esc(r.name)}</h3><p>Simple ingredients, clear steps and an affordable everyday meal.</p><div class="sf-recipe-meta"><span>₹${r.cost} approx.</span><span>${r.calories} kcal</span><span>${r.protein} g protein</span></div><button class="sf-recipe-open" data-recipe="${r.id}" type="button">View recipe</button></article>`).join("") : '<div class="sf-empty">No recipes match. Try another search or filter.</div>';
  }
  function showRecipe(id) {
    const r = recipes.find(item => item.id === id); if (!r) return;
    const detail = $("#sf-recipe-detail");
    detail.hidden = false;
    detail.innerHTML = `<div class="flex justify-between items-start gap-4"><div><p class="eyebrow sky-blue">${esc(r.category)} · ${r.time} minutes</p><h2>${esc(r.name)}</h2></div><button type="button" id="sf-close-detail" class="sf-secondary-btn">Close</button></div><div class="sf-recipe-meta"><span>₹${r.cost} estimated cost</span><span>${r.calories} kcal</span><span>Protein ${r.protein} g</span><span>Carbs ${r.carbs} g</span><span>Fat ${r.fat} g</span></div><h3>Ingredients · 1 serving</h3><ul>${r.ingredients.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><h3>Preparation</h3><ol class="list-decimal pl-6">${r.steps.map(x=>`<li>${esc(x)}</li>`).join("")}</ol><p class="text-gray-400 text-sm mt-4">Nutrition and cost are approximate estimates per serving.</p>`;
    detail.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function message(text) { const el=$("#sf-food-message"); if(el) el.textContent=text; }
  function initFoodSelect() {
    const select=$("#sf-food-select"); if (!select) return;
    select.innerHTML=recipes.map(r=>`<option value="${r.id}">${esc(r.name)} · ${r.calories} kcal</option>`).join("");
  }
  function renderEntries() {
    const total={calories:0,protein:0,carbs:0,fat:0};
    entries.forEach(e=>{total.calories+=Number(e.calories)||0;total.protein+=Number(e.protein_g)||0;total.carbs+=Number(e.carbs_g)||0;total.fat+=Number(e.fat_g)||0;});
    $("#sf-total-calories").textContent=Math.round(total.calories);
    $("#sf-total-protein").textContent=`${Math.round(total.protein)} g`;
    $("#sf-total-carbs").textContent=`${Math.round(total.carbs)} g`;
    $("#sf-total-fat").textContent=`${Math.round(total.fat)} g`;
    $("#sf-calorie-progress").style.width=`${Math.min(100,total.calories/2000*100)}%`;
    $("#sf-calorie-target").textContent="Target: 2,000 kcal (sample target)";
    $("#sf-food-entries").innerHTML=entries.length?entries.map(e=>`<div class="sf-food-entry"><div><strong>${esc(e.food_name)}</strong><small>${esc(e.meal_type)} · ${e.quantity} serving(s)</small></div><div class="text-right"><strong>${Math.round(e.calories)} kcal</strong><small>P ${Math.round(e.protein_g)}g · C ${Math.round(e.carbs_g)}g · F ${Math.round(e.fat_g)}g</small></div></div>`).join(""):'<p class="text-gray-400">No meals logged for this date yet.</p>';
  }
  async function loadEntries() {
    if (!sb || !activeUser) return;
    const {data,error}=await sb.from("food_entries").select("*").eq("user_id",activeUser.id).eq("entry_date",selectedDay).order("created_at",{ascending:false});
    if(error){message(`Could not load diary: ${error.message}`);return;}
    entries=data||[];renderEntries();
  }
  function setAuthUI(user) {
    activeUser=user;
    $("#sf-tracker-locked").hidden=!!user;
    $("#sf-tracker-app").hidden=!user;
    if(user){$("#sf-tracker-date").textContent=new Date(selectedDay+"T12:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});loadEntries();}
  }
  async function initSupabase() {
    if(!configured || !window.supabase?.createClient){
      $("#sf-backend-status").textContent="Supabase is not configured yet. Add your Project URL and anon/publishable key in script/supabase-config.js to enable secure member accounts and cloud diary storage.";
      return;
    }
    sb=window.supabase.createClient(config.url,config.anonKey);
    const {data:{session}}=await sb.auth.getSession();
    setAuthUI(session?.user||null);
    sb.auth.onAuthStateChange((_event,sessionNow)=>setAuthUI(sessionNow?.user||null));
  }
  function bindAuth() {
    const login=$("#login-form"), signup=$(".js-form");
    login?.addEventListener("submit",async e=>{
      if(!sb)return;
      e.preventDefault();e.stopImmediatePropagation();
      const email=$("#login-email").value.trim(),password=$("#login-password").value;
      const msg=login.querySelector(".js-login-message");
      const {error}=await sb.auth.signInWithPassword({email,password});
      msg.textContent=error?error.message:"Signed in successfully. Your private diary is ready.";
      if(!error){login.reset();window.NavigationModule?.navigate?.("tracker");document.querySelector('[data-page="tracker"]')?.click();}
    },true);
    signup?.addEventListener("submit",async e=>{
      if(!sb)return;
      e.preventDefault();e.stopImmediatePropagation();
      const firstName=$("#signup-first-name").value.trim(),lastName=$("#signup-last-name").value.trim();
      const email=$("#signup-email").value.trim(),phone=$("#signup-phone").value.trim();
      const password=$("#signup-password").value,confirm=$("#signup-confirm-password").value;
      const msg=signup.querySelector(".js-message");
      if(password!==confirm){msg.textContent="Passwords do not match.";return;}
      const {data,error}=await sb.auth.signUp({email,password,options:{data:{first_name:firstName,last_name:lastName,phone}}});
      msg.textContent=error?error.message:(data.session?"Account created and signed in.":"Account created. Check your email to confirm, then log in.");
      if(!error)signup.reset();
    },true);
  }
  function bindTracker() {
    $("#sf-food-form")?.addEventListener("submit",async e=>{
      e.preventDefault();if(!sb||!activeUser){message("Please sign in first.");return;}
      const recipe=recipes.find(r=>r.id===$("#sf-food-select").value);if(!recipe)return;
      const quantity=Number($("#sf-food-quantity").value),meal=$("#sf-meal-type").value;
      if(!Number.isFinite(quantity)||quantity<=0){message("Enter a valid serving quantity.");return;}
      const row={user_id:activeUser.id,entry_date:selectedDay,meal_type:meal,food_name:recipe.name,quantity,calories:recipe.calories*quantity,protein_g:recipe.protein*quantity,carbs_g:recipe.carbs*quantity,fat_g:recipe.fat*quantity,source_type:"recipe",source_id:recipe.id};
      const {error}=await sb.from("food_entries").insert(row);
      if(error){message(`Could not save: ${error.message}`);return;}
      message("Meal added to your diary.");await loadEntries();
    });
    $("#sf-tracker-day")?.addEventListener("change",async e=>{selectedDay=e.target.value||new Date().toISOString().slice(0,10);$("#sf-tracker-date").textContent=new Date(selectedDay+"T12:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});await loadEntries();});
    $("#sf-tracker-day").value=selectedDay;
    $("#sf-signout")?.addEventListener("click",async()=>{if(sb)await sb.auth.signOut();setAuthUI(null);});
  }
  document.addEventListener("DOMContentLoaded",()=>{
    renderRecipes();initFoodSelect();initSupabase();bindAuth();bindTracker();
    ["#sf-recipe-search","#sf-recipe-category","#sf-recipe-budget"].forEach(s=>$(s)?.addEventListener("input",renderRecipes));
    grid?.addEventListener("click",e=>{const btn=e.target.closest("[data-recipe]");if(btn)showRecipe(btn.dataset.recipe);});
    $("#sf-recipe-detail")?.addEventListener("click",e=>{if(e.target.id==="sf-close-detail")$("#sf-recipe-detail").hidden=true;});
  });
})();
