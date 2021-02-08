<template>
	<div class="slack-clone">
		<div class="slack-clone--header">検索</div>
		<div class="slack-clone--main">
			<div class="slack-clone--main__channel">チャンネル</div>
			<div class="slack-clone--main__chat">チャットスペース</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: 'ChatPage'
})
</script>

<style>
.slack-clone {
	width: 100%;
	height: 100%;
}

.slack-clone--header {
	height: 5%;
	background: red;
}

.slack-clone--main {
	height: 95%;
	display: flex;
	flex-direction: row;
}

.slack-clone--main__channel {
	width: 20%;
	background: burlywood;
}

.slack-clone--main__chat {
	width: 80%;
	background: cornflowerblue;
}

</style>
