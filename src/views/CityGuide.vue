<!-- src/views/CityGuide.vue -->
<template>
	<div class="city-guide uk-flex uk-flex-column uk-flex-1">
	  <div class="uk-container uk-container-small uk-flex-1 uk-flex uk-flex-column uk-flex-center">
		<h1 class="uk-heading-medium uk-text-center">City Guide</h1>
		<p class="uk-text-lead uk-text-center uk-margin-large-bottom">
		  Looking for something fun?!?! Here are some of our favorite places! 
		</p>
		<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match" uk-grid>
		  <div v-for="(place, index) in places" :key="index">
			<div class="uk-card uk-card-default uk-card-hover">
			  <div class="uk-card-media-top">
				<img :src="place.image" :alt="place.name">
			  </div>
			  <div class="uk-card-body uk-text-center">
				<h3 class="uk-card-title uk-margin-remove-bottom">{{ place.category }}</h3>
				<h4 class="uk-text-muted uk-margin-small-top uk-margin-small-bottom">{{ place.name }}</h4>
				<p>{{ place.description }}</p>
				<a :href="place.link" class="uk-button uk-button-text">Learn More</a>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
	name: 'CityGuide',
	setup() {
	  const places = ref([
		{
			category: 'Coffee',
			imagePath: '/src/assets/images/water-street.jpg',
			name: 'Water Street Coffee',
			description: 'A local favorite offering artisanal coffee and a cozy atmosphere perfect for both quick stops and leisurely sips.',
			link: '#'
		},
		{
			category: 'Breakfast',
			imagePath: '/src/assets/images/crows-nest.jpg',
			name: "Crow's Nest",
			description: 'Start your day right with hearty breakfast options and a charming ambiance at this beloved local eatery.',
			link: '#'
		},
		{
			category: 'Lunch',
			imagePath: '/src/assets/images/hopcat.jpg',
			name: 'Hop Cat',
			description: 'Enjoy a diverse menu of craft beers and delicious pub fare in a lively, casual setting.',
			link: '#'
		},
		{
			category: 'Dinner',
			imagePath: '/src/assets/images/texas-corners.jpeg',
			name: 'Texas Corners Brewing Company',
			description: 'Experience farm-to-table dining with a twist, featuring house-brewed beers and locally-sourced ingredients.',
			link: '#'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: '/src/assets/images/one-well.jpg',
			name: 'One Well Brewing',
			description: 'Unwind with unique craft beers and tasty bar snacks in a fun, laid-back brewery atmosphere.',
			link: '#'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: '/src/assets/images/grazing-table.jpeg',
			name: 'The Grazing Table',
			description: 'Indulge in artisanal cheese boards and carefully curated wine selections in an intimate, stylish setting.',
			link: '#'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: '/src/assets/images/stamped-robin.jpeg',
			name: 'The Stamped Robin',
			description: 'Sip on expertly crafted cocktails and enjoy light bites in this trendy, modern wine and cocktail lounge.',
			link: '#'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: '/src/assets/images/waldos.webp',
			name: "Waldo's",
			description: 'A classic campus hangout offering a wide range of drinks and satisfying pub grub in a relaxed environment.',
			link: '#'
		},
		{
			category: 'Dessert',
			imagePath: '/src/assets/images/sweetwaters.jpg',
			name: "Sweetwater's Donut Mill",
			description: 'Satisfy your sweet tooth with an array of freshly made, mouth-watering donuts and pastries.',
			link: '#'
		}
	  ])
  
	  onMounted(async () => {
		for (const place of places.value) {
		  place.image = (await import(/* @vite-ignore */ place.imagePath)).default
		}
	  })
  
	  return {
		places
	  }
	}
  }
  </script>
  
  <style lang="scss" scoped>
.city-guide {
  padding: 0px 0;

  p {
	margin-top: 0;
  }
}

.uk-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  color: #9C182F;
}

h4 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: 1.1rem;
}

.uk-button-text {
  font-family: 'Cormorant Garamond', serif;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
}

.uk-card-body {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 30px;
}

.uk-card-media-top {
	height: 200px;
	overflow: hidden; 
  }
  
.uk-card-media-top img {
	width: 100%;
	height: 100%;
	object-fit: cover; 
	object-position: center;
}
</style>