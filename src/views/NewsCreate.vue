<template>
	<div>
		<h4 class="text-primary mb-3">Create News</h4>
		<NewsForm @submit="save"/>
	</div>
</template>

<script>
import NewsForm from '@/components/NewsForm'
export default {
	methods: {
		save (news) {
			this.$store.dispatch('addNews', news)
		}
	},

	components: {
		NewsForm
	}
}
</script>
