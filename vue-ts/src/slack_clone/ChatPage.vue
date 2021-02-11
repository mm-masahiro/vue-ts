<template>
	<div class="slack-clone">
		<div class="slack-clone--header">
			<div class="slack-clone--header__auth">
				<div class="slack-clone--header__auth-button">
					<button class="slack-clone--header__auth-button-in">
						<router-link to="/sign-in">Sign in</router-link>
					</button>
					<button class="slack-clone--header__auth-button-up">Sign up</button>
				</div>
			</div>
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
import SignIn from './SignIn.vue'
export default defineComponent({
	name: 'ChatPage',
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
	display: flex;
	flex-direction: row;
}

.slack-clone--header__auth {
	display: flex;
	flex-direction: row;
	text-align: left;
	width: 50%;
}

.slack-clone--header__auth-button {
	padding: 5px;
}

.slack-clone--header__auth-button-in {
	margin-right: 20px;
	height: 90%;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	outline: none;
	cursor: pointer;
}

.slack-clone--header__auth-button-up {
	height: 90%;
	border: none;
	border-radius: 5px;
	background: #1b72e9;
	color: white;
	font-weight: bold;
	outline: none;
	cursor: pointer;
}

.slack-clone--header__auth-button-in:active {
	opacity: 0.4;
}

.slack-clone--header__auth-button-up:active {
	opacity: 0.4;
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
