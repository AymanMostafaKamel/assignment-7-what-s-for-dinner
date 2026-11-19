// ! 1 - Variables

var recipes = [
  {
    name: "Koshari",
    difficulty: "Medium",
    cuisine: "Egyptian",
    desc: "Egypt's beloved street food of rice, lentils, pasta and chickpeas topped with spiced tomato sauce and crispy onions.",
    servings: 6,
    rating: 4.8,
    reviews: 1240,
    prepTime: 30,
    cookTime: 60,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "1 cup brown lentils",
      "1 cup short-grain rice",
      "1 cup small macaroni",
      "1 can chickpeas (400 g)",
      "3 large onions, thinly sliced",
      "4 tomatoes, blended",
      "4 garlic cloves",
      "2 tbsp white vinegar",
      "1 tsp cumin",
      "1/2 tsp chili flakes",
      "Vegetable oil for frying",
      "Salt",
    ],
    steps: [
      "Boil lentils in salted water for 20 minutes until tender, then drain.",
      "Cook rice with a little salt and oil until fluffy; cook macaroni separately and drain.",
      "Fry sliced onions in oil until deep golden and crispy; set aside, keeping 2 tbsp of the onion oil.",
      "In the onion oil, saute garlic, add blended tomatoes, cumin, chili and salt; simmer 15 minutes. Add vinegar.",
      "Layer rice, lentils, macaroni and chickpeas on a plate, pour the sauce over and top with crispy onions.",
    ],
    nutrs: {
      cals: 520,
      protein: "17 g",
      fat: "14 g",
      carbs: "83 g",
      sodium: "640 mg",
      fiber: "11 g",
    },
    tips: [
      "Salt the onions lightly and fry on medium heat for extra crispiness. Add a pinch of cumin to the lentils while boiling for deeper flavor.",
      "Rinse the rice before cooking so the grains stay separate.",
      "Make the tomato sauce a day ahead; the flavor deepens overnight.",
      "Leftovers keep well in the fridge for 3 days; store the crispy onions separately so they stay crunchy.",
    ],
    image: "./images/1.jpg",
  },
  {
    name: "Chicken Molokhia",
    difficulty: "Medium",
    cuisine: "Egyptian",
    desc: "Silky jute leaf soup flavored with garlic and coriander, served over rice with tender chicken.",
    servings: 6,
    rating: 4.7,
    reviews: 980,
    prepTime: 20,
    cookTime: 60,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "500 g minced molokhia leaves (fresh or frozen)",
      "1 whole chicken, cut in pieces",
      "1 onion",
      "1 cinnamon stick",
      "2 bay leaves",
      "8 garlic cloves, crushed",
      "2 tbsp ground coriander",
      "3 tbsp ghee",
      "Salt and pepper",
      "Cooked rice for serving",
    ],
    steps: [
      "Boil chicken with onion, cinnamon, bay leaves and salt for 45 minutes to make a rich broth.",
      "Remove chicken and brown it in the oven or a pan; strain the broth.",
      "Bring 5 cups of broth to a gentle simmer and add the molokhia; do not let it boil hard.",
      "Fry garlic and coriander in ghee until golden and fragrant (the 'taqleya').",
      "Add the taqleya to the pot, stir quickly, and serve with rice and the chicken.",
    ],
    nutrs: {
      cals: 430,
      protein: "34 g",
      fat: "20 g",
      carbs: "28 g",
      sodium: "590 mg",
      fiber: "5 g",
    },
    tips: [
      "Never cover the pot or boil the molokhia vigorously, or it will lose its green color and become stringy.",
      "Chop the garlic fresh and fry it until just golden; burnt garlic makes the taqleya bitter.",
      "Use homemade chicken broth for a far richer taste than stock cubes.",
      "Freeze extra molokhia in portions; it reheats well on low heat.",
    ],
    image: "./images/2.jpg",
  },
  {
    name: "Stuffed Grape Leaves (Warak Enab)",
    difficulty: "Hard",
    cuisine: "Egyptian",
    desc: "Tender grape leaves rolled around herbed rice and slow-cooked in a tangy tomato broth.",
    servings: 6,
    rating: 4.6,
    reviews: 610,
    prepTime: 60,
    cookTime: 60,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "50 grape leaves",
      "2 cups short-grain rice",
      "1 cup chopped parsley",
      "1/2 cup chopped dill",
      "1/2 cup chopped cilantro",
      "2 onions, finely chopped",
      "3 tomatoes, chopped",
      "1/3 cup olive oil",
      "Juice of 2 lemons",
      "1 tbsp tomato paste",
      "Salt and pepper",
    ],
    steps: [
      "Blanch leaves in hot water for 2 minutes and drain.",
      "Mix rice, herbs, onions, tomatoes, tomato paste, oil, salt and pepper for the filling.",
      "Place a spoonful of filling on each leaf, fold the sides and roll tightly.",
      "Line a pot with tomato slices, pack the rolls in layers and cover with a plate.",
      "Add water and lemon juice to just cover and simmer on low heat for 1 hour.",
    ],
    nutrs: {
      cals: 310,
      protein: "6 g",
      fat: "12 g",
      carbs: "47 g",
      sodium: "420 mg",
      fiber: "4 g",
    },
    tips: [
      "Roll loosely because the rice expands as it cooks. Placing a plate on top keeps the rolls from unraveling.",
      "Choose small, tender leaves and trim the tough stems.",
      "Taste the filling raw and adjust lemon and salt before rolling.",
      "Line the pot with tomato slices or extra leaves to prevent the bottom rolls from sticking or burning.",
    ],
    image: "./images/3.webp",
  },
  {
    name: "Ful Medames",
    difficulty: "Easy",
    cuisine: "Egyptian",
    desc: "Slow-cooked fava beans mashed with lemon, garlic, cumin and olive oil, the classic Egyptian breakfast.",
    servings: 4,
    rating: 4.5,
    reviews: 870,
    prepTime: 5,
    cookTime: 15,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "2 cans fava beans (400 g each)",
      "3 garlic cloves, minced",
      "Juice of 1 lemon",
      "1 tsp cumin",
      "3 tbsp olive oil",
      "1 tomato, diced",
      "2 tbsp chopped parsley",
      "Salt and chili flakes",
    ],
    steps: [
      "Warm the fava beans with their liquid in a pot for 5 minutes.",
      "Drain half the liquid and lightly mash the beans with a fork.",
      "Stir in garlic, cumin, lemon juice and salt.",
      "Transfer to a bowl and drizzle with olive oil.",
      "Top with tomato, parsley and chili flakes; serve with warm bread.",
    ],
    nutrs: {
      cals: 290,
      protein: "15 g",
      fat: "11 g",
      carbs: "34 g",
      sodium: "780 mg",
      fiber: "13 g",
    },
    tips: [
      "Add a spoonful of tahini or a fried egg on top for a richer, more filling dish.",
      "Soak and slow-cook dried beans for the most authentic texture.",
      "Serve with fresh onion, pickles and warm baladi bread.",
      "Leftover ful can be thinned with a little hot water and reheated the next morning.",
    ],
    image: "./images/4.jpg",
  },
  {
    name: "Ta'ameya (Egyptian Falafel)",
    difficulty: "Medium",
    cuisine: "Egyptian",
    desc: "Crispy green fava bean fritters packed with herbs and spices.",
    servings: 6,
    rating: 4.7,
    reviews: 760,
    prepTime: 30,
    cookTime: 15,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "500 g dried split fava beans, soaked overnight",
      "1 large bunch cilantro",
      "1 bunch parsley",
      "1 bunch dill",
      "1 onion",
      "6 garlic cloves",
      "1 tsp ground coriander",
      "1 tsp cumin",
      "1 tsp baking soda",
      "2 tbsp sesame seeds",
      "Salt",
      "Oil for frying",
    ],
    steps: [
      "Drain the soaked beans well and pat dry.",
      "Blend beans with herbs, onion, garlic, coriander, cumin and salt into a coarse green paste.",
      "Rest the mixture for 15 minutes, then mix in the baking soda.",
      "Shape into small patties and press sesame seeds onto one side.",
      "Deep fry at 180°C (350°F) for 3-4 minutes until golden brown.",
    ],
    nutrs: {
      cals: 340,
      protein: "16 g",
      fat: "16 g",
      carbs: "34 g",
      sodium: "520 mg",
      fiber: "12 g",
    },
    tips: [
      "Do not over-blend the mixture into a paste; a slightly coarse texture keeps the inside light and fluffy.",
      "Keep the oil at a steady 180°C (350°F); too cool makes them greasy.",
      "Use dried (not canned) beans, otherwise the patties fall apart.",
      "Add a little flour or a spoonful of breadcrumbs if the mixture feels too loose to shape.",
    ],
    image: "./images/5.jpg",
  },
  {
    name: "Egyptian Fatta",
    difficulty: "Medium",
    cuisine: "Egyptian",
    desc: "Layers of crispy bread, rice and garlicky tomato-vinegar sauce topped with tender beef.",
    servings: 6,
    rating: 4.8,
    reviews: 540,
    prepTime: 30,
    cookTime: 105,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "1 kg beef cubes",
      "2 cups rice",
      "3 pita breads, torn and toasted",
      "8 garlic cloves",
      "1/4 cup white vinegar",
      "2 cups tomato sauce",
      "2 tbsp ghee",
      "1 onion",
      "Cardamom pods and bay leaf",
      "Salt and pepper",
    ],
    steps: [
      "Boil beef with onion, cardamom, bay leaf and salt for 1.5 hours until tender; keep the broth.",
      "Cook rice in some of the beef broth.",
      "Fry garlic in ghee, add vinegar and tomato sauce, then simmer 10 minutes.",
      "Spread toasted bread in a dish, soaking with a little broth.",
      "Add rice, pour over the garlic sauce and top with the beef.",
    ],
    nutrs: {
      cals: 640,
      protein: "40 g",
      fat: "24 g",
      carbs: "62 g",
      sodium: "710 mg",
      fiber: "4 g",
    },
    tips: [
      "Assemble just before serving so the bread keeps some crunch.",
      "Fry the bread in ghee instead of toasting for a richer result.",
      "Add the garlic-vinegar sauce gradually and taste as you go.",
      "Use well-toasted bread; soft bread turns mushy as soon as the sauce is added.",
    ],
    image: "./images/6.jpg",
  },
  {
    name: "Hawawshi",
    difficulty: "Medium",
    cuisine: "Egyptian",
    desc: "Baladi bread stuffed with spiced minced beef and baked until crisp.",
    servings: 4,
    rating: 4.7,
    reviews: 690,
    prepTime: 25,
    cookTime: 25,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "500 g minced beef",
      "1 onion, grated",
      "1 green bell pepper, finely chopped",
      "1/2 cup chopped parsley",
      "1 tsp cumin",
      "1 tsp paprika",
      "1 tsp black pepper",
      "Salt",
      "4 small baladi or pita breads",
      "2 tbsp butter",
    ],
    steps: [
      "Mix beef with onion, pepper, parsley, spices and salt.",
      "Cut each bread open to form a pocket.",
      "Stuff each pocket with the meat mixture and spread evenly.",
      "Brush the outside with melted butter.",
      "Bake at 200°C (390°F) for 20-25 minutes, flipping halfway, until crisp.",
    ],
    nutrs: {
      cals: 560,
      protein: "30 g",
      fat: "26 g",
      carbs: "52 g",
      sodium: "690 mg",
      fiber: "4 g",
    },
    tips: [
      "Use beef with some fat (about 15-20%) so the filling stays juicy.",
      "Spread the filling thinly and evenly so it cooks through without burning the bread.",
      "Serve hot with tahini and a fresh salad.",
      "Wrap the filled breads tightly in foil for the first 10 minutes to keep the meat juicy, then uncover to crisp.",
    ],
    image: "./images/7.jpg",
  },
  {
    name: "Classic Cheeseburger",
    difficulty: "Easy",
    cuisine: "American",
    desc: "Juicy grilled beef patty with melted cheddar, fresh veggies and toasted bun.",
    servings: 4,
    rating: 4.6,
    reviews: 1520,
    prepTime: 15,
    cookTime: 10,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "600 g ground beef (80/20)",
      "4 slices cheddar cheese",
      "4 burger buns",
      "1 tomato, sliced",
      "Lettuce leaves",
      "Pickles",
      "1 onion, sliced",
      "Ketchup and mustard",
      "Salt and pepper",
    ],
    steps: [
      "Divide beef into 4 balls and flatten into patties slightly wider than the buns.",
      "Season generously with salt and pepper.",
      "Cook on a hot grill or pan for 3-4 minutes per side.",
      "Add cheese in the last minute and cover to melt.",
      "Toast the buns and assemble with veggies and sauces.",
    ],
    nutrs: {
      cals: 620,
      protein: "36 g",
      fat: "34 g",
      carbs: "42 g",
      sodium: "890 mg",
      fiber: "3 g",
    },
    tips: [
      "Toast the buns in butter to keep them from getting soggy.",
      "Press a small dimple in the center of each patty so it cooks flat.",
      "Do not press down while cooking or the juices will escape.",
      "Let the cooked patties rest 2 minutes before assembling so the juices redistribute.",
    ],
    image: "./images/8.jpg",
  },
  {
    name: "Mac and Cheese",
    difficulty: "Easy",
    cuisine: "American",
    desc: "Creamy baked macaroni in a rich cheddar sauce with a golden crust.",
    servings: 6,
    rating: 4.7,
    reviews: 1380,
    prepTime: 15,
    cookTime: 30,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "400 g elbow macaroni",
      "3 tbsp butter",
      "3 tbsp flour",
      "3 cups milk",
      "300 g grated sharp cheddar",
      "1/2 tsp mustard powder",
      "1/2 cup breadcrumbs",
      "Salt and pepper",
    ],
    steps: [
      "Boil macaroni 2 minutes less than package directions and drain.",
      "Melt butter, whisk in flour and cook 1 minute.",
      "Slowly whisk in milk and cook until thickened.",
      "Stir in cheese, mustard powder, salt and pepper until smooth.",
      "Mix with pasta, top with breadcrumbs and bake at 190°C (375°F) for 15 minutes.",
    ],
    nutrs: {
      cals: 560,
      protein: "24 g",
      fat: "27 g",
      carbs: "54 g",
      sodium: "610 mg",
      fiber: "2 g",
    },
    tips: [
      "Grate your own cheese; pre-shredded cheese contains anti-caking agents that can make the sauce grainy.",
      "Mix in a little cream cheese for an extra creamy sauce.",
      "Undercook the pasta slightly since it keeps cooking in the oven.",
      "Reheat leftovers with a splash of milk to bring back the creaminess.",
    ],
    image: "./images/9.webp",
  },
  {
    name: "BBQ Chicken Wings",
    difficulty: "Easy",
    cuisine: "American",
    desc: "Oven-baked crispy wings glazed with sweet and smoky barbecue sauce.",
    servings: 4,
    rating: 4.8,
    reviews: 1210,
    prepTime: 15,
    cookTime: 50,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "1 kg chicken wings",
      "1 tbsp baking powder",
      "1 tsp paprika",
      "1 tsp garlic powder",
      "1 tsp salt",
      "1 cup BBQ sauce",
      "1 tbsp honey",
    ],
    steps: [
      "Pat wings very dry and toss with baking powder, paprika, garlic powder and salt.",
      "Arrange on a rack over a baking tray.",
      "Bake at 220°C (425°F) for 40-45 minutes, flipping halfway, until crisp.",
      "Mix BBQ sauce with honey and toss the hot wings in it.",
      "Return to the oven for 5 minutes to caramelize the glaze.",
    ],
    nutrs: {
      cals: 480,
      protein: "34 g",
      fat: "28 g",
      carbs: "22 g",
      sodium: "980 mg",
      fiber: "1 g",
    },
    tips: [
      "Baking powder (not baking soda) is the secret to crispy skin without frying.",
      "Pat the wings completely dry before seasoning.",
      "Add the sauce only at the end so the sugar does not burn.",
      "Let the wings rest 5 minutes after baking so the glaze sets and sticks.",
    ],
    image: "./images/10.jpeg",
  },
  {
    name: "Fluffy Pancakes",
    difficulty: "Easy",
    cuisine: "American",
    desc: "Light, golden buttermilk pancakes perfect with maple syrup.",
    servings: 4,
    rating: 4.5,
    reviews: 1670,
    prepTime: 10,
    cookTime: 15,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "1.5 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1.25 cups milk",
      "1 egg",
      "3 tbsp melted butter",
      "1 tsp vanilla",
      "Maple syrup for serving",
    ],
    steps: [
      "Whisk flour, sugar, baking powder and salt together.",
      "In another bowl, mix milk, egg, melted butter and vanilla.",
      "Combine wet and dry ingredients until just mixed; a few lumps are fine.",
      "Rest the batter for 5 minutes.",
      "Cook 1/4 cup scoops on a buttered pan over medium heat until bubbles form, then flip and cook until golden.",
    ],
    nutrs: {
      cals: 350,
      protein: "9 g",
      fat: "13 g",
      carbs: "49 g",
      sodium: "520 mg",
      fiber: "1 g",
    },
    tips: [
      "Do not overmix the batter; overmixing develops gluten and makes pancakes tough.",
      "Keep finished pancakes warm in a 90°C (200°F) oven while you cook the rest.",
      "Let the pan get properly hot, then lower to medium before the first batch.",
      "Sprinkle blueberries or chocolate chips on the batter right after pouring it into the pan so they do not sink or burn.",
    ],
    image: "./images/11.jpg",
  },
  {
    name: "Spaghetti Carbonara",
    difficulty: "Medium",
    cuisine: "Italian",
    desc: "Roman pasta with crispy pancetta, eggs, Pecorino and black pepper in a silky sauce.",
    servings: 4,
    rating: 4.7,
    reviews: 1130,
    prepTime: 10,
    cookTime: 20,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "400 g spaghetti",
      "150 g pancetta or guanciale, diced",
      "3 whole eggs + 2 yolks",
      "1 cup grated Pecorino Romano",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    steps: [
      "Cook spaghetti in salted boiling water until al dente; reserve 1 cup pasta water.",
      "Fry pancetta in a dry pan until crisp; turn off the heat.",
      "Whisk eggs, yolks, cheese and plenty of black pepper.",
      "Toss hot pasta with pancetta, off the heat.",
      "Quickly stir in the egg mixture, adding pasta water to create a creamy sauce.",
    ],
    nutrs: {
      cals: 640,
      protein: "29 g",
      fat: "27 g",
      carbs: "68 g",
      sodium: "780 mg",
      fiber: "3 g",
    },
    tips: [
      "Save the starchy pasta water; it is what makes the sauce silky.",
      "Always combine off the heat; direct heat will scramble the eggs.",
      "Never add cream in a traditional carbonara.",
      "Serve right away on warm plates; carbonara loses its silkiness as it cools.",
    ],
    image: "./images/12.jpg",
  },
  {
    name: "Margherita Pizza",
    difficulty: "Hard",
    cuisine: "Italian",
    desc: "Thin homemade crust with tomato sauce, fresh mozzarella and basil.",
    servings: 4,
    rating: 4.6,
    reviews: 820,
    prepTime: 120,
    cookTime: 10,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "500 g bread flour",
      "325 ml warm water",
      "7 g instant yeast",
      "10 g salt",
      "1 tbsp olive oil",
      "1 cup crushed tomatoes",
      "250 g fresh mozzarella",
      "Fresh basil leaves",
    ],
    steps: [
      "Mix flour, yeast, salt, water and oil; knead 10 minutes until smooth.",
      "Let the dough rise for 1.5 hours, covered, until doubled.",
      "Divide into 2 balls and stretch each into a thin round.",
      "Spread tomatoes, top with torn mozzarella.",
      "Bake at the highest oven temperature (250°C / 480°F) for 8-10 minutes; add basil after baking.",
    ],
    nutrs: {
      cals: 520,
      protein: "22 g",
      fat: "16 g",
      carbs: "72 g",
      sodium: "850 mg",
      fiber: "4 g",
    },
    tips: [
      "Preheat the baking tray or a pizza stone for at least 30 minutes for a crisp, bubbly base.",
      "Pat the mozzarella dry so the pizza does not turn watery.",
      "Let the dough rise slowly in the fridge overnight for better flavor.",
      "Stretch the dough by hand instead of using a rolling pin to keep the airy edges.",
    ],
    image: "./images/13.jpg",
  },
  {
    name: "Beef Lasagna",
    difficulty: "Hard",
    cuisine: "Italian",
    desc: "Layered pasta sheets with meat ragu, creamy bechamel and melted mozzarella.",
    servings: 8,
    rating: 4.8,
    reviews: 970,
    prepTime: 45,
    cookTime: 70,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "12 lasagna sheets",
      "500 g ground beef",
      "1 onion and 2 garlic cloves",
      "700 g tomato passata",
      "4 tbsp butter",
      "4 tbsp flour",
      "4 cups milk",
      "300 g grated mozzarella",
      "1/2 cup grated parmesan",
      "Nutmeg, salt, pepper, oregano",
    ],
    steps: [
      "Brown the beef with onion and garlic, add passata and oregano, then simmer 30 minutes.",
      "Make bechamel: melt butter, whisk in flour, then milk gradually until thick; season with nutmeg and salt.",
      "Spread a little ragu in a baking dish and add a layer of pasta.",
      "Alternate layers of ragu, bechamel, pasta and mozzarella, ending with bechamel and cheese.",
      "Bake at 180°C (350°F) for 40 minutes; rest 10 minutes before cutting.",
    ],
    nutrs: {
      cals: 560,
      protein: "30 g",
      fat: "28 g",
      carbs: "46 g",
      sodium: "720 mg",
      fiber: "3 g",
    },
    tips: [
      "Letting the lasagna rest after baking helps the layers set so slices hold their shape.",
      "Simmer the ragu longer for a deeper flavor.",
      "Cover with foil for the first 25 minutes to prevent the top from burning.",
      "Lasagna freezes very well; assemble it, wrap tightly, and bake straight from frozen with extra time.",
    ],
    image: "./images/14.webp",
  },
  {
    name: "Chicken Alfredo Pasta",
    difficulty: "Easy",
    cuisine: "Italian-American",
    desc: "Fettuccine tossed in a garlicky parmesan cream sauce with seared chicken.",
    servings: 4,
    rating: 4.6,
    reviews: 1040,
    prepTime: 10,
    cookTime: 20,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "350 g fettuccine",
      "2 chicken breasts",
      "2 tbsp butter",
      "3 garlic cloves, minced",
      "1.5 cups heavy cream",
      "1.5 cups grated parmesan",
      "1 tbsp olive oil",
      "Salt, pepper, parsley",
    ],
    steps: [
      "Boil fettuccine until al dente and drain.",
      "Season chicken and sear in olive oil 5-6 minutes per side; slice.",
      "Melt butter, saute garlic for 30 seconds, then pour in cream and simmer 3 minutes.",
      "Stir in parmesan until smooth and season.",
      "Toss pasta in the sauce, top with chicken and parsley.",
    ],
    nutrs: {
      cals: 780,
      protein: "42 g",
      fat: "42 g",
      carbs: "58 g",
      sodium: "780 mg",
      fiber: "3 g",
    },
    tips: [
      "Use freshly grated parmesan and add a splash of pasta water if the sauce becomes too thick.",
      "Pound the chicken to an even thickness so it cooks evenly.",
      "Serve immediately; the sauce thickens quickly as it cools.",
      "Add steamed broccoli or mushrooms for extra flavor and a more balanced dish.",
    ],
    image: "./images/15.jpg",
  },
  {
    name: "Chicken Shawarma",
    difficulty: "Medium",
    cuisine: "Levantine",
    desc: "Marinated spiced chicken roasted until juicy, wrapped with garlic sauce and pickles.",
    servings: 4,
    rating: 4.7,
    reviews: 880,
    prepTime: 20,
    cookTime: 30,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "800 g boneless chicken thighs",
      "1/2 cup yogurt",
      "3 tbsp lemon juice",
      "4 garlic cloves",
      "2 tsp paprika",
      "1 tsp cumin",
      "1 tsp coriander",
      "1/2 tsp cinnamon",
      "1/2 tsp turmeric",
      "2 tbsp olive oil",
      "Pita bread, pickles, garlic sauce",
    ],
    steps: [
      "Mix yogurt, lemon, garlic, spices, oil and salt for the marinade.",
      "Coat the chicken and marinate at least 4 hours or overnight.",
      "Roast at 220°C (425°F) for 25 minutes or grill until charred at the edges.",
      "Slice the chicken thinly.",
      "Serve in warm pita with garlic sauce, pickles and tomatoes.",
    ],
    nutrs: {
      cals: 480,
      protein: "38 g",
      fat: "18 g",
      carbs: "40 g",
      sodium: "820 mg",
      fiber: "3 g",
    },
    tips: [
      "Marinate overnight for the most tender and flavorful result.",
      "Chicken thighs stay much juicier than breast.",
      "For extra char, finish under the broiler for 2 minutes.",
      "Warm the pita on a dry pan or grill before wrapping for the best texture.",
    ],
    image: "./images/16.png",
  },
  {
    name: "Classic Hummus",
    difficulty: "Easy",
    cuisine: "Levantine",
    desc: "Ultra-smooth chickpea and tahini dip with lemon and garlic.",
    servings: 6,
    rating: 4.6,
    reviews: 930,
    prepTime: 10,
    cookTime: 0,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "2 cans chickpeas (400 g each), drained",
      "1/3 cup tahini",
      "3 tbsp lemon juice",
      "2 garlic cloves",
      "3-4 tbsp ice-cold water",
      "1/2 tsp cumin",
      "Salt",
      "Olive oil and paprika to garnish",
    ],
    steps: [
      "Blend tahini and lemon juice for 1 minute until pale and creamy.",
      "Add garlic, cumin and salt and blend again.",
      "Add chickpeas and blend for 2-3 minutes.",
      "With the motor running, add ice-cold water until very smooth.",
      "Serve with olive oil and paprika.",
    ],
    nutrs: {
      cals: 190,
      protein: "8 g",
      fat: "11 g",
      carbs: "17 g",
      sodium: "310 mg",
      fiber: "5 g",
    },
    tips: [
      "For the silkiest texture, peel the chickpeas or simmer them with a pinch of baking soda for 15 minutes.",
      "Use ice-cold water for a lighter, fluffier hummus.",
      "Top with whole chickpeas, olive oil and paprika for presentation.",
      "Keep hummus in an airtight container with a thin layer of olive oil on top for up to 5 days.",
    ],
    image: "./images/17.webp",
  },
  {
    name: "Tabbouleh",
    difficulty: "Easy",
    cuisine: "Lebanese",
    desc: "Fresh parsley salad with tomatoes, bulgur, mint and lemon dressing.",
    servings: 4,
    rating: 4.5,
    reviews: 460,
    prepTime: 25,
    cookTime: 0,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "3 bunches flat-leaf parsley, finely chopped",
      "1/4 cup fine bulgur",
      "4 tomatoes, diced",
      "1/2 cup fresh mint, chopped",
      "3 spring onions",
      "1/4 cup lemon juice",
      "1/4 cup olive oil",
      "Salt and black pepper",
    ],
    steps: [
      "Soak bulgur in lemon juice for 20 minutes.",
      "Finely chop parsley and mint, making sure they are completely dry.",
      "Dice tomatoes and slice spring onions.",
      "Combine everything in a large bowl.",
      "Add olive oil, salt and pepper, and toss gently.",
    ],
    nutrs: {
      cals: 170,
      protein: "4 g",
      fat: "11 g",
      carbs: "17 g",
      sodium: "190 mg",
      fiber: "5 g",
    },
    tips: [
      "Dry the herbs thoroughly and add the tomatoes at the last minute to keep the salad from getting soggy.",
      "Use a very sharp knife to avoid bruising the parsley.",
      "Serve with romaine lettuce leaves for scooping.",
      "Squeeze out excess moisture from the chopped parsley with a clean towel before mixing.",
    ],
    image: "./images/18.jpg",
  },
  {
    name: "Chicken Biryani",
    difficulty: "Hard",
    cuisine: "Indian",
    desc: "Fragrant layered basmati rice and spiced yogurt-marinated chicken cooked together.",
    servings: 6,
    rating: 4.8,
    reviews: 1090,
    prepTime: 40,
    cookTime: 70,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "1 kg chicken pieces",
      "2 cups basmati rice",
      "1 cup yogurt",
      "3 onions, sliced and fried",
      "2 tbsp ginger-garlic paste",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp chili powder",
      "Mint and cilantro",
      "Saffron soaked in 1/4 cup warm milk",
      "Ghee, whole spices, salt",
    ],
    steps: [
      "Marinate chicken in yogurt, ginger-garlic paste, spices, half the fried onions and salt for 2 hours.",
      "Parboil soaked rice with whole spices and salt until 70% cooked.",
      "Cook the chicken in a heavy pot for 15 minutes.",
      "Layer rice over chicken, then top with herbs, remaining onions, saffron milk and ghee.",
      "Seal with foil and a lid and cook on very low heat for 25 minutes; rest 10 minutes before serving.",
    ],
    nutrs: {
      cals: 610,
      protein: "37 g",
      fat: "20 g",
      carbs: "68 g",
      sodium: "760 mg",
      fiber: "3 g",
    },
    tips: [
      "Sealing the pot tightly (dum cooking) traps the steam, which is the secret to tender chicken and aromatic rice.",
      "Soak the basmati rice for 30 minutes before cooking for longer grains.",
      "Fry the onions until deep golden brown for authentic flavor.",
      "Serve with cucumber raita and a fresh salad to balance the rich spices.",
    ],
    image: "./images/19.jpg",
  },
  {
    name: "Butter Chicken",
    difficulty: "Medium",
    cuisine: "Indian",
    desc: "Tender tandoori-style chicken in a creamy, mildly spiced tomato and butter sauce.",
    servings: 4,
    rating: 4.8,
    reviews: 1410,
    prepTime: 20,
    cookTime: 40,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "700 g chicken thighs",
      "1/2 cup yogurt",
      "2 tsp garam masala",
      "1 tsp chili powder",
      "3 tbsp butter",
      "1 onion",
      "1 tbsp ginger-garlic paste",
      "1.5 cups tomato puree",
      "1/2 cup heavy cream",
      "1 tsp kasuri methi (dried fenugreek)",
      "Salt",
    ],
    steps: [
      "Marinate chicken in yogurt, half the spices and salt for 1 hour.",
      "Sear or grill the chicken until lightly charred.",
      "Saute onion in butter, add ginger-garlic paste and remaining spices.",
      "Add tomato puree and simmer for 15 minutes; blend until smooth if desired.",
      "Add chicken and cream, simmer 10 minutes, and finish with crushed kasuri methi.",
    ],
    nutrs: {
      cals: 520,
      protein: "34 g",
      fat: "34 g",
      carbs: "17 g",
      sodium: "690 mg",
      fiber: "3 g",
    },
    tips: [
      "Crushing the kasuri methi between your palms before adding releases its signature aroma.",
      "Charring the chicken first adds a smoky tandoori taste.",
      "Finish with a small knob of butter for a glossy sauce.",
      "Serve with warm naan or basmati rice to soak up the sauce.",
    ],
    image: "./images/20.jpg",
  },
  {
    name: "Chicken Fried Rice",
    difficulty: "Easy",
    cuisine: "Chinese",
    desc: "Quick wok-tossed rice with chicken, egg, vegetables and soy sauce.",
    servings: 4,
    rating: 4.5,
    reviews: 1260,
    prepTime: 10,
    cookTime: 15,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "3 cups cooked day-old rice",
      "300 g chicken breast, diced",
      "2 eggs",
      "1 cup mixed peas and carrots",
      "3 spring onions",
      "3 garlic cloves",
      "3 tbsp soy sauce",
      "1 tsp sesame oil",
      "2 tbsp vegetable oil",
    ],
    steps: [
      "Stir-fry chicken in hot oil until cooked, then remove.",
      "Scramble the eggs in the same pan and set aside.",
      "Stir-fry garlic and vegetables for 2 minutes.",
      "Add rice and fry on high heat, breaking up clumps.",
      "Return chicken and egg, add soy sauce and sesame oil, and toss with spring onions.",
    ],
    nutrs: {
      cals: 430,
      protein: "27 g",
      fat: "12 g",
      carbs: "53 g",
      sodium: "930 mg",
      fiber: "3 g",
    },
    tips: [
      "Day-old cold rice works best; fresh rice is too moist and turns mushy.",
      "Use a very hot pan and cook in small batches.",
      "Add the soy sauce around the edge of the pan for a better smoky flavor.",
      "Prep and measure all the ingredients before you start; stir-frying happens very fast.",
    ],
    image: "./images/21.webp",
  },
  {
    name: "Beef Tacos",
    difficulty: "Easy",
    cuisine: "Mexican",
    desc: "Seasoned ground beef in warm tortillas topped with fresh salsa, cheese and lime.",
    servings: 4,
    rating: 4.6,
    reviews: 1100,
    prepTime: 10,
    cookTime: 15,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "500 g ground beef",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1 tsp garlic powder",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 tomato, diced",
      "1/2 cup shredded cheese",
      "Sour cream, lime wedges, cilantro",
    ],
    steps: [
      "Brown the beef in a pan and drain excess fat.",
      "Add spices, salt and 1/4 cup water; simmer 5 minutes.",
      "Warm tortillas in a dry pan for 30 seconds per side.",
      "Fill each tortilla with beef.",
      "Top with lettuce, tomato, cheese, sour cream and a squeeze of lime.",
    ],
    nutrs: {
      cals: 460,
      protein: "28 g",
      fat: "22 g",
      carbs: "36 g",
      sodium: "720 mg",
      fiber: "4 g",
    },
    tips: [
      "Add a spoonful of tomato paste to the beef for deeper flavor and a better sauce texture.",
      "Offer fresh toppings on the side so everyone can build their own.",
      "Warm the tortillas just before serving so they stay soft.",
      "Add a little shredded cabbage or pickled onions for extra crunch and tang.",
    ],
    image: "./images/22.webp",
  },
  {
    name: "Greek Salad",
    difficulty: "Easy",
    cuisine: "Greek",
    desc: "Crisp cucumbers, tomatoes, olives and feta with oregano and olive oil.",
    servings: 4,
    rating: 4.5,
    reviews: 640,
    prepTime: 15,
    cookTime: 0,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "4 ripe tomatoes, cut in wedges",
      "1 large cucumber, sliced",
      "1 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "200 g feta cheese",
      "3 tbsp extra virgin olive oil",
      "1 tbsp red wine vinegar",
      "1 tsp dried oregano",
      "Salt",
    ],
    steps: [
      "Place tomatoes, cucumber, onion and olives in a bowl.",
      "Whisk olive oil, vinegar, oregano and a pinch of salt.",
      "Pour the dressing over the vegetables and toss gently.",
      "Place a slab of feta on top.",
      "Sprinkle with more oregano and serve immediately.",
    ],
    nutrs: {
      cals: 260,
      protein: "8 g",
      fat: "21 g",
      carbs: "12 g",
      sodium: "710 mg",
      fiber: "3 g",
    },
    tips: [
      "Add the dressing just before serving to keep the vegetables crisp.",
      "Use the ripest tomatoes you can find.",
      "Go easy on salt since the feta and olives are already salty.",
      "Chill the vegetables for 15 minutes before mixing for a crisp, refreshing salad.",
    ],
    image: "./images/23.jpg",
  },
  {
    name: "Shakshuka",
    difficulty: "Easy",
    cuisine: "Middle Eastern",
    desc: "Eggs poached in a spiced tomato and pepper sauce, perfect for brunch.",
    servings: 4,
    rating: 4.7,
    reviews: 920,
    prepTime: 10,
    cookTime: 25,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "2 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 garlic cloves",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp chili flakes",
      "1 can crushed tomatoes (800 g)",
      "6 eggs",
      "Fresh parsley",
      "Salt and pepper",
    ],
    steps: [
      "Saute onion and pepper in olive oil until soft.",
      "Add garlic and spices and cook for 1 minute.",
      "Pour in tomatoes and simmer 10 minutes until thickened.",
      "Make wells in the sauce and crack in the eggs.",
      "Cover and cook 5-7 minutes until whites are set; top with parsley and serve with bread.",
    ],
    nutrs: {
      cals: 240,
      protein: "13 g",
      fat: "14 g",
      carbs: "17 g",
      sodium: "620 mg",
      fiber: "4 g",
    },
    tips: [
      "Let the sauce thicken well before adding the eggs so it does not turn watery.",
      "Crumble feta over the top for a salty, creamy finish.",
      "Keep the yolks runny for dipping.",
      "Use a wide, shallow pan so the eggs cook evenly and are easy to serve.",
    ],
    image: "./images/24.png",
  },
  {
    name: "Chicken Teriyaki",
    difficulty: "Easy",
    cuisine: "Japanese",
    desc: "Glazed chicken thighs in a sweet and savory homemade teriyaki sauce.",
    servings: 4,
    rating: 4.6,
    reviews: 780,
    prepTime: 10,
    cookTime: 20,
    get extended() {
      return this.cookTime > 45;
    },
    ingreds: [
      "700 g boneless chicken thighs",
      "1/4 cup soy sauce",
      "1/4 cup mirin",
      "2 tbsp sugar",
      "1 tbsp grated ginger",
      "2 garlic cloves",
      "1 tbsp vegetable oil",
      "1 tsp cornstarch mixed with 1 tbsp water",
      "Sesame seeds and spring onions",
      "Steamed rice for serving",
    ],
    steps: [
      "Mix soy sauce, mirin, sugar, ginger and garlic to make the sauce.",
      "Sear chicken skin-side down in oil for 5-6 minutes, then flip and cook 4 minutes.",
      "Pour in the sauce and simmer until the chicken is cooked through.",
      "Add the cornstarch slurry and stir until the glaze thickens.",
      "Slice and serve over rice with sesame seeds and spring onions.",
    ],
    nutrs: {
      cals: 410,
      protein: "35 g",
      fat: "15 g",
      carbs: "30 g",
      sodium: "1080 mg",
      fiber: "1 g",
    },
    tips: [
      "Spoon the glaze over the chicken repeatedly while it thickens for a shiny, lacquered finish.",
      "Balance the saltiness by serving with plain steamed rice and vegetables.",
      "Sear the chicken skin-side down first for crispy skin.",
      "Double the sauce and keep the extra in the fridge to use for stir-fries and salmon.",
    ],
    image: "./images/25.webp",
  },
];

