<!-- src/views/Agenda.vue -->
<template>
	<div class="agenda uk-flex uk-flex-column uk-flex-1">
	  <div class="uk-container uk-container-small uk-flex-1 uk-flex uk-flex-column">
		<h1 class="uk-heading-medium uk-text-center">Agenda</h1>
		<p class="uk-text-lead uk-text-center uk-margin-medium-bottom">
		  Here's the timeline of events for our wedding celebration.
		</p>
		
		<div class="event-section">
		  <h2 class="uk-heading-small">Rehearsal Dinner</h2>
		  <div class="uk-text-lead">Wednesday, September 11, 2024</div>
		  <hr class="uk-divider-small">
		  <ul class="uk-list uk-list-large">
			<li><strong>Where:</strong> The Darrah Residence</li>
			<li><strong>Address:</strong> 8516 W RS Ave. Schoolcraft MI</li>
			<li><strong>Time:</strong> 7:00 PM</li>
			<li><strong>What to Expect:</strong>
			  <ul>
				<li>Dinner immediately following the rehearsal</li>
				<li>After party with snacks and drinks</li>
			  </ul>
			</li>
		  </ul>
		</div>
  
		<div class="event-section">
		  <h2 class="uk-heading-small">Wedding Day</h2>
		  <div class="uk-text-lead">Thursday, September 12, 2024</div>
		  <hr class="uk-divider-small">
		  <ul class="uk-list uk-list-large">
			<li><strong>Ceremony:</strong> The Darrah Residence, 1:00 PM - 1:30 PM</li>
			<li><strong>Celebration:</strong> With the bride and groom, 1:30 PM - 2:30 PM</li>
			<li><strong>Party Bus:</strong> Everyone welcome! 2:30 PM - 6:00 PM</li>
			<li><strong>Dinner:</strong> Beer & Dinner at Bell's Brewery, 6:00 PM - 9:00 PM</li>
			<li><strong>After Party:</strong> Bar hop in downtown Kalamazoo</li>
		  </ul>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'Agenda'
  }
  </script>
  
  <style lang="scss" scoped>
  .agenda {
	padding: 0px 0;
  }
  
  .event-section {
	margin-bottom: 60px;
	
	h2 {
	  color: #9C182F;
	  margin-bottom: 10px;
	  text-align: center;
	}
  
	.uk-text-lead {
	  font-weight: 600;
	  margin-bottom: 15px;
	  text-align: center;
	}
  
	.uk-divider-small {
	  border-top: 3px solid #9C182F;
	  max-width: 100px;
	  margin: 15px auto;
	}
  
	.uk-list-large > li {
	  padding: 15px 0;
	  font-size: 1.2rem;
	}
  
	strong {
	  color: #9C182F;
	  font-weight: 600;
	}
  }
  
  .uk-list ul {
	padding-left: 30px;
	list-style-type: disc;

	li {
		list-style: none;
	}
  }
  </style>