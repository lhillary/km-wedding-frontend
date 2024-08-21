<!-- src/views/OtherDetails.vue -->
<template>
	<div class="other-details uk-flex uk-flex-column uk-flex-1">
	  <div class="uk-container uk-container-small uk-flex-1 uk-flex uk-flex-column uk-flex-center">
		<h1 class="uk-heading-medium uk-text-center">Other Details</h1>
		<p class="uk-text-lead uk-text-center uk-margin-large-bottom">
			All other information about our celebration that we could remember!
		</p>
		<div class="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-match" uk-grid>
		  <div v-for="(detail, index) in details" :key="index">
			  <div class="uk-card uk-card-default uk-card-body uk-text-center">
				<h3 class="uk-card-title">{{ detail.title }}</h3>
				<p>{{ detail.details }}</p>
			  </div>
			</div>
		  </div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'OtherDetails',
	data() {
	  return {
		details: [
		  {
			title: 'Plus Ones',
			details: 'We\'re delighted to extend a warm welcome to you and a guest of your choosing to join us in celebrating our special day.'
		  },
		  {
			title: 'Children',
			details: 'To allow all guests to relax and enjoy the evening, we have planned an adult-only celebration.'
		  },
		  {
			title: 'Dress',
			details: 'We invite you to dress in smart casual attire - think comfortable yet polished, like pressed slacks or a sundress - perfect for a day of celebration and fun.'
		  },
		  {
			title: 'Gifts',
			details: 'While your presence is the greatest gift, for those who have asked, we would be honored by a contribution towards our future together in lieu of traditional presents.'
		  },
		  {
			title: 'Locations',
			details: 'We\'re excited to host our ceremony under the open sky, followed by dinner in the comfort of an indoor setting, so please dress accordingly for both environments.'
		  },
		  {
			title: 'Contact',
			details: 'If you need any clarification or have questions about our celebration, please don\'t hesitate to reach out to Katie or Mike directly by phone – we\'re happy to help!'
		  }
		]
	  }
	}
  }
  </script>
  
  <style lang="scss" scoped>
  .other-details {
	padding: 0px 0;
  }

  .uk-card-title {
	font-family: 'Cormorant Garamond', serif;
	font-weight: 600;
  }
  </style>