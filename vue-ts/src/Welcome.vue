<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Welcome',
	data() {
		return {
			msg: 'Hello, TypeScript',
		}
	},
	computed: {
		getLength(): number {
			return this.msg.length
		}
	},
	methods: {
		changeMsg() {
			return this.msg = 3
		}
	}
})
</script>
