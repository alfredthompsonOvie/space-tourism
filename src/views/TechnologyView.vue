<template>
	<div class="section section__technology technology">
		<h3 class="subheading subheading__others subheading__title is-subheading">
			<span class="subheading__number">03</span>
			Space launch 101
		</h3>
		<!-- ! IMAGES -->
		<template v-for="tech in technology" :key="tech.name">
			<div v-if="showTech === tech.name" class="section-img__tech">
				<img
					:src="`${imageUrl}${tech.images.landscape}.jpg`"
					alt=""
					class="avatar"
				/>
			</div>
		</template>

		<div class="section-contents section-contents__technology">
			<div class="contents-btn-control btn__tech">
				<button
					v-for="(tech, i) in technology"
					:key="tech.name"
					class="btn btn__circle"
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
					class="content content__0 content__profile content__active showcase"
				>
					<template v-if="showTech === tech.name">
						<h3 class="subheading subheading__tech">
							The terminology...
						</h3>
						<h2 class="heading heading__tech">{{ tech.name }}</h2>
						<p class="content-description content-description__tech description">
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
import { ref } from "vue";
import userData from "@/data/data.json";

export default {
	name: "TechnologyView",
	setup() {
		const { technology } = userData;
		const imageUrl = new URL("../assets/technology/", import.meta.url).href;
		const showTech = ref(technology[0].name);

		console.log(technology);

		return {
			technology,
			imageUrl,
			showTech,
		};
	},
};
</script>

<style scoped>
.section {
	text-align: center;
	min-height: 100vh;
	padding-top: 6em;
	overflow: hidden;
}
.technology {
	background-image: url(@/assets/technology/background-technology-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
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
	/* background-color: red; */
	/* padding: 0 0.5em; */
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
	/* ! IMAGES */
	/* destination */

	.section-img__crew {
		height: 20em;
	}
	.section-img__crew .section-img {
		background-size: contain;
	}
	/* .section-img__tech {
		height: 16em;
	} */
	/* .section-img__tech .section-img {
		background-size: cover;
	} */
	/* !contents */
	.contents__destination {
		font-size: 17px;
		max-width: 355px;
	}
	.content-title__header {
		font-size: 4.5rem;
	}
	.description {
		max-width: 400px;
	}
	/* .content__2 .content-description__tech {
		max-width: 417px;
	} */
	/* ! btn */
	.btn__planet {
		font-size: 16px;
	}
	.btn__planet + .btn__planet {
		margin-left: 2em;
	}
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
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.container__home {
		background-image: url(../assets/background-home-tablet.jpg);
		background-position: center;
	}
	.container__destination {
		background-image: url(../assets/background-destination-tablet.jpg);
	}
	.container__crew {
		background-image: url(../assets/background-crew-tablet.jpg);
	}
	.container__technology {
		background-image: url(../assets/background-technology-tablet.jpg);
	}
	.nav-bar {
		padding: 0em;
		display: grid;
		grid-template-columns: 0.8fr 1fr;
		height: 5.5em;
	}
	.logo {
		margin-left: 2em;
		align-self: center;
	}
	.hamburger {
		display: none;
	}
	/* .nav-list {
		position: static;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		align-items: center;
		padding: 0 1em;
		width: initial;
		height: 100%;
	}
	.nav-item {
		padding-left: 0em;
	}
	.nav-item + .nav-item {
		margin-top: 0em;
		margin-left: 1em;
	}
	.nav-item:nth-child(1) {
		margin-top: 0em;
	}
	.nav-link {
		font-size: var(--fs-nav);
		letter-spacing: var(--letter-spacing-nav);
		padding: 1.8em 0.1em;
	}
	.nav-link_number {
		display: none;
	} */
	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */
	/* !-----=======SECTION=======------*/
	/* .section {
		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: 1fr;
		padding: 0;
		align-items: start;
	} */
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
	.subheading__home {
		margin: 4em 0 0;
		text-align: center;
		font-size: 1.15rem;
	}
	.subheading__rank {
		font-size: 1.15rem;
	}
	.heading__home {
		font-size: 7.5rem;
		margin: 0;
		margin: 0em 0 0.01em;
	}
	.heading__crew {
		font-size: 2.2rem;
		margin: 0em 0 0.3em;
	}
	.heading__tech {
		font-size: 2.2rem;
		margin: 0.2em 0 0.5em;
	}

	.subheading__tech {
		font-size: 1rem;
	}

	.section-contents__crew {
		grid-row: 2;
		grid-column: 1;
		display: flex;
		flex-direction: column-reverse;
	}
	/* ============================================= */
	/** CONTENTS */
	.contents__home {
		padding: 0em;
		margin: 0 auto;
	}

	.contents__crew {
		grid-row: 1;
		width: 100%;
		height: 10em;
		margin: 2em auto 0;
		align-self: center;
	}
	.contents__tech {
		height: 14em;
	}
	.content-description__home {
		font-size: 16px;
		max-width: 400px;
		margin: 0 auto;
	}

	.content__0 .content-description__crew {
		max-width: 400px;
	}
	.content__1 .content-description__crew {
		max-width: 450px;
	}
	.content__2 .content-description__crew {
		max-width: 530px;
	}
	.content__3 .content-description__crew {
		max-width: 462px;
	}
	.content-description__crew {
		font-size: 16px;
		margin: 0 auto;
	}

	.description {
		max-width: 413px;
		margin: 0 auto;
		padding: 0 0.5em;
	}
	/* .content__1 .content-description__tech {
		max-width: 413px;
	}
	.content__2 .content-description__tech {
		max-width: 417.7px;
	} */
	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */

	/* !-----=======IMAGES=======------*/

	.section-img__crew {
		grid-row: 3;
		grid-column: 1;
		margin-top: 0;
		height: 25em;
	}
	.section-img__crew__0 {
		top: 14px;
	}
	/* .section-img__tech {
		height: 22em;
	} */
	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */

	/* !-----=======BUTTON=======------*/
	/* HOMEPAGE */
	.contents-control__home {
		width: 8.5em;
		height: 8.5em;
	}
	.btn__crew {
		grid-row: 2;
	}

	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */
	/*state classes */
	/* !have to fix this somehow with some sweet animation */
	.is-active__menu {
		border-right: none;
		border-bottom: 3px solid #fff;
	}
	.nav-link {
		position: relative;
	}
	.nav-link.is-active .linkUnderline {
		display: block;
		content: " ";
		/* background-color: #e8e8e8; */
		background-color: #fff;
		position: absolute;
		top: auto;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 4px;
		opacity: 0;
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.technology {
		background-image: url(@/assets/technology/background-technology-desktop.jpg);
	}
}
</style>
