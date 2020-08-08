<template>
	<div class="home bg-dark">
		<div class="container py-5">
			<div class="row">
				<div class="col-md-4 py-2" v-for="(news, index) in newsList" :key="index">
					<div class="card mb-3 h-100" style="max-width: 540px;">
						<div class="card-body d-flex flex-column">
							<router-link :to="{ name: 'news-view', params: { id: index } }">
								<h5 class="card-title display-6">{{ news.title }}</h5>
							</router-link>
							<p class="card-text">{{ news.content | strip(100) }}</p>
							<div class="d-flex justify-content-between align-items-center mt-auto">
								<p class="card-text"><small class="text-muted">{{ news.date }}</small></p>
								<router-link class="btn btn-primary btn-sm" :to="{ name: 'news-view', params: { id: index } }">Read</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Home',
	computed: {
		...mapState([
			'newsList'
		])
	}
}
</script>
