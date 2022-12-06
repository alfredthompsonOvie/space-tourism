<template>
	<HomeComponent />
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue';
import { onMounted } from "vue";

import { gsap } from "gsap";

export default {
	components: {
		HomeComponent
	},
	setup () {
		onMounted(() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 1.6,
				}
			});
			tl
			.from(".content__home > *", {
				y: 50,
				autoAlpha: 0.01,
				ease: "back",
				stagger: 0.25,
			})
				.from(".btn--js", {
				autoAlpha: 0.01,
				ease: "elastic",
				onComplete: () => {
					tl.from(".btn--js", {clearProps: "all"})
				}
			}, "-=1")
		})

		return {}
	}
}
</script>

<style scoped>

</style>