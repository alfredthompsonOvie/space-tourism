<template>
	<main class="section">
		<h1 class="subheading subheading--js">
			<span class="subheading__number">03</span>
			Space launch 101
		</h1>
		<!-- ! IMAGES -->
		<template v-for="tech in technology" :key="tech.name">
			<section v-if="showTech === tech.name" class="img__container">
				<!-- :src="`${imageUrl}${tech.images.landscape}.jpg`" -->
				<img
					v-if="mobile"
					:src="`${getImageUrl(tech.images.landscape)}`"
					alt=""
					class="avatar"
				/>
				<!-- :src="`${imageUrl}${tech.images.portrait}.jpg`" -->
				<img
					v-else
					:src="`${getImageUrl(tech.images.portrait)}`"
					alt=""
					class="avatar"
				/>
			</section>
		</template>

		<section class="contents">
			<section class="contents__btn">
				<button
					v-for="(tech, i) in technology"
					:key="tech.name"
					class="contents__btn--circle btn--js"
					:class="{ btn__active: tech.name == showTech }"
					@click="showTech = tech.name"
					type="button"
				>
					{{ i + 1 }}
				</button>
			</section>
			<!-- contents -->
			<section class="contents__info">
				<template v-for="tech in technology" :key="tech.name">
					<div class="content content--js" v-if="showTech === tech.name">
						<h1 class="subheading">The terminology...</h1>
						<h2 class="heading">{{ tech.name }}</h2>
						<p class="description">
							{{ tech.description }}
						</p>
					</div>
				</template>
			</section>
			<!-- end of contents -->
		</section>
	</main>
</template>

<script>
import { ref, onUpdated, onMounted } from "vue";
import userData from "@/data/data.json";
import { gsap } from "gsap";

export default {
	name: "TechnologyView",

	setup() {
		const { technology } = userData;
		const imageUrl = new URL("../assets/technology/", import.meta.url).href;

		function getImageUrl(name) {
			return new URL(`../assets/technology/${name}`, import.meta.url).href;
		}

		// console.log(technology);

		const showTech = ref(technology[0].name);

		const mobile = ref(null);
		let windowWidth = ref(null);
		function checkScreen() {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value < 991) {
				mobile.value = true;
				return;
			}
			mobile.value = false;
		}
		checkScreen();
		window.addEventListener("resize", checkScreen);

		onUpdated(() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 1.6,
				},
			});
			tl.from(".avatar", {
				autoAlpha: 0.01,
				scale: 1.2,
				ease: "power3.out",
			}).from(
				".content--js > *",
				{
					y: 50,
					autoAlpha: 0.01,
					stagger: 0.2,
					ease: "back",
				},
				"<"
			);
		});
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
			.from(".content--js > *", {
				y: 10,
				autoAlpha: 0.01,
				ease: "power4",
				stagger: 0.2,
			}, "-=1.5")
		})
		return {
			technology,
			imageUrl,
			showTech,
			mobile,
			getImageUrl,
		}
	}
}
</script>

<style scoped>
.section {
	padding-top: 6em;
	min-height: 100vh;

	background-image: url(@/assets/technology/background-technology-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	text-align: center;
	overflow: hidden;
}
h1.subheading {
	font-size: 1rem;
}
.content h1.subheading {
	letter-spacing: 2.3625px;
	text-align: center;
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* IMAGES */
.img__container {
	margin: 2.5em 0;
}
.img__container img {
	width: 100%;
	object-fit: cover;
	object-position: center;
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* BUTTONS */
.contents__btn--circle {
	width: 40px;
	height: 40px;
	margin: 0em 0.8em;
	font-size: 1.2rem;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 50%;
}
.btn__active {
	background-color: #fff;
	color: #0b0d17;
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*! CONTENTS */
.contents__info {
	margin: 2em 0 5em;
}
.subheading {
	font-family: var(--ff);
	text-transform: uppercase;
	font-weight: normal;
	font-size: 14px;
	letter-spacing: 2px;
	margin-bottom: 0.7em;
}
.heading {
	font-family: var(--ff-H);
	font-weight: var(--fw);
	text-transform: uppercase;
	color: var(--color-title);
	letter-spacing: 2.3625px;
	margin-bottom: 0.7em;
	/* line-height: 17px; */
}
.description {
	max-width: 325px;
	margin: 0 auto;
	line-height: 1.5;
}

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
@media (min-width: 500px) {
	.heading {
		font-size: 2rem;
	}
	/* !contents */
	.description {
		max-width: 400px;
	}
	/*! btn */
	.contents__btn--circle {
		width: 55px;
		height: 55px;
		margin: 0em 0.8em;
		font-size: 1.2rem;
	}
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/technology/background-technology-tablet.jpg);
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: 1fr;
		justify-content: center;
	}

	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */
	/* !-----=======SECTION=======------*/
	.section__tech {
		margin-bottom: 3em;
	}
	h1.subheading {
		font-size: 20px;
		text-align: left;
		margin: 3em 2em 1em;
		grid-row: 1;
		grid-column: 1;
		font-size: 20px;	
		line-height: 24px;
		letter-spacing: 3.375px;
	}
	.content h1.subheading {
		font-size: 1rem;
	}
	/* h1.subheading {
		font-family: Barlow Condensed;
		font-size: 20px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 3.375px;
		text-align: left;
	} */

	.heading {
		font-size: 2.2rem;
		margin: 0.2em 0 0.5em;
	}

	h3.subheading {
		font-size: 1rem;
	}

	/* ============================================= */
	/** CONTENTS */

	.contents__info {
		height: 14em;
	}

	.description {
		max-width: 413px;
		margin: 0 auto;
		padding: 0 0.5em;
	}
	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */

	/* !-----=======IMAGES=======------*/
	.img__container {
		height: 25em;
	}
	.img__container img {
		height: inherit;
		width: 100%;
	}
	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/technology/background-technology-desktop.jpg);
		/* padding-top: 8em; */
		padding-top: 10em;
		display: grid;
		grid-template-rows: 3em 4em 280px 4em;
		grid-template-columns: 100px 1.4fr 0.6fr 80px;
		grid-column-gap: 2em;
		text-align: left;
		align-items: center;
	}
	h1.subheading {
		grid-row: 1;
		grid-column: 2;
		margin: 0;
		justify-self: start;
		padding: 0;
		font-size: 28px;
	}
	.img__container {
		grid-column: 3/-1;
		grid-row: 2/-1;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.img__container img {
		height: 100%;
	}

	/* contains btn and content */
	.contents {
		grid-row: 3;
		grid-column: 2;
		/* gap: 1em; */
		gap: 2em;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		height: auto;
		padding: 0;
		margin: 0;
	}
	.contents__btn {
		grid-row: 1;
		grid-column: 1;
		display: flex;
		flex-direction: column;
		gap: 1.8em;
		justify-content: space-between;
		align-items: start;
	}
	.contents__btn button {
		margin: 0;
	}
	.contents__btn--circle {
		width: 65px;
		height: 65px;
	}
	.contents__info {
		margin: 0;
	}
	.content h1.subheading {
	text-align: left;
}
	.heading {
		margin-bottom: 0;
		font-size: clamp(40px, 4vw, 56px);
		line-height: 64.18px;
	}
	.description {
		margin: 0;
		font-size: 18px;
		max-width: 445px;
		padding: 0;
	}
}
@media (min-width: 1100px) {
	.contents {
		gap: 3em;
	}
}
</style>