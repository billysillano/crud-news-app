<template>
	<div class="news container py-5">
		<router-view class="py-5"/>
		<Alert v-if="alert" :value="alert"/>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState(['alert'])
	},

	components: {
		Alert: () => import('@/components/Alert')
	}
}
</script>

<style lang="scss" scoped>
.alert {
	position: fixed;
	top: 10px;
	right: 10px;
	z-index: 99999;
}
</style>