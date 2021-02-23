<template>
	<div>
		<img :src="avatorUrl" class="avator" />
	</div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({
	name: "Avator",
	props: ["user"],
	computed: {
		avatorUrl(): any {
			return "https://i.pravatar.cc/50?u=" + this.user;
		}
	}
})
</script>
