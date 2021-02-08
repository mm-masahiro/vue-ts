<template>
	<div>
		<div v-if="resultMessage">
			<h1>{{ resultMessage }}</h1>
		</div>
		<img class="show-hand" v-bind:src="handsList[currentHand]" />
		<ul class="hand">
			<li class="hand--list">
				<button class="hand--list__type" @click="onTap">グー</button>
			</li>
			<li class="hand--list">
				<button class="hand--list__type" @click="onTap">チョキ</button>
			</li>
			<li class="hand--list">
				<button class="hand--list__type" @click="onTap">パー</button>
			</li>
		</ul>
		<div>
			<button @click="reset">reStart</button>
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
			resultMessage: '',
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
		reset() {
			this.resultMessage = ''
			this.timer = null
			this.currentHand = 0
			this.start()
		},
		onTap(event) {
			// DOM要素の取得
			const clickedBtn = event.target;

			clearInterval(this.timer);

			this.judgeGame(+clickedBtn.value, this.currentHand)
		},
		judgeGame(val, _currentHand) {
			switch (_currentHand) {
				case val:
					this.resultMessage = 'Drow'
					break
				case (val + 1) % 3:
					this.resultMessage = 'Win'
					break
				case (val + 2) % 3:
					this.resultMessage = 'Loose'
					break
			}
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
