<template>
	<div>
		<h1>じゃんけんゲーム</h1>
		<div>
			<Game />
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import Game from './Game.vue'
export default defineComponent({
	name: 'Top',
	components: {
		Game
	}
})
</script>
