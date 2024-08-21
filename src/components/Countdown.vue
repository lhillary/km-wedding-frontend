<!-- src/components/Countdown.vue -->
<template>
	<div class="countdown uk-text-center">
	  <div class="uk-grid-small uk-child-width-auto uk-flex-center" uk-grid>
		<div>
		  <div class="countdown-card uk-card uk-card-defailt uk-card-body uk-box-shadow-medium">
			<div class="uk-countdown-number">{{ days }}</div>
		  	<div class="uk-countdown-label uk-margin-small uk-text-center">Days</div>
		  </div>
		</div>
		<div>
		  <div class="countdown-card uk-card uk-card-defailt uk-card-body uk-box-shadow-medium">
			<div class="uk-countdown-number">{{ hours }}</div>
			<div class="uk-countdown-label uk-margin-small uk-text-center">Hours</div>
		  </div>
		</div>
		<div>
		  <div class="countdown-card uk-card uk-card-defailt uk-card-body uk-box-shadow-medium">
			<div class="uk-countdown-number">{{ minutes }}</div>
			<div class="uk-countdown-label uk-margin-small uk-text-center">Minutes</div>
		  </div>
		</div>
		<div>
		  <div class="countdown-card uk-card uk-card-defailt uk-card-body uk-box-shadow-medium">
			<div class="uk-countdown-number">{{ seconds }}</div>
			<div class="uk-countdown-label uk-margin-small uk-text-center">Seconds</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  export default {
	name: 'Countdown',
	props: {
	  targetDate: {
		type: Date,
		required: true
	  }
	},
	setup(props) {
	  const days = ref(0)
	  const hours = ref(0)
	  const minutes = ref(0)
	  const seconds = ref(0)
	  const timeDifference = ref(0)
  
	  let interval
  
	  const calculateTimeLeft = () => {
		const now = new Date()
		const difference = +props.targetDate - +now
		timeDifference.value = difference
  
		if (difference > 0) {
		  days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
		  hours.value = Math.floor((difference / (1000 * 60 * 60)) % 24)
		  minutes.value = Math.floor((difference / 1000 / 60) % 60)
		  seconds.value = Math.floor((difference / 1000) % 60)
		} else {
		  days.value = 0
		  hours.value = 0
		  minutes.value = 0
		  seconds.value = 0
		}
	  }
  
	  onMounted(() => {
		calculateTimeLeft()
		interval = setInterval(calculateTimeLeft, 1000)
	  })
  
	  onUnmounted(() => {
		clearInterval(interval)
	  })
  
	  return { days, hours, minutes, seconds, timeDifference }
	}
  }
  </script>
  
  <style scoped>
  .countdown {
	margin: 2rem 0;
	font-family: 'Avenir', 'Helvetica', sans-serif;
  }

  .countdown-card {
	width: 120px;
	height: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	transition: all 0.3s ease;
  }
  
  .countdown-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  .uk-countdown-number {
	font-size: 2rem;
	font-weight: bold;
  }
  
  .uk-countdown-label {
	font-size: 0.875rem;
	font-weight: 400;
	text-transform: uppercase;
	color: #9C182F;
  }
  
  .debug-info {
	margin-top: 1rem;
	font-size: 0.8rem;
	color: #666;
  }
  </style>