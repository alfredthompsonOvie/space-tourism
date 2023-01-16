<template>
	<DestinationComponent />
</template>

<script>
import DestinationComponent from '../components/DestinationComponent.vue';
import { onMounted } from "vue";
// import { gsap } from "gsap";


export default {
	components: {
		DestinationComponent
	},
	setup () {
		onMounted(() => {
			console.log("dest mounted");
		// 	const tl = gsap.timeline({
		// 		defaults: {
		// 			duration: 1.6,
		// 			ease: "power4",
		// 		}
		// 	});
		// 	tl.from(".subheading--js", {
		// 		x: -30,
		// 		autoAlpha: 0.01,
		// 		onComplete: () => gsap.to(".subheading--js", { clearProps: "all" }),
		// 	})
		// 		.from(".img", {
		// 		scale: .95,
		// 		autoAlpha: 0.01,
		// 			ease: "power2",
		// 		onComplete: () => gsap.fromTo(".img", {
		// 		scale: 1,
				
		// 		}, {
		// 		scale: .95,
		// 		yoyo: true,
		// 		yoyoEase: true,
		// 		repeat: -1,
		// 		duration: 2,
		// 		}),
		// 		onRepeat: () => {
		// 				gsap.fromTo(".img", {
		// 					autoAlpha: 1
		// 				}, {
		// 					autoAlpha: 1,
		// 				})
		// 			},
		// 	}, "-=1")
		// 	.from(".btn__planet", {
		// 		x: 10,
		// 		autoAlpha: 0.01,
		// 		stagger: 0.2,
		// 		onComplete: () => gsap.to(".btn__planet", { clearProps: "all" }),
		// 	}, "<")
		// 	.from(".dest__contents > *", {
		// 		y: 10,
		// 		autoAlpha: 0.01,
		// 		stagger: 0.2,
		// 		onComplete: () => gsap.to(".dest__contents > *", { clearProps: "all" }),
		// 	}, "-=1.5")

		})

		return {}
	}
}
</script>

<style scoped>

</style>