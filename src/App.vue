<!-- src/App.vue -->
<template>
	<div id="app" class="uk-height-1-1 uk-flex uk-flex-column">
	  <header :class="{ 'home-header': isHomePage, 'other-header': !isHomePage }">
		<div v-if="isHomePage" class="uk-text-center">
		  <h1 class="uk-heading-small custom-font">{{ brideName }}</h1>
		  <h1 class="uk-heading-small custom-font">&</h1>
		  <h1 class="uk-heading-small custom-font neg-margin">{{ groomName }}</h1>
		  <img src="@/assets/images/trees.png" alt="Illustration" class="header-illustration">
		</div>
		<div v-else class="uk-flex uk-flex-center uk-flex-middle">
		  <h2 class="uk-margin-remove custom-font">{{ brideName }}</h2>
		  <img src="@/assets/images/trees-2.png" alt="Illustration" class="header-illustration-small uk-margin-left uk-margin-right">
		  <h2 class="uk-margin-remove custom-font">{{ groomName }}</h2>
		</div>
		<nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
		  <div class="uk-navbar-center uk-visible@s">
			<ul class="uk-navbar-nav">
			  <li><router-link to="/">Home</router-link></li>
			  <li><router-link to="/accommodations">Accommodations</router-link></li>
			  <li><router-link to="/city-guide">City Guide</router-link></li>
			  <li><router-link to="/agenda">Agenda</router-link></li>
			  <li><router-link to="/other-details">Other Details</router-link></li>
			</ul>
		  </div>
		  <div class="uk-navbar-left uk-hidden@s">
			<button class="hamburger-menu" @click="toggleMobileMenu">
			  <span uk-icon="icon: menu; ratio: 1.2"></span>
			  MENU
			</button>
		  </div>
		</nav>
	  </header>
	  <main class="main uk-flex-1">
		<router-view></router-view>
	  </main>
	  <Footer />
	  <MobileMenu :isOpen="isMobileMenuOpen" @close="closeMobileMenu" />
	</div>
  </template>
  
  <script>
  import Footer from '@/components/Footer.vue'
  import MobileMenu from '@/components/MobileMenu.vue'

  export default {
	name: 'App',
	components: {
    	Footer,
		MobileMenu,
  	},
	data() {
	  return {
		brideName: 'Katie',
		groomName: 'Mike',
		isMobileMenuOpen: false
	  }
	},
	computed: {
	  isHomePage() {
		return this.$route.path === '/'
	  }
	},
	methods: {
		toggleMobileMenu() {
			this.isMobileMenuOpen = !this.isMobileMenuOpen;
		},
		closeMobileMenu() {
			this.isMobileMenuOpen = false;
		}
	}
  }
  </script>
  
  <style lang="scss">
  #app {
	min-height: 100vh;
	min-width: 100vw;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
  }

  .home-header {
	.uk-heading-small {
		margin: 0;
	}
  }
  
  /* Header Styles */
  .home-header {
	padding: 2rem 0 0;
  }
  
  .other-header {
	padding: 1rem 0 0;

	.uk-flex {
		flex-wrap: wrap;
		justify-content: center;
	}

	.header-illustration-small {
		width: 80px; 
		max-width: 15vw;
		height: auto; 
		margin: 0 10px; 
	}
  }
  
  .header-illustration {
	width: 100%;
	max-width: 800px;
	margin: 0 0;
  }
  
  .header-illustration-small {
	width: 80px;
  }

  .main {
	margin-bottom: 8em;
  }
  
  /* Navigation Styles */
  .uk-navbar-container {
	min-height: 60px;
	margin-bottom: 1em;
  }
  
  .uk-navbar-center {
	display: flex;
	align-items: center;
	height: 100%;
  }
  
  .uk-navbar-nav {
	height: 100%;
  }
  
  .uk-navbar-nav > li {
	display: flex;
	align-items: center;
  }
  
  .uk-navbar-nav > li > a {
	font-family: 'Avenir', 'Helvetica', sans-serif !important;
	color: #9C182F !important;
	text-transform: uppercase;
	font-size: 0.9rem !important;
	font-weight: 600;
	padding: 0 15px;
	height: 100%;
	display: flex;
	align-items: center;
  }

  .hamburger-menu {
	background: none;
	border: none;
	color: #333;
	font-size: 1rem;
	font-weight: 700 !important;
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 10px;
	margin-left: 20px;
  }

  .hamburger-menu:focus {
	outline: none;
  }
  
  .hamburger-menu span {
	margin-right: 5px;
  }
  
  /* Main Content Styles */
  main {
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
  }
  
  .uk-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
  }
  
  /* Footer Styles */
  footer {
	flex-shrink: 0;
  }
  </style>