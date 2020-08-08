<template>
	<div>
		<h4 class="text-primary mb-3">Update News</h4>
		<NewsForm :value="news" @submit="save"/>
	</div>
</template>

<script>
import NewsForm from '@/components/NewsForm'
export default {
	beforeRouteEnter (to, from , next) {
		if (to.params.id === undefined) next({ name: 'page-not-found' })
		next()
	},

	computed: {
		id () {
			return this.$route.params.id
		},

		news () {
			if (this.id !== undefined) {
				return this.$store.getters.getNews(this.id)
			}

			return null
		}
	},

	methods: {
		save (news) {
			this.$store.dispatch('updateNews', {
				index: this.id,
				news: news
			})
		}
	},

	components: {
		NewsForm
	}
}
</script>