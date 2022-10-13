<template>
	<div class="container">
		<header>
			<app-navigation />
		</header>

		<RouterView />
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
	name: "App",
	components: {
		AppNavigation,
	},
	setup() {},
};
</script>

<style scoped>
.container {
	position: relative;
}
</style>
