<template>
	<div class="signup">
		<h1 class="signup--title">ユーザー登録</h1>
		<form class="signup--form" @submit.prevent="registerUser">
			<p>メールアドレスを入力してください</p>
			<input type="email" v-model="email" placeholder="xxx@example.com" class="signup--form__email" />
			<p>パスワードを入力してください</p>
			<input type="password" v-model="password" placeholder="パスワード" class="signup--form__pass" />
			<button type="submit">ユーザーの登録</button>
		</form>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import firebase from "firebase/app"
import "firebase/auth"

export default defineComponent({
	name: 'SignUp',
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		registerUser() {
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(response => {
				console.log(response)
			}).catch(e => {
				console.log(e)
			});
		}
	}
})
</script>

<style>

.signup {
	height: 100%;
	width: 100%;
}

.signup--title {
	margin-bottom: 100px;
}

/* 後で修正する */
.signup--form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px 30% 0px 30%;
}

.signup--form__email {
	margin-bottom: 20px;
}

.signup--form__pass {
	margin-bottom: 50px;
}

</style>
