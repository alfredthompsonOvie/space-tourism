<template>
	<div class="container">
		<header class="app_header">
			<app-navigation />
		</header>

		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import { onUpdated, onMounted } from "vue";
// import { gsap } from "gsap";
export default {
	name: "App",
	components: {
		AppNavigation,
	},
	setup() {
		onMounted(() => {
			// gsap.from(".app_header", {
			// 	autoAlpha: 0.01,
			// 	y: -10,
			// 	duration: 1,
			// 	ease: "power4"
			// })
			console.log("app mounted");
		});
		onUpdated(() => {
			// gsap.from(".app_header", {
			// 	autoAlpha: 0.01,
			// 	y: -10,
			// 	duration: 1,
			// 	ease: "power4"
			// })
			console.log("app updated");
		});
	},
};
</script>

<style>
.container {
	position: relative;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
	opacity: 0;
	transform: translateX(-10px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 1s ease-out;
}

</style>
