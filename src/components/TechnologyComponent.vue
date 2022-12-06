<template>
	<div class="technology">
		<h3 class="subheading subheading--js">
			<span class="subheading__number">03</span>
			Space launch 101
		</h3>
		<!-- ! IMAGES -->
		<template v-for="tech in technology" :key="tech.name">
			<div v-if="showTech === tech.name" class="section-img__tech">
				<img 
					v-if="mobile"
					:src="`${imageUrl}${tech.images.landscape}.jpg`"
					alt=""
					class="avatar"
				/>
				<img
					v-else
					:src="`${imageUrl}${tech.images.portrait}.jpg`"
					alt=""
					class="avatar"
				/>
			</div>
		</template>

		<div class="section-contents section-contents__technology">
			<div class="contents-btn">
				<button
					v-for="(tech, i) in technology"
					:key="tech.name"
					class="btn__circle btn--js"
					:class="{ btn__active: tech.name == showTech }"
					@click="showTech = tech.name"
				>
					{{ i + 1 }}
				</button>
			</div>
			<!-- contents -->
			<div class="contents contents__tech">
				<div
					v-for="tech in technology"
					:key="tech.name"
					class="content__0 details"
				>
					<template v-if="showTech === tech.name">
						<h3 class="subheading subheading__tech">The terminology...</h3>
						<h2 class="heading heading__tech">{{ tech.name }}</h2>
						<p class="content-description description">
							{{ tech.description }}
						</p>
					</template>
				</div>
			</div>
			<!-- end of contents -->
		</div>
		<!-- end of section-contents -->
	</div>
</template>

<script>
import { ref, onUpdated } from "vue";
import userData from "@/data/data.json";
import { gsap } from "gsap";

export default {
	name: "TechnologyView",
	setup() {
		const { technology } = userData;
		const imageUrl = new URL("../assets/technology/", import.meta.url).href;

		// function getImageUrl(name) {
		// 	return new URL(`../assets/technology/${name}.png`, import.meta.url).href;
		// }

		console.log(technology);

		const showTech = ref(technology[0].name);

		const mobile = ref(null);
		let windowWidth = ref(null);
		function checkScreen() {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value > 991) {
				mobile.value = false;
			} else {
				mobile.value = true;
			}
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
				".details > *",
				{
					y: 50,
					autoAlpha: 0.01,
					stagger: 0.2,
					ease: "back",
				},
				"<"
			);
		});
		return {
			technology,
			imageUrl,
			showTech,
			mobile,
		};
	},
};
</script>

<style scoped>
.section {
}
.technology {
	background-image: url(@/assets/technology/background-technology-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	text-align: center;
	min-height: 100vh;
	padding-top: 6em;
	overflow: hidden;
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
.section-img__tech {
	margin: 2.5em 0;
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
.btn__circle {
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
.contents__tech {
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
@media screen and (min-width: 500px) {
	.heading__tech {
		font-size: 2rem;
	}
	/* !contents */
	.description {
		max-width: 400px;
	}
	/*! btn */
	.btn__circle {
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
	.technology {
		background-image: url(@/assets/technology/background-technology-tablet.jpg);
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
	.subheading__others {
		grid-row: 1;
		grid-column: 1;
		font-size: 19px;
		margin: 3em 2em 1em;
		text-align: left;
	}

	.heading__tech {
		font-size: 2.2rem;
		margin: 0.2em 0 0.5em;
	}

	.subheading__tech {
		font-size: 1rem;
	}

	/* ============================================= */
	/** CONTENTS */

	.contents__tech {
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
	.section-img__tech {
		height: 25em;
	}
	.section-img__tech img {
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
	.technology {
		background-image: url(@/assets/technology/background-technology-desktop.jpg);
		padding-top: 8em;
		display: grid;
		grid-template-rows: 3em 4em 20em 4em;
		grid-template-rows: 3em 4em 280px 4em;
		grid-template-columns: 100px 1fr 1fr 80px;
		text-align: left;
		align-items: center;
	}
	.technology > .subheading {
		grid-row: 1;
		grid-column: 2;
		margin: 0;
		justify-self: start;
		padding: 0;
	}
	.section-img__tech {
		grid-column: 3/-1;
		grid-row: 2/-1;
		margin: 0;
		padding: 0;
		/* background-color: red; */
		height: 100%;
	}
	.section-img__tech img {
		height: 100%;
		/* width: 100%; */
		/* object-fit: cover; */
	}

	/* contains btn and content */
	.section-contents {
		grid-row: 3;
		grid-column: 2;
		display: grid;
		grid-template-columns: 3em auto;
		grid-template-rows: auto;
		gap: 1em;
		border: 4px solid;
		/* background-color: red; */
		height: 100%;
	}
	.contents-btn {
		grid-row: 1;
		grid-column: 1;
		display: flex;
		flex-direction: column;
		gap: 1em;
		justify-content: space-between;
		align-items: start;
	}
	.contents-btn button {
		margin: 0;
	}
	.btn__circle {
		width: 65px;
		height: 65px;
	}
	.contents__tech {
		/* height: 100%; */
		margin: 0;
	}
	.description {
		margin: 0;
	}
}
</style>
