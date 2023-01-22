<template>
	<main class="section">
		<section class="section__contents">
			<section class="contents">
				<section class="content">
					<h1 class="subheading">So, you want to travel to</h1>
					<h2 class="heading">Space</h2>
					<p class="description">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</section>
			</section>

			<section class="btn__explore--wrapper btn--js">
				<router-link :to="{ name: 'Destination' }" class="btn btn__explore"
					>expore</router-link
				>
			</section>
		</section>
	</main>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";

export default {
	name: "HomeView",
	setup() {
		onMounted(() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 1.6,
				},
			});
			tl.from(".content > *", {
				y: 50,
				autoAlpha: 0.01,
				ease: "back",
				stagger: 0.25,
			}).from(
				".btn--js",
				{
					autoAlpha: 0.01,
					ease: "elastic",
					onComplete: () => {
						tl.from(".btn--js", { clearProps: "all" });
					},
				},
				"-=1"
			);
		});

		return {};
	},
};
</script>

<style scoped>
.section {
	text-align: center;
	min-height: 100vh;
	padding-top: 6em;

	background-image: url(@/assets/images/home/background-home-mobile.jpg);
	background-position: 0% 65%;
	background-size: cover;
	background-repeat: no-repeat;
}
.heading {
	font-family: var(--ff-H);
	font-weight: var(--fw);
	text-transform: uppercase;
	color: var(--color-title);
	
	margin: 0.15em 0;
	font-size: clamp(2rem, 22vw, 7.5rem);
	font-size: clamp(4.5rem, 22vw, 7.5rem);
}

.subheading {
	margin: 1em 0 0;
	/* font-size: clamp(0.75rem, 3vw, 1rem); */
	font-size: 1rem;
}
.section__contents {
	padding: 0 1em;
}
.contents {
	padding: 0em;
	margin: 0 auto;
}
.description {
	font-size: var(--fs);
	max-width: 320px;
	margin: 0 auto;
}
.btn__explore--wrapper {
	width: 8.5em;
	height: 8.5em;
}
.btn__explore {
	position: absolute;
	bottom: 2.5em;
	left: 50%;
	transform: translateX(-50%);

	width: inherit;
	height: inherit;
	border-radius: 50%;
	background-color: #fff;
	color: #0b0d17;
	text-transform: uppercase;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	font-weight: var(--fw);
	font-size: var(--fs-cta);
	font-family: var(--ff-H);
	letter-spacing: var(--letter-spacing-cta);
	transition: all 0.3s linear;
}
.btn__explore:hover {
	/* width: 8.5em;
	height: 8.5em; */
	letter-spacing: 4px;
}
.btn__explore::before,
.btn__explore::after {
	content: "";
	width: inherit;
	height: inherit;
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 0;
}
.btn__explore::before,
.btn__explore::after {
	animation: pulsate 1.5s infinite;
}
@keyframes pulsate {
	0% {
		box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0.04);
	}
	70% {
		box-shadow: 0px 0px 0px 50px rgba(255, 255, 255, 0.04);
	}
	100% {
		box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0.04);
		opacity: 0;
	}
}
@media screen and (min-width: 500px) {
	.content-title__header {
		font-size: 4.5rem;
	}
	.description {
		max-width: 400px;
		margin: 0 auto;
		font-size: 16px;
	}
	/* ! btn */
	.btn__explore--wrapper {
		width: 9.5em;
		height: 9.5em;
	}
	.btn__explore {
		bottom: 1em;
	}
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/images/home/background-home-tablet.jpg);
		background-position: center;
	}
	.subheading {
		margin: 4em 0 0;
		text-align: center;
		font-size: 20px;
		line-height: 24px;
		letter-spacing: 3.375px;
	}
	.heading {
		/* font-size: 7.5rem; */
		margin: 0.1em 0;
	}
	.contents {
		padding: 0em;
		margin: 0 auto;
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}

	/* !-----=======SECTION=======------*/
	.section {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 100px 1fr 80px;
		align-items: end;

		text-align: left;
		padding: 0;

		background-image: url(@/assets/images/home/background-home-desktop.jpg);
		padding-bottom: 5em;
	}
	.section__contents {
		grid-row: 1;
		grid-column: 2/3;
	}
	.subheading {
		/* margin: 0; */
		text-align: left;
		font-size: 1.75rem; /*28px*/
		font-size: clamp(1.5rem, 1.5vw, 1.75rem);
		line-height: 34px;
		letter-spacing: 4.7px;

		/* font-size: clamp(1rem, 1.5vw, 1.6rem); */
		/* font-weight: 400; */
		


	}
	.heading {
		margin: 0.05em 0;
		font-size: clamp(8rem, 11vw, 9.375rem);
		line-height: 1.3;

		/* font-family: Bellefair; */
		/* font-size: 150px; */
/* font-weight: 400; */
		/* line-height: 172px; */
/* letter-spacing: 0px; */
/* text-align: left; */

	}
	.section__contents {
		padding: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.description {
		max-width: clamp(330px, 32vw, 420px);
		font-size: clamp(15px, 1.5vw, 18px);
		margin: 0;
	}
	.contents {
		padding: 0em;
		margin: 0;
	}
	.btn__explore--wrapper {
		position: relative;
		width: 12em;
		height: 12em;
		align-self: flex-end;
	}
	.btn__explore {
		position: absolute;
		bottom: 0em;
		right: 0;
		left: 0;
		transform: translateX(0);
		font-size: 1.8rem;
		letter-spacing: 3px;
	}
}
@media (min-width: 1100px) {
	.section {
		grid-template-columns: 130px 1fr 100px;
	}
}
@media (min-width: 1150px) {
	.btn__explore--wrapper {
		width: 14em;
		height: 14em;
	}
}
@media (min-width: 1200px) {
	.section {
		grid-template-columns: 150px 1fr 150px;
	}
}
</style>
