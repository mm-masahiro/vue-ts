<template>
	<div>
		<form>Sign in</form>
		<input />
		<label>User ID</label>
		<input />
		<label>Password</label>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: 'SignIn',
	data() {
		return {
			user: {}
		}
	}
})
</script>
