<template>
	<div>
		<form>Sign in</form>
		<input v-model="name" />
		<label>User ID</label>
		<input />
		<label>Password</label>
		<button type="submit">Sign in</button>
		<div>
    <h1>Firebaseを使った読み書き確認</h1>
    <input v-model="message" />
    <button @click="addMessage">メッセージを追加</button>
    <button @click="pushMessage">メッセージを本当に追加</button>
		<ul>
			<li v-for="(message, index) in messages" :key="index">
				{{ message.content }} index:{{ index }}
			</li>
		</ul>
  </div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import firebase from 'firebase/app';
import 'firebase/database'

export default defineComponent({
	name: 'SignIn',
	data() {
		return {
			message: '',
			messages: [],
			name: ''
		}
	},
	methods: {
		addMessage() {
			firebase.database().ref('slack').set({
				content: this.message,
				user: {
					name: "Masahiro Morinaga"
				}
			});
		},
		pushMessage() {
			firebase.database().ref('slack').push({
				content: this.message,
				user: {
					name: this.name
				}
			})
		}
	},
	// mount時にデータ取得　ブラウザにアクセスすると自動でFirebaseのデータベースからデータを取ってくる
	mounted() {
		firebase.database().ref('slack').on(
			// valueイベントでデータ取得
			'value', snapshot => (this.messages = snapshot.val())
		);
		// firebase.database().ref('slack').on(
		// 	// child_addedイベントでは最初はすべてのデータを取得し、その後はデータが追加されると追加したデータのみ取得
		// 	'child_added', snapshot => console.log(snapshot.val())
		// );
	}
})
</script>
