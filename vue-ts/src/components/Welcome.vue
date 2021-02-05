<template>
	<div class="hello">
		<!-- <h1>{{ book.title }} / {{ book.author }} / {{ book.year }}</h1> -->
		<h1>{{ msg }}</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
	name: 'Welcome',
	props: {
		msg: {
			type: String as PropType<string>,
		}
	},
	data() {
		return {
			book: {
				title: 'Vue & TS',
				author: 'Masahiro',
				year: 2021
			} as Book
		}
	},
	methods: {

	},
	computed: {

	},
});

interface Book {
	title: string;
	author: string;
	year: number;
}
</script>
