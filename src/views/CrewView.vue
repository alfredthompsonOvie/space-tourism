<template>
	<CrewComponent />
</template>

<script>
import CrewComponent from '../components/CrewComponent.vue';
import { onMounted } from "vue";

import { gsap } from "gsap";

export default {
	components: {
		CrewComponent
	},
	setup () {
		onMounted(() => {
			console.log("crew mounted");
			const tl = gsap.timeline({
				defaults: {
					duration: 1.6,
				}
			});
			tl.from(".subheading--js", {
				x: -30,
				autoAlpha: 0.01,
			}).from(".avatar", {
				scale: .95,
				autoAlpha: 0.01,
				ease: "back",
				onComplete: () => {
					gsap.from(".avatar", {clearProps: "all"})
				}
			}, "-=1")
			.from(".btn--js", {
				x: 10,
				autoAlpha: 0.01,
				ease: "power4",
				stagger: 0.2,
			}, "<")
			.from(".content__profile > *", {
				y: 10,
				autoAlpha: 0.01,
				ease: "power4",
				stagger: 0.2,
			}, "-=1.5")
		})

		return {}
	}
}
</script>

<style scoped>

</style>