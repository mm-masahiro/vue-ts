<template>
	<div class="comment">
		<input type="text" class="comment--input" v-model="message"/>
		<button class="comment--submit" @click="submitMessage">送信</button>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import firebase from 'firebase/app';
import 'firebase/database'

export default defineComponent({
	name: 'Comment',
	data() {
		return {
			message: '',
			messages: []
		}
	},
	methods: {
		submitMessage() {
			firebase.database().ref('comment').push({
				comment: this.message
			})
			console.log(this.message)
			this.message = ''
		},
	},
	mounted() {
		firebase.database().ref('comment').on(
			'value', snapshot => (this.messages = snapshot.val())
		)
	}
})
</script>

<style>

.comment {
	height: 15%;
	width: 100%;
	display: flex;
	flex-direction: row;
}

.comment--input {
	height: 70%;
	width: 80%;
	text-align: center;
	margin: auto;
}

.comment--submit {
	height: 20%;
	width: 10%;
	text-align: center;
}

</style>