var imgSection = document.getElementById("imgSection");
var infoSection = document.getElementById("infoSection");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var nutritionGrid = document.getElementById("nutritionGrid");
var tipsList = document.getElementById("tipsList");

var lastIndex;
var showedIndexes = [];

// ! Functions

function getRandomRecipe() {
  if (showedIndexes.length === recipes.length) {
    showedIndexes = [];
  }
  var randomIndex = Math.floor(Math.random() * recipes.length);
  if (lastIndex === randomIndex || showedIndexes.includes(randomIndex)) {
    return getRandomRecipe();
  }
  console.log(randomIndex);
  lastIndex = randomIndex;
  showedIndexes.push(randomIndex);
  displayRecipe(randomIndex);
}

function displayRecipe(index) {
  var myRecipe = recipes[index];
  imgSection.innerHTML = imgContent(myRecipe);
  infoSection.innerHTML = infoContent(myRecipe);
  ingredientsList.innerHTML = ingredientsContent(myRecipe);
  instructionsList.innerHTML = instructionsContent(myRecipe);
  nutritionGrid.innerHTML = nutritionContent(myRecipe);
  tipsList.innerHTML = tipsContent(myRecipe);
  console.log(tipsList.innerHTML);
}

function imgContent(myRecipe) {
  return `
    <img class="w-100 h-100 objectcover-fit" src="${myRecipe.image}" alt="${myRecipe.name}">
    <span class="badge m-4 start-0 top-0 py-2 px-3 text-bg-light rounded-pill position-absolute">
        <i class="fa-solid fa-star fa-lg" style="color: rgb(255, 212, 59);"></i>
        <span class="rate">${myRecipe.rating}</span>
        <span class="review">(${myRecipe.reviews} reviews)</span>
    </span>
    <div class="bg-white rounded-5 shadow position-absolute bottom-0 start-0 end-0 m-4 p-3">
        <div class="row text-center">
            <div class="col-4">
                <i class="fa-solid fa-clock fa-xl mb-3" style="color: rgb(255, 104, 0);"></i>
                <div class="small text-muted">Prep Time</div><strong>${myRecipe.prepTime} min</strong>
            </div>
            <div class="col-4">
                <i class="fa-solid fa-fire-burner fa-xl mb-3" style="color: rgb(250, 44, 54);"></i>
                <div class="small text-muted">Cook Time</div><strong>${myRecipe.cookTime} min</strong>
            </div>
            <div class="col-4">
                <i class="fa-solid fa-users fa-xl mb-3" style="color: rgb(43, 127, 255);"></i>
                <div class="small text-muted">Servings</div><strong>${myRecipe.servings} people</strong>
            </div>
        </div>
    </div>
  `;
}

