<template>
	<div class="timeline">
		<div class="timeline--main">

		</div>
		<div class="comment">
			<textarea placeholder="xxxxへメッセージ" class="comment--input"></textarea>
			<div class="comment--submit">
				<button class="comment--submit__button" @click="submitMessage">送信</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import store from '../store';
import firebase from 'firebase/app';
import 'firebase/database'

export default defineComponent({
	name: 'Timeline',
	data() {
		return {
			message: '',
			messages: []
		}
	},
	methods: {
		sendComment() {
			this.$store.commit('addComment')
		},
		removeComment() {
			this.$store.commit('removeComment')
		},
		resetComment() {
			this.$store.commit('resetComment')
		},
		submitMessage() {
			firebase.database().ref('comment').push({
				comment: this.message
			})
			this.message = ''
		},
	},
	computed: {
		commentLine() {
			return this.$store.state.comment
		}
	},
	mounted() {
		firebase.database().ref('comment').on(
			'value', snapshot => (this.messages = snapshot.val())
		)
	}
})
</script>

<style>
.timeline {
 height: 100%;
 width: 100%;
}

.timeline--main {
	background: cadetblue;
	height: 85%;
}

.comment {
	height: 14%;
	width: 80%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	border-width: 2px;
	border-color: black;
	border-style: solid;
}

.comment--input {
	height: 70%;
	width: 99%;
	text-align: left;
	margin: auto;
	border-style: none;
}

.comment--submit {
	height: 30%;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	background: rgba(128, 128, 128, 0.2);
	border-style: none;
}

.comment--submit__button {
	float: left;
	background: cadetblue;
	border-style: none;
	cursor: pointer;
	margin-top: 3px;
	margin-left: 5px;
	border-radius: 3px;
}

</style>
