<template>
	<div class="slack-clone">
		<div class="slack-clone--header">
			<form class="slack-clone--header__form">
				<input type="text" placeholder="検索" class="slack-clone--header__form-search">
			</form>
		</div>
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
	background: burlywood;
}

.slack-clone--header__form {
	padding: 5px;
}

.slack-clone--header__form-search {
	border-radius: 20px;
	outline: none;
}

.slack-clone--header__form-search::placeholder {
	position: relative;
	left: 10px;
}

.slack-clone--main {
	height: 95%;
	display: flex;
	flex-direction: row;
}

.slack-clone--main__channel {
	width: 20%;
	background: cornflowerblue;
}

.slack-clone--main__chat {
	width: 80%;
}

</style>
