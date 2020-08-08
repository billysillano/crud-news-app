<template>
	<div id="app d-flex flex-column">
		<header class="navbar navbar-expand-sm navbar-dark navbar-fixed bg-gradient fixed-top">
			<div class="container">
				<h4 class="navbar-brand" @click="$router.push('/')" role="button">
					<img src="@/assets/logo.svg" width="20" height="20" class="d-inline-block">
					NEWS APP
				</h4>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Navigation toggle">
					<span class="navbar-toggler-icon"></span>
				</button>

				<nav class="collapse navbar-collapse justify-content-end mr-5" id="mainNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'home' }" :class="{ 'active' : $route.name === 'home'}">Home</router-link>
						</li>
						<li class="nav-item">
							<a href="/" class="nav-link">Business</a>
						</li>
						<li class="nav-item">
							<a href="/" class="nav-link">Sports</a>
						</li>
						<li class="nav-item">
							<a href="/" class="nav-link">Entertainment</a>
						</li>
						<li class="nav-item">
							<a href="/" class="nav-link">Techonology</a>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'news-list' }" :class="{ 'active' : $route.name === 'news-list'}">Admin</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<router-view class="view py-5"/>
	
		<footer class="bg-dark text-light">
			<p class="text-center m-0 py-3"><small>Billy Joey Sillano &copy; 2020</small></p>
		</footer>
	</div>
</template>

<script>
export default {
	created () {
		this.$store.dispatch('loadNewsList')
	}
}
</script>

<style lang="scss">
html, body {
	font-size: 12px;
	min-height: 100vh;
}

#app {
	height: 100%;
}

.view {
	min-height: 100vh;
	flex: 1 1 auto;
}

$primary: #9059ac;
$success: #59ac88;

@import '../node_modules/bootstrap/scss/bootstrap.scss';

.bg-gradient {
	background: linear-gradient(to right, #7b4397, #dc2430);
}
</style>
