<template>
	<div>
		<img class="show-hand" v-bind:src="handsList[currentHand]" />
		<ul class="hand">
			<li class="hand--list">
				<button class="hand--list__type" @click="stop">グー</button>
			</li>
			<li class="hand--list">
				<button class="hand--list__type" @click="stop">チョキ</button>
			</li>
			<li class="hand--list">
				<button class="hand--list__type" @click="stop">パー</button>
			</li>
		</ul>
		<div>
			<button @click="start">Start</button>
		</div>
	</div>
</template>

<script lang="ts">
declare function require(string): any
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: 'Game',
	data() {
		return {
			src: require('../assets/hand1.png'),
			handsList: [
				require('../assets/hand1.png'),
				require('../assets/hand2.png'),
				require('../assets/hand3.png'),
			],
			currentHand: 0,
			timer: null,
		}
	},
	created() {
		this.start()
	},
	methods: {
		changeCurrentHand() {
			this.currentHand ++
			this.currentHand = this.currentHand % 3
		},
		start() {
			this.timer = setInterval(() => {
				this.changeCurrentHand()
			}, 	100)
		},
		stop() {
			clearInterval(this.timer)
		}
	}
})
</script>


<style>
.show-hand {
	height: 200px;
	padding: 30px;
}

.hand {
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-left: 0;
}

.hand--list {
	padding: 10px;
}

.hand--list__type {
	border-radius: 8px;
	width: 80px;
	height: 50px;
	cursor: pointer;
	background-color: #47baf4;
	border: none;
	color: white;
	font-weight: bold;
	opacity: 0.6;
	outline: none;
}

.hand--list__type:hover {
	background-color: #47baf4;
	opacity: 1;
}

</style>
