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
			imagePath: new URL('@/assets/images/water-street.jpg', import.meta.url).href,
			name: 'Water Street Coffee',
			description: 'A local favorite offering artisanal coffee and a cozy atmosphere perfect for both quick stops and leisurely sips.',
			link: 'https://waterstreetcoffee.com/'
		},
		{
			category: 'Breakfast',
			imagePath: new URL('@/assets/images/crows-nest.jpg', import.meta.url).href,
			name: "Crow's Nest",
			description: 'Start your day right with hearty breakfast options and a charming ambiance at this beloved local eatery.',
			link: 'https://crowsnestkalamazoo.com/'
		},
		{
			category: 'Lunch',
			imagePath: new URL('@/assets/images/hopcat.jpg', import.meta.url).href,
			name: 'Hop Cat',
			description: 'Enjoy a diverse menu of craft beers and delicious pub fare in a lively, casual setting.',
			link: 'https://www.hopcat.com/kalamazoo/home'
		},
		{
			category: 'Dinner',
			imagePath: new URL('@/assets/images/texas-corners.jpeg', import.meta.url).href,
			name: 'Texas Corners Brewing Company',
			description: 'Experience farm-to-table dining with a twist, featuring house-brewed beers and locally-sourced ingredients.',
			link: 'https://www.texascornersbrewing.com/'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: new URL('@/assets/images/one-well.jpg', import.meta.url).href,
			name: 'One Well Brewing',
			description: 'Unwind with unique craft beers and tasty bar snacks in a fun, laid-back brewery atmosphere.',
			link: 'https://www.onewellbrewing.com/'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: new URL('@/assets/images/grazing-table.jpeg', import.meta.url).href,
			name: 'The Grazing Table',
			description: 'Indulge in artisanal cheese boards and carefully curated wine selections in an intimate, stylish setting.',
			link: 'https://www.thegrazingtablekalamazoo.com/'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: new URL('@/assets/images/stamped-robin.jpeg', import.meta.url).href,
			name: 'The Stamped Robin',
			description: 'Sip on expertly crafted cocktails and enjoy light bites in this trendy, modern wine and cocktail lounge.',
			link: 'https://stampedrobin.com/'
		},
		{
			category: 'Drinks and Snacks',
			imagePath: new URL('@/assets/images/waldos.webp', import.meta.url).href,
			name: "Waldo's",
			description: 'A classic campus hangout offering a wide range of drinks and satisfying pub grub in a relaxed environment.',
			link: 'https://www.facebook.com/waldosgobroncos'
		},
		{
			category: 'Dessert',
			imagePath: new URL('@/assets/images/sweetwaters.jpg', import.meta.url).href,
			name: "Sweetwater's Donut Mill",
			description: 'Satisfy your sweet tooth with an array of freshly made, mouth-watering donuts and pastries.',
			link: 'https://sweetwatersdonuts.com/'
		}
	  ])
  
	  onMounted(() => {
		places.value.forEach(place => {
			place.image = place.imagePath
		})
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