function infoContent(myRecipe) {
  return `
    <div class="mb-2">
        <span class="badge rounded-pill text-success fs-6 bg-success-subtle me-2">${myRecipe.difficulty}</span>
        <span class="badge rounded-pill text-primary fs-6 bg-primary-subtle">${myRecipe.cuisine}</span>
    </div>
    <div class="d-flex justify-content-between align-items-center">
        <h2 class="fw-bold">${myRecipe.name}</h2>
        <div class="d-flex gap-2">
            <button class="btn btn-warning-subtle">
                <i class="fa-solid fa-bookmark" style="color: rgb(245, 74, 0);"></i>
            </button>
            <button class="btn btn-orange-400">
                <i class="fa-solid fa-share-nodes" style="color: rgb(245, 74, 0);"></i>
            </button>
        </div>
    </div>
    <p>${myRecipe.desc}</p>
    <div class="alert alert-danger ${myRecipe.extended ? "d-flex" : "d-none"} align-items-center gap-3 border-0 border-start border-4 border-danger rounded-4 mb-4"
        role="alert">
        <i class="fa-solid fa-triangle-exclamation fa-xl" style="color: rgb(220, 55, 70);"></i>
        <div>
            <h6 class="alert-heading fw-bold mb-1">Extended Preparation Time</h6>
            <p class="mb-0 small">This recipe requires more than 45 minutes to prepare. Plan
                accordingly!</p>
        </div>
    </div>
  `;
}

