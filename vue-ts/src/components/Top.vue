<template>
	<div>
		<div>
			<ChatPage />
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
// import Game from './Game.vue'
import ChatPage from '../slack_clone/ChatPage.vue'
export default defineComponent({
	name: 'Top',
	components: {
		// Game
		ChatPage
	}
})
</script>

<style>
html {
	height: 100%;
	width: 100%;
}

body {
	margin: 0;
	height: 100%;
	width: 100%;
}

h1 {
	margin: 0;
}

div {
	height: 100%;
	width: 100%;
}

</style>
