<!-- src/views/Home.vue -->
<template>
	<div class="home uk-flex uk-flex-column uk-flex-1">
	  <div class="uk-container">
		<div class="uk-text-center">
			<div class="couples-photo">
				<img src="@/assets/images/couple.jpg" alt="Happy Couple">
			</div>
		</div>
	  </div>
	  <div class="uk-container-small uk-container uk-flex-1 uk-flex uk-flex-column uk-flex-center main-content">
		<div class="uk-text-center">
		  
		  <h2 class="uk-heading-small uk-margin-remove-bottom custom-font">Please join us for our wedding celebration on</h2>
		  <h1 class="uk-heading-medium uk-margin-remove-top">September 12, 2024</h1>
		  <h2 class="custom-font-2">M</h2>

		  <Countdown :targetDate="weddingDate" />

		  <img src="@/assets/images/trees-2.png" alt="Illustration" class="uk-width-1-3@m uk-margin-medium-top uk-margin-medium-bottom small-illu">
		  <h2 class="uk-heading-small last-heading">Our Story</h2>
		  <p class="uk-text-lead">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		  </p>
		  <p class="uk-text-lead">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		  </p>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import Countdown from '@/components/Countdown.vue'
  import { ref } from 'vue';

  export default {
	name: 'Home',
	components: {
    Countdown
  },
  setup() {
    const weddingDate = ref(new Date('2024-09-12T16:00:00'));

    return {
      weddingDate,
    }
  }
  }
  </script>
  
  <style lang="scss" scoped>
  .home {
	padding: 0;
  }

  .couples-photo {
	position: relative;
	display: inline-block;
	max-width: 90%;
	box-sizing: border-box;
	margin-bottom: 3em;
	width: 100%;
  }
  
  .couples-photo img {
	width: 100%;
	border: 10px solid white; 
	box-shadow: 
	  inset 0 0 0 2px rgba(0,0,0,0.1), 
	  0 0 0 1px rgba(0,0,0,0.1); 
	box-sizing: border-box;
  }

  .couples-photo::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	box-shadow: 0 5px 15px rgba(0,0,0,0.1);
	pointer-events: none; /* Ensures the shadow doesn't interfere with interactions */
  }

  .uk-container {
	padding: 0;
  }

  .main-content {
	padding-left: 1em;
	padding-right: 1em;
  }
  
  .uk-heading-small {
	font-weight: 300;
	font-size: 2.3rem;
	margin-top: 0;
  }

  .last-heading {
	margin-top: 1em;
  }
  
  .uk-heading-medium {
	font-weight: 300;
	font-size: 3rem;
  }
  
  .uk-text-lead {
	font-size: 1.2rem;
	line-height: 1.8;
  }

  .small-illu {
	width: 100%;
	max-width: 130px;
	margin:0 !important;
  }
  </style>