<template>
  <div class="news-list">
	<div class="d-flex justify-content-between align-items-center mb-2">
		<h4 class="text-primary">News List</h4>
		<router-link
			class="btn btn-primary btn-sm mb-2"
			:to="{name: 'news-create' }"
			role="button"
		>
			Create new
		</router-link>
	</div>
	<table class="table mb-5 text-secondary">
		<thead>
			<tr>
			<th
				v-for="({ name, text }) in fields"
				:key="name"
			>
				{{ text }}
			</th>
			<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="(item, index) in newsList"
				:key="index"
			>
				<td>{{ item.date | toLocaleString }}</td>
				<td>{{ item.title | strip(30) }}</td>
				<td>{{ item.content | strip(75) }}</td>
				<td class="controls d-flex align-items-center justify-content-between">
					<a class="ml-1" role="button" @click.stop="view(index)">View</a>
					<a class="ml-1" role="button" @click.stop="edit(index)">Edit</a>
					<a class="ml-1" role="button" @click.stop="remove(index)">Delete</a>
				</td>
			</tr>
		</tbody>
	</table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
	return {
		fields: [
			{ name: 'publishedAt', text: 'Date'},
			{ name: 'title', text: 'Title'},
			{ name: 'content', text: 'Content'}
		]
	}
  },

  computed: {
	...mapState([
		'newsList'
	])
  },

  methods: {
	view (index) {
		this.$router.push({ name: 'news-view', params: { id: index }})
	},

	edit (index) {
		this.$router.push({ name: 'news-update', params: { id: index }})
	},

	remove (index) {
		this.$store.dispatch('removeNews', index)
	}
  }
}
</script>
