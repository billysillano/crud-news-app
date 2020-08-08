import Vue from 'vue'

Vue.filter('strip', (val, length) => {
	if (!val) return '--'
	return val.length > length ? `${val.slice(0, length)}...` : val
})

Vue.filter('toLocaleString', (val) => {
	return new Date(val).toLocaleString('en-us', {
		dateStyle: 'medium',
		timeStyle: 'short'
	})
})