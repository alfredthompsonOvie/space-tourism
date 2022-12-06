<template>
	<TechnologyComponent />
</template>

<script>
import TechnologyComponent from '../components/TechnologyComponent.vue';
import { onMounted } from "vue";

import { gsap } from "gsap";

export default {
	name: "TechnologyView",
	components: {
		TechnologyComponent
	},
	setup () {
		onMounted(() => {
			console.log("tech view mounted");
			const tl = gsap.timeline({
				defaults: {
					duration: 1.6,
					ease: "sine"
				}
			});
			tl.from(".subheading--js", {
				x: -30,
				autoAlpha: 0.01,
			}).from(".avatar", {
				scale: .95,
				autoAlpha: 0.01,
				ease: "back"
			}, "-=1")
			.from(".btn--js", {
				x: 10,
				autoAlpha: 0.01,
				ease: "power4",
				stagger: 0.2,
			}, "<")
			.from(".details > *", {
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