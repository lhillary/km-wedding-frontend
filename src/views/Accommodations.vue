<!-- src/views/Accommodations.vue -->
<template>
	<div class="accommodations uk-flex uk-flex-column uk-flex-1">
	  <div class="uk-container uk-container-small uk-flex-1 uk-flex uk-flex-column uk-flex-center">
		<h1 class="uk-heading-medium uk-text-center">Accommodations</h1>
		<p class="uk-text-lead uk-text-center uk-margin-large-bottom">
		  Here are some great options for your stay during our wedding celebration.
		</p>
		<div class="uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match" uk-grid>
		  <div v-for="(accommodation, index) in accommodations" :key="index">
			<div class="uk-card uk-card-default uk-card-hover">
			  <div class="uk-card-media-top">
				<img :src="accommodation.image" :alt="accommodation.name">
			  </div>
			  <div class="uk-card-body uk-text-center">
				<h3 class="uk-card-title">{{ accommodation.name }}</h3>
				<p>{{ accommodation.description }}</p>
				<a :href="accommodation.link" class="uk-button uk-button-text">Learn More</a>
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
	name: 'Accommodations',
	setup() {
	  const accommodations = ref([
		{
		  name: 'Radisson Plaza Hotel',
		  imagePath: new URL('/src/assets/images/radisson.jpg', import.meta.url).href,
		  description: 'Located at Kalamazoo Center, this hotel is within walking distance of top area highlights. The bride and groom will be staying here.',
		  link: 'https://radissonkzoo.com/'
		},
		{
		  name: 'Hilton Garden Inn',
		  imagePath: new URL('/src/assets/images/hilton.jpg', import.meta.url).href,
		  description: 'Located in downtown Kalamazoo, this hotel is less than a mile from lots of local shops, great restaurants, parks, and entertainment.',
		  link: 'https://www.hilton.com/en/hotels/azonegi-hilton-garden-inn-kalamazoo-downtown/'
		},
		{
		  name: 'Home2 Suites by Hilton',
		  imagePath: new URL('/src/assets/images/home2.jpg', import.meta.url).href,
		  description: 'Stay in the heart of the city with this hotel. It is less than a mile from top area highlights.',
		  link: 'https://www.hilton.com/en/hotels/azokdht-home2-suites-kalamazoo-downtown/'
		},
		{
		  name: 'Staybridge Suites',
		  imagePath: new URL('/src/assets/images/staybridge.jpg', import.meta.url).href,
		  description: 'Conveniently located near the best attractions, including Miller Auditorium, Kalamazoo Civic Theatre and the Wings Stadium.',
		  link: 'https://www.ihg.com/staybridge/hotels/us/en/kalamazoo/azosb/hoteldetail'
		}
	  ])
  
	  onMounted(() => {
		accommodations.value.forEach(accommodation => {
			accommodation.image = accommodation.imagePath
		})
      })
  
	  return {
		accommodations
	  }
	}
  }
  </script>
  
  <style lang="scss" scoped>
  .accommodations {
	padding: 0px 0;
  }
  
  .uk-card-title {
	font-family: 'Cormorant Garamond', serif;
	font-weight: 600;
  }
  
  .uk-button-text {
	font-family: 'Cormorant Garamond', serif;
	text-transform: uppercase;
	font-size: 0.9rem;
	font-weight: 600;
  }
  </style>