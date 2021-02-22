<template>
	<div class="signup">
		<h1 class="signup--title">ユーザー登録</h1>
		<div class="signup--form">
			<p>メールアドレスを入力してください</p>
			<input type="email" placeholder="xxx@example.com" class="signup--form__email" />
			<p>パスワードを入力してください</p>
			<input type="password" placeholder="パスワード" class="signup--form__pass" />
		</div>
		<button type="submit">ユーザーの登録</button>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: 'SignUp'
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
