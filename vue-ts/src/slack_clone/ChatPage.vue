<template>
	<div class="slack-clone">
		<div class="slack-clone--header">
			<form class="slack-clone--header__form">
				<input type="text" placeholder="検索" class="slack-clone--header__form-search">
			</form>
		</div>
		<div class="slack-clone--main">
			<div class="slack-clone--main__channel">
				<div class="slack-clone--main__channel-name">スレッド</div>
				<div class="slack-clone--main__channel-name"># channel-1</div>
				<div class="slack-clone--main__channel-name"># channel-2</div>
			</div>
			<div class="slack-clone--main__chat">
				<div class="slack-clone--main__chat-contents">
					<div class="slack-clone--main__chat-contents-icon">
						<img src="../assets/hand1.png" class="slack-clone--main__chat-contents-icon-img">
					</div>
					<div class="slack-clone--main__chat-contents-profile">
						<div>Masahiro</div>
						<div>HogeHogeHogeHogeHogeHoge</div>
					</div>
				</div>
				<div></div>
			</div>
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
	width: 15%;
	background: cornflowerblue;
	display: flex;
	flex-direction: column;
}

.slack-clone--main__channel-name {
	height: 20px;
	margin-bottom: 5px;
}

.slack-clone--main__chat {
	width: 85%;
}

.slack-clone--main__chat-contents {
	display: flex;
	flex-direction: row;
	height: 50px;
}

.slack-clone--main__chat-contents-icon {
	width: 5%;
	padding: 5px;
}

.slack-clone--main__chat-contents-icon-img {
	width: 100%;
	object-fit: contain;
	height: 100%;
}

.slack-clone--main__chat-contents-profile {
	width: 95%;
	display: flex;
	flex-direction: column;
	text-align: left;
}

</style>
