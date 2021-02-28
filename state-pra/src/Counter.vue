<template>
	<div>
		<p>{{ name }}</p>
		<p>Count: {{ count }}</p>
		<button @click="increment">+1</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Counter',
	props: {
		name: String,
		initCount: Number
	},
	data() {
		return {
			count: this.initCount
		}
	},
	methods: {
		increment() {
			this.count ++;
			this.$emit("emitup", {name: this.name, counted: this.count})
		}
	}
})
</script>
