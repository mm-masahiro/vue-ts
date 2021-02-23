<template>
<div class="signin">
		<h1 class="signin--title">サインイン</h1>
		<form class="signin--form" @submit.prevent="signIn">
			<p>メールアドレスを入力してください</p>
			<input type="email" v-model="email" placeholder="xxx@example.com" class="signin--form__email" />
			<p>パスワードを入力してください</p>
			<input type="password" v-model="password" placeholder="パスワード" class="signin--form__pass" />
			<button type="submit" class="signin--form__submit">サインイン</button>
		</form>
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
			email: '',
			password: ''
		}
	},
	methods: {
		signIn() {
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(response => {
				console.log(response);
				this.$router.push('/')
			}).catch(e => {
				console.log(e)
			})
		}
	}
})
</script>

<style>

.signin {
	height: 100%;
	width: 100%;
}

.signin--title {
	margin-bottom: 100px;
}

/* 後で修正する */
.signin--form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px 30% 0px 30%;
}

.signin--form__email {
	margin-bottom: 20px;
}

.signin--form__pass {
	margin-bottom: 50px;
}

.signin--form__submit {
	background: turquoise;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

</style>
