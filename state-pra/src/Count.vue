<template>
	<div>
		<Counter name="Counter 1" :initCount="5" @emitUp="getEvent()" />
		<Counter name="Counter 2" :initCount="10" @emitUp="getEvent()" />
		<p>{{ count }}</p>
		<p>{{ globalCount }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Counter from "./Counter.vue"
import { mapState } from 'vuex'

export default defineComponent({
	name: 'Count',
	components: {
		Counter
	},
	data() {
		return {

		}
	},
	methods: {
		getEvent() {
			this.$store.commit("globalIncrement")
		}
	},
	computed: {
		count() {
			return this.$store.state.globalCount
		},
		...mapState(['globalCount'])
	}
})
</script>
