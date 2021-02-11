<template>
  <!-- <Welcome :msg="100" :user="user" :company="company" /> -->
	<Top />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Welcome, { User } from './components/Welcome.vue'

import Top from './components/Top.vue'

export default defineComponent({
  name: 'App',
  components: {
		// Welcome,
		Top
	},
	data() {
		return {
			// person: {
			// 	firstName: 'Morinaga',
			// 	lastName: 'Masahiro',
			// 	age: 24
			// } as User,
			// belong: {
			// 	firstCompany: 'Mizuho Securities',
			// 	secondCompany: 'Nexceed'
			// }
		}
	},
	computed: {
		// user(): object {
		// 	return this.person;
		// },
		// user(): User {
		// 	return this.person;
		// },
		// company(): object {
		// 	return this.belong;
		// }
	}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	height: 100%;
	width: 100%;
}
</style>
