<!-- src/App.vue -->
<template>
	<div class="app">
		<!-- Header Section -->
		<header>
			<SystemAlertGlobalNotificationBar message="🎉 Welcome to our showcase website!" />
			<nav class="navigation">
				<Tabs
					:tabs="[
						{ id: 'home', label: 'Home' },
						{ id: 'features', label: 'Features' },
						{ id: 'contact', label: 'Contact' }
					]"
					@tab-change="handleTabChange"
				/>
				<DarkModeToggle @toggle="toggleDarkMode" />
			</nav>
		</header>
  
	  <!-- Hero Section -->
	  <main>
			<section class="hero">
				<h1>Welcome to Our Platform</h1>
				<SearchBarWithSuggestions 
					:suggestions="suggestions"
					placeholder="Search our platform..."
					@search="handleSearch"
				/>
			</section>
	
			<!-- Features Section -->
			<section class="features">
				<h2>Our Features</h2>
				<div class="cards-grid">
					<CardBody v-for="feature in features" :key="feature.title">
						<CardHeader>{{ feature.title }}</CardHeader>
						<CardImage :src="feature.image" :alt="feature.title" />
						<CardFooter>
							<Button @click="handleLearnMore(feature)">Learn More</Button>
						</CardFooter>
					</CardBody>
				</div>
			</section>
  
			<!-- Stats Section -->
			<section class="stats">
				<ProgressCircle :progress="85" label="Client Satisfaction" />
				<ProgressCircle :progress="92" label="Project Completion" />
				<ProgressCircle :progress="78" label="Growth Rate" />
			</section>
	  </main>
  
	  <!-- Footer -->
	  <footer>
		<TimelineList :items="updates" />
		<Toast :message="toastMessage" v-if="showToast" />
	  </footer>
	</div>
</template>
  
<script setup lang="ts">
	import { ref } from 'vue'
	import {
		SystemAlertGlobalNotificationBar,
		Tabs,
		DarkModeToggle,
		SearchBarWithSuggestions,
		CardBody,
		CardHeader,
		CardImage,
		CardFooter,
		Button,
		ProgressCircle,
		TimelineList,
		Toast
	} from '@swarmakit/vue'
	
	const suggestions = ref(['Product A', 'Service B', 'Feature C'])
	const showToast = ref(false)
	const toastMessage = ref('')
	
	const features = ref([
		{
			title: 'Advanced Analytics',
			image: '/analytics.jpg',
			description: 'Powerful insights for your business'
		},
		{
			title: 'Cloud Storage',
			image: '/cloud.jpg',
			description: 'Secure and scalable storage solutions'
		},
		{
			title: '24/7 Support',
			image: '/support.jpg',
			description: 'Always here to help'
		}
	])
	
	const updates = ref([
		{
			id: 1,
			label: 'Platform Launch - Successfully launched our platform',
			completed: true,
		},
		{
			id: 2,
			title: 'New Features - Added exciting new features',
			completed: true,
		}
	])
	
	const handleSearch = (query: string) => {
		console.log('Searching for:', query)
	}
	
	const handleTabChange = (tab: string) => {
		console.log('Selected tab:', tab)
	}
	
	const toggleDarkMode = (isDark: boolean) => {
		// Implement dark mode logic
		document.body.classList.toggle('dark-mode', isDark)
	}
	
	const handleLearnMore = (feature: any) => {
		showToast.value = true
		toastMessage.value = `Learning more about ${feature.title}`
		setTimeout(() => {
			showToast.value = false
		}, 3000)
	}
</script>
  
<style scoped>
	.app {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}
	
	.navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
	}
	
	.hero {
		text-align: center;
		padding: 4rem 0;
	}
	
	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		padding: 2rem 0;
	}
	
	.stats {
		display: flex;
		justify-content: space-around;
		padding: 3rem 0;
	}
	
	.features {
		padding: 2rem 0;
	}
	
	footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}
	
	/* Dark mode styles */
	:global(.dark-mode) {
		background-color: #1a1a1a;
		color: #ffffff;
	}
</style>