function ingredientsContent(myRecipe) {
  var list = "";
  for (var i = 0; i < myRecipe.ingreds.length; i++) {
    list += `
      <li class="d-flex gap-2">
          <span class="rounded-circle text-white d-flex justify-content-center align-items-center"
              style="width: 24px; height: 24px; background-color: #FF6800;">${i + 1}</span>
          <p style="font-size: 16px;font-weight: 400;line-height: 24px;color: #364153;">
              ${myRecipe.ingreds[i]}
          </p>
      </li>
    `;
  }
  return list;
}

function instructionsContent(myRecipe) {
  var list = "";
  for (var i = 0; i < myRecipe.steps.length; i++) {
    list += `
      <li class="d-flex justify-content-start align-items-center gap-2 mb-2">
          <span class="flex-shrink-0 rounded-4 d-flex justify-content-center align-items-center" style="width: 48px; height: 48px; background-color: #FF6800;font-size: 20px;font-weight: 700;line-height:
                                                          28px;color: #fff;">${i + 1}</span>
          <p class="mb-0" style="font-size: 16px;font-weight: 400;line-height: 24px;color: #364153;">
              ${myRecipe.steps[i]}</p>
      </li>
    `;
  }
  return list;
}

function nutritionContent(myRecipe) {
  return `
    <!-- Calories -->
    <div class="col-6">
        <div class="d-flex align-items-center gap-3 p-3 bg-body-tertiary rounded-4">
            <span
                class="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning-subtle text-warning-emphasis"
                style="width:40px;height:40px">
                <i class="fa-solid fa-fire"></i>
            </span>
            <span class="text-body-secondary">Calories</span>
            <strong class="ms-auto">${myRecipe.nutrs.cals}</strong>
        </div>
    </div>

    <!-- Protein -->
    <div class="col-6">
        <div class="d-flex align-items-center gap-3 p-3 bg-body-tertiary rounded-4">
            <span class="d-inline-flex align-itemslist-center justify-content-center rounded-3 bg-primary-subtle text-primary"
                style="width:40px;height:40px">
                <i class="fa-solid fa-dumbbell"></i>
            </span>
            <span class="text-body-secondary">Protein</span>
            <strong class="ms-auto">${myRecipe.nutrs.protein}</strong>
        </div>
    </div>

    <!-- Carbohydrates -->
    <div class="col-6">
        <div class="d-flex align-items-center gap-3 p-3 bg-body-tertiary rounded-4">
            <span class="d-inline-flex align-items-center justify-content-center rounded-3 bg-warning-subtle text-warning"
                style="width:40px;height:40px">
                <i class="fa-solid fa-wheat-awn"></i>
            </span>
            <span class="text-body-secondary">Carbohydrates</span>
            <strong class="ms-auto">${myRecipe.nutrs.carbs}</strong>
        </div>
    </div>

    <!-- Fat -->
    <div class="col-6">
        <div class="d-flex align-items-center gap-3 p-3 bg-body-tertiary rounded-4">
            <span class="d-inline-flex align-items-center justify-content-center rounded-3 bg-danger-subtle text-danger"
                style="width:40px;height:40px">
                <i class="fa-solid fa-droplet"></i>
            </span>
            <span class="text-body-secondary">Fat</span>
            <strong class="ms-auto">${myRecipe.nutrs.fat}</strong>
        </div>
    </div>

    <!-- Fiber -->
    <div class="col-6">
        <div class="d-flex align-items-center gap-3 p-3 bg-body-tertiary rounded-4">
            <span class="d-inline-flex align-items-center justify-content-center rounded-3 bg-success-subtle text-success"
                style="width:40px;height:40px">
                <i class="fa-solid fa-seedling"></i>
            </span>
            <span class="text-body-secondary">Fiber</span>
            <strong class="ms-auto">${myRecipe.nutrs.fiber}</strong>
        </div>
    </div>

    <!-- Sodium -->
    <div class="col-6">
        <div class="d-flex align-items-center gap-3 p-3 bg-body-tertiary rounded-4">
            <span class="d-inline-flex align-items-center justify-content-center rounded-3 bg-danger-subtle"
                style="width:40px;height:40px;color:#d63384">
                <i class="fa-solid fa-cube"></i>
            </span>
            <span class="text-body-secondary">Sodium</span>
            <strong class="ms-auto">${myRecipe.nutrs.sodium}</strong>
        </div>
    </div>
  `;
}

function tipsContent(myRecipe) {
  var list = "";
  for (var i = 0; i < myRecipe.tips.length; i++) {
    list += `
      <div class="mb-3 d-flex align-items-center gap-3 p-3 rounded-4 border-0 border-start border-4"
          style="background:#fffbe6; border-color:#fbbf24 !important;">
          <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-white flex-shrink-0"
              style="width:22px; height:22px; background:#d97706; font-size:11px;">
              <i class="fa-solid fa-check"></i>
          </span>
          <span class="text-body-secondary">${myRecipe.tips[i]}</span>
      </div>
    `;
  }
  return list;
}

getRandomRecipe();
