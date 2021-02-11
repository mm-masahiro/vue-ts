<template>
	<div class="top">
		<div class="top--components">
			<!-- <ChatPage /> -->
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
// import Vue, { defineComponent } from 'vue'
import { defineComponent } from 'vue'
// import Game from './Game.vue'
// import ChatPage from '../slack_clone/ChatPage.vue'
export default defineComponent({
	name: 'Top',
	// components: {
	// 	ChatPage
	// }
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

.top {
	height: 100%;
	width: 100%;
}

.top--components {
	height: 100%;
	width: 100%;
}

</style>
