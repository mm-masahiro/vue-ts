<template>
	<div>
		<p>hoge</p>
		<ul class="hand">
			<li class="hand--list">
				<button class="hand--list__type">グー</button>
			</li>
			<li class="hand--list">
				<button class="hand--list__type">チョキ</button>
			</li>
			<li class="hand--list">
				<button class="hand--list__type">パー</button>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: 'Game'
})
</script>


<style>
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
