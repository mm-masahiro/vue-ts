<template>
	<div class="timeline">
		{{ commentLine }}
		<input type="button" @click="sendComment" />
		<input type="button" @click="removeComment" />
		<input type="button" @click="resetComment" />
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import store from '../store';

export default defineComponent({
	name: 'Timeline',
	data() {
		return {
		
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
		}
	},
	computed: {
		commentLine() {
			return this.$store.state.comment
		}
	}
})
</script>

<style>
.timeline {
 background: cadetblue;
 height: 85%;
 width: 100%;
}


</style>
