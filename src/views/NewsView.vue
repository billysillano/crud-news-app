<template>
	<div class="news-view">
		<div class="jumbotron p-5" v-if="news">
			<h1 class="display-4 mb-3">{{ news.title }}</h1>
			<p class="text-muted">{{ news.date | toLocaleString }}</p>
			<hr class="my-3">
			<p class="lead news-content">{{ news.content }}</p>
		</div>

		<div class="container text-center mt-5" v-else>
			<h4 class="lead">News not found</h4>
		</div>
	</div>
</template>

<script>
export default {
	beforeRouteEnter (to, from , next) {
		if (to.params.id === undefined) next({ name: 'page-not-found' })
		next()
	},

	computed: {
		news () {
			const id = this.$route.params.id
			if (id !== undefined) {
				return this.$store.getters.getNews(id)
			}

			return null
		}
	}
}
</script>

<style lang="scss" scoped>
.news-content {
	white-space: pre-wrap;
}
</style>
