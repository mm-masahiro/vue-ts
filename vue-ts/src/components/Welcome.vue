<template>
	<div class="hello">
		<h1>{{ book.title }} / {{ book.author }} / {{ book.year }}</h1>
		<h1>{{ msg }}</h1>
		<h1>{{ fullName }}  {{ this.user.age }}</h1>
		<!-- <h1>{{ this.belong.firstCompany }} が前職で、 {{ this.belong.secondCompany }} が現職です</h1> -->
		<h1>{{ this.company.firstCompany }} が前職で、 {{ this.company.secondCompany }} が現職です</h1>
		<h1>{{ belongCompany }}</h1>
		<h1>好きなスポーツは {{ sports.name }} で、{{ sports.experience }}年やってました。{{ sports.name }}は、{{ sports.place }}でやります</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
	name: 'Welcome',
	props: {
		msg: {
			type: String as PropType<string>,
		},
		user: {
			// interfaceをpropsで渡すとき、 "Object as PropType<interface名>"で指定する
			type: Object as PropType<User>,
			// requiredを設定することで、そのデータの受け渡しを必須にできる
			// required: trueを設定した変数が親から渡されていない場合にエラーが表示される
			required: true,
		},
		company: {
			type: Object as PropType<Company>,
			required: true
		}
	},
	data() {
		return {
			book: {
				title: 'Vue & TS',
				author: 'Masahiro',
				year: 2021
			} as Book,
			sports: {
				name: 'Handball',
				place: '体育館',
				experience: 7
			} as Sports,
		}
	},
	methods: {

	},
	computed: {
		fullName(): string {
			return this.user.firstName + ' ' + this.user.lastName
		},
		belongCompany(): string {
			return this.company.firstCompany + 'を辞めて' + this.company.secondCompany + 'に入社しました'
		}
	},
});

interface Book {
	title: string;
	author: string;
	year: number;
}

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

interface Company {
	firstCompany: string;
	secondCompany: string;
}

interface Sports {
	name: string;
	place: string;
	experience: number;
}

</script>
