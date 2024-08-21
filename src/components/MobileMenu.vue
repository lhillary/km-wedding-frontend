<!-- src/components/MobileMenu.vue -->
<template>
	<div class="mobile-menu" :class="{ 'is-active': isOpen }">
	  <button class="close-button" @click="$emit('close')">
		<span uk-icon="icon: close; ratio: 1.5"></span>
	  </button>
	  <nav>
		<ul class="uk-nav uk-nav-primary uk-nav-left">
		  <li><router-link to="/" @click="$emit('close')">Home</router-link></li>
		  <li><router-link to="/accommodations" @click="$emit('close')">Accommodations</router-link></li>
		  <li><router-link to="/city-guide" @click="$emit('close')">City Guide</router-link></li>
		  <li><router-link to="/agenda" @click="$emit('close')">Agenda</router-link></li>
		  <li><router-link to="/other-details" @click="$emit('close')">Other Details</router-link></li>
		</ul>
	  </nav>
	</div>
  </template>
  
  <script>
  export default {
	name: 'MobileMenu',
	props: {
	  isOpen: Boolean
	}
  }
  </script>
  
  <style lang="scss" scoped>
  .mobile-menu {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	z-index: 1000;
	display: flex;
	align-items: flex-start;
	justify-content: left;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s, visibility 0.3s;

	ul {
		margin-left: 40px;
		margin-top: 100px;
	}
  }
  
  .mobile-menu.is-active {
	opacity: 1;
	visibility: visible;
  }
  
  .close-button {
	position: absolute;
	top: 20px;
	right: 20px;
	background: none;
	border: none;
	color: #9C182F;
	font-size: 24px;
	cursor: pointer;
  }

  .close-button:focus {
	outline: none;
  }
  
  .uk-nav-primary > li > a {
	color: #9C182F;
	font-size: 24px;
	padding: 10px 0;
	font-family: 'Avenir', 'Helvetica', sans-serif;
  }
  
  .uk-nav-primary > li > a:hover {
	color: rgba(255, 255, 255, 0.7);
  }
  </style>