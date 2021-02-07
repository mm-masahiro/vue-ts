<template>
  <Welcome :msg="100" :user="user" :company="company" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from './components/Welcome.vue'

export default defineComponent({
  name: 'App',
  components: {
		Welcome
	},
	data() {
		return {
			person: {
				firstName: 'Morinaga',
				lastName: 'Masahiro',
				age: 24
			},
			belong: {
				firstCompany: 'Mizuho Securities',
				secondCompany: 'Nexceed'
			}
		}
	},
	computed: {
		user(): object {
			return this.person;
		},
		company(): object {
			return this.belong;
		}
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
  margin-top: 60px;
}
</style>
