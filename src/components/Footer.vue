<!-- src/components/Footer.vue -->
<template>
	<footer class="site-footer">
	  <div class="footer-image">
		<img src="@/assets/images/trees.png" alt="Footer decoration">
	  </div>
	  <div class="footer-container">
		<div class="footer-content">
			<a href="#" class="uk-button uk-button-default admin-button plain-text">Admin Login</a>
			<p class="copyright">&copy; 2024 Katie & Mike. All rights reserved.</p>
		</div>
	  </div>
	</footer>
  </template>
  
  <script>
  export default {
	name: 'Footer'
  }
  </script>
  
  <style lang="scss" scoped>
  .site-footer {
	background-color: #9C182F;
	color: white;
	padding: 30px 0 20px;
	position: relative;

	.uk-button {
		border: 2px solid white;
	}
  }

  .plain-text {
	font-family: "Avenir", "Helvetica";
	font-weight: bold;
  }
  
  .footer-image {
	position: absolute;
	top: -45px;
	left: -14px;
	max-width: 350px;
  }
  
  .footer-image img {
	width: 100%;
	height: auto;
  }

  .footer-container {
	display: flex;
	margin-left: 4em;
  }

  .footer-content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
  }
  
  .copyright {
	margin: 0;
  }
  
  .admin-button {
	background-color: transparent;
	color: white;
	border: 1px solid white;
	transition: background-color 0.3s, color 0.3s;
  }
  
  .admin-button:hover {
	background-color: white;
	color: #9C182F;
  }
  
  @media (max-width: 959px) {

	.footer-container {	
		justify-content: center;
		margin: 0;
	}
	.footer-content {
		align-items: center;
	}
  }
  </style>