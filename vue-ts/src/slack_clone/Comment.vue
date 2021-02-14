<template>
	<div class="comment">
		<input class="comment--input" />
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: 'Comment'
})
</script>

<style>

.comment {
	height: 15%;
}

.comment--input {
	height: 70%;
	width: 80%;
	text-align: center;
	margin: auto;
}

</style>
