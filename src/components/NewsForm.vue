<template>
	<form @submit.prevent="submit">
		<div class="form-group">
			<label for="newsTitle">Title</label>
			<input
				type="text"
				class="form-control"
				id="newsTitle"
				placeholder="Enter news title"
				maxlength="80"
				required
				v-model="news.title"
			>
		</div>
		<div class="form-group">
			<label for="newsContent">Content</label>
			<textarea
				class="form-control"
				id="newsContent"
				rows="15"
				placeholder="Enter news content"
				required
				v-model="news.content"
			></textarea>
		</div>
		<div class="d-flex justify-content-end">
			<button
				type="button"
				class="btn btn-primary ml-auto mr-2"
				@click="$router.push({ name: 'news-list' })"
			>
				Cancel
			</button>
			<button
				type="submit"
				class="btn btn-primary"
			>
				Submit
			</button>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		value: {
			type: Object,
			default: () => ({
				title: '',
				content: ''
			})
		}
	},

	created () {
		this.news = {...this.value}
	},

	data () {
		return {
			news: {
				title: '',
				content: ''
			}
		}
	},

	methods: {
		submit () {
			this.$emit('submit', this.news)
			this.$router.push({ name: 'news-list' })
		}
	}
}
</script>