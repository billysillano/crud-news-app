<template>
	<transition name="slide-fade">
		<div class="alert alert-dismissible text-secondary fade show" :class="`alert-${value.type}`">
			<strong>{{ value.title }}</strong> {{ value.message }}
			<button type="button" class="close" data-dismiss="alert" @click="close">&times;</button>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		value: {
			type: Object,
			default: () => ({
				type: '',
				title: '',
				message: ''
			})
		}
	},

	methods: {
		close () {
			this.$store.dispatch('closeAlert')
		}
	}
}
</script>

<style lang="scss" scoped>
.alert {
	position: fixed;
	top: 20px;
	box-shadow: 0 3px 6px rgb(109, 108, 108);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s ease;
  opacity: 1;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>