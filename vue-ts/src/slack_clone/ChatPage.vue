<template>
	<div class="slack-clone">
		<div class="slack-clone--header">
			<header class="slack-clone--header__contents">
				<div class="slack-clone--header__contents-detail">
					<div class="slack-clone--header__contents-detail-username">{{ user.email }}</div>
					<form class="slack-clone--header__form">
						<input type="text" placeholder="検索" class="slack-clone--header__form-search">
					</form>
					<div class="slack-clone--header__contents-detail-auth">
						<button class="slack-clone--header__auth-button-in">
							<router-link class="link--signin" to="/sign-in">Sign in</router-link>
						</button>
						<button class="slack-clone--header__auth-button-up">
							<router-link class="link--signup" to="/sign-up">Sign up</router-link>
						</button>
						<button class="slack-clone--header__auth-button-out" @click="signOut">
							Sign Out
						</button>
					</div>
				</div>
			</header>
			<!-- <div class="slack-clone--header__auth"> -->
				<!-- <div class="slack-clone--header__auth-button">
					<button class="slack-clone--header__auth-button-in">
						<router-link class="link--signin" to="/sign-in">Sign in</router-link>
					</button>
					<button class="slack-clone--header__auth-button-up">
						<router-link class="link--signup" to="/sign-up">Sign up</router-link>
					</button>
					<button class="slack-clone--header__auth-button-out" @click="signOut">
						Sign Out
					</button>
				</div> -->
			<!-- </div> -->
			<!-- <form class="slack-clone--header__form">
				<input type="text" placeholder="検索" class="slack-clone--header__form-search">
			</form> -->
		</div>
		<div class="slack-clone--main">
			<div class="slack-clone--main__channel">
				<div class="slack-clone--main__channel-header">
					<h1 class="slack-clone--main__channel-title">Slack clone</h1>
					<!-- <img src="../assets/notification.svg" class="slack-clone--main__channel-img" /> -->
					<Notification />
				</div>
				<div class="slack-clone--main__user-name">{{ user.email }}</div>
				<div class="slack-clone--sidebar">
					<div class="slack-clone--main__user-name-header">
						<div class="slack-clone--main__user-name-header-title">チャンネル</div>
						<PlusCircle />
					</div>
					<div class="slack-clone--main__channel-name" v-for="channel in channels" :key="channel.id">
						# {{ channel.channelName }}
					</div>
				</div>
				<div class="slack-clone--sidebar">
					<div class="slack-clone--main__dm-header">
						<div class="slack-clone--main__dm-user">ダイレクトメッセージ</div>
						<PlusCircle />
					</div>
					<div v-for="userlist in userLists" :key="userlist.id">
						{{ userlist.email }}
					</div>
				</div>
				<!-- <div class="slack-clone--main__user-name"># channel-2</div> -->
			</div>
			<div class="slack-clone--body">
				<Timeline v-bind:user="user" />
				<!-- <Comment /> -->
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import firebase from "firebase/app"
import "firebase/auth"
import SignIn from './SignIn.vue'
import Timeline from './Timeline.vue'
import Comment from './Comment.vue'
import Notification from './Notification.vue'
import PlusCircle from './PlusCircle.vue'

export default defineComponent({
	name: 'ChatPage',
	components: {
		Timeline,
		// Comment,
		Notification,
		PlusCircle,
	},
	data() {
		return {
			user: firebase.auth().currentUser,
			userLists: [
				{
					userId: 11,
					email: 'hoge@email.com'
				},
				{
					userId: 12,
					email: 'tekitou0110@email.com'
				},
				{
					userId: 13,
					email: 'test@email.com'
				},
			],
			channels: [
				{
					id: 1,
					channelName: "Channel 1"
				},
				{
					id: 2,
					channelName: "Channel 2"
				},
				{
					id: 3,
					channelName: "Channel 3"
				},
			],
		}
	},
	methods: {
		signOut() {
			firebase.auth().signOut();
			this.$router.push('/sign-in')
		}
	},
	mounted() {
		this.user = firebase.auth().currentUser;
	}
})

</script>

<style>
.link--signin {
	text-decoration: none;
	color: black
}

.link--signup {
	text-decoration: none;
	color: white;
}

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
	width: 100%;
}

.slack-clone--header__contents {
	padding: 5px;
}

.slack-clone--header__contents-detail {
	display: flex;
	flex-direction: row;
}

.slack-clone--header__contents-detail-username {
	font-weight: bold;
}

.slack-clone--header__contents-detail-auth {
	margin-left: 100px;
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
	margin-right: 20px;
	height: 90%;
	border: none;
	border-radius: 5px;
	background: #1b72e9;
	color: white;
	font-weight: bold;
	outline: none;
	cursor: pointer;
}

.slack-clone--header__auth-button-out {
	height: 90%;
	border: none;
	border-radius: 5px;
	background: #e6e91b;
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
	margin-left: 100px;
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
	display: flex;
	flex-direction: column;
}

.slack-clone--main__channel-header {
	display: flex;
	flex-direction: row;
}

.slack-clone--main__channel-title {
	font-size: 20px;
}

/* .slack-clone--main__channel-img {
	width: 12%;
	padding: 2px;
} */

.slack-clone--main__user-name {
	height: 20px;
	margin-bottom: 5px;
}

.slack-clone--sidebar {
	margin-bottom: 20px;
}

.slack-clone--main__user-name-header {
	width: 100%;
	display: flex;
	flex-direction: row;
}

.slack-clone--main__user-name-header-title{
	width: 90%;
	text-align: left;
}

.slack-clone--main__dm-header {
	width: 100%;
	display: flex;
	flex-direction: row;
}

.slack-clone--main__dm-user {
	font-size: 11px;
	font-weight: bold;
	width: 90%;
	text-align: left;
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

.slack-clone--body {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
}

</style>
