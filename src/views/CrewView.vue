<template>
		<main class="section">
		<h1 class="subheading subheading--js">
			<span class="subheading__number">02</span>
			Meet your crew
		</h1>

		<!--! iMAGES -->
		<template v-for="crew in crewMembers" :key="crew.name">
			<section v-if="showCrew === crew.name" class="img__container">
			<img
				:src="`${getImageUrl(crew.images.webp)}`"
				:alt="`an image of ${ crew.name }`"
				class="avatar"
				:class="{ 'avatar--width': crew.name == 'Mark Shuttleworth' }"
			/>
			</section>
		</template>

		<section class="contents">
			<!--! BUTTONS -->
			<section class="btn__container btn--js">
				<button
					v-for="crew in crewMembers"
					:key="crew.name"
					class="btn--dot"
					:class="{ 'is-active': crew.name == showCrew }"
					@click.prevent="showCrew = crew.name"
					type="button"
					aria-label="button"
					role="button"
				></button>
			</section>
			<!--! CONTENTS -->
			<template v-for="crew in crewMembers" :key="crew.name">
				<section class="content__profile__container" v-if="showCrew === crew.name">
					<section class="content__profile">
						<h1 class="subheading">{{ crew.role }}</h1>
						<h2 class="heading" :class="{'heading--mark': crew.name==='Mark Shuttleworth'}">{{ crew.name }}</h2>
						<p class="description">
							{{ crew.bio }}
						</p>
					</section>
				</section>
			</template>
		</section>
	</main>
</template>

<script>
import userData from "@/data/data.json";
import { ref, onUpdated, onMounted } from "vue";
import { gsap } from "gsap";


export default {
	name: "CrewView",
	setup() {
		const { crew: crewMembers } = userData;

		function getImageUrl(name) {
			return new URL(`/src/assets/crew/${name}`, import.meta.url).href;
		}
		const showCrew = ref("Douglas Hurley");

		onUpdated(() => {
			const tl = gsap.timeline({
				defaults: {
					ease: "power4",
					duration: 1.2,
				},
			});
			tl.from(".avatar", {
				autoAlpha: 0.01,
				scale: .95,
				y: 10,
				duration: 2,
			}).from(
				".content__profile > *",
				{
					y: 70,
					autoAlpha: 0.01,
					stagger: 0.1,
				},
				"<"
			);
		});
		onMounted(() => {
		
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

		return {
			crewMembers,
			showCrew,
			getImageUrl,
		}
	}
}
</script>

<style scoped>
.section {
	background-image: url(@/assets/crew/background-crew-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;

	text-align: center;
	padding-top: 6em;
	overflow: hidden;
}

.img__container {
	display: flex;
	justify-content: center;
	margin: 3em 1.2em 1em;
	border-bottom: 1px solid #383b4b;
	height: 284px;
}
.avatar {
	width: 18em;
	object-fit: contain;
	object-position: bottom;
}

.btn__container {
	margin: 1.5em 0 1.8em;
}
.btn--dot {
	background-color: rgba(255, 255, 255, 0.2);
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin: 0 0.6em;
	cursor: pointer;
}
.btn--dot:hover {
	background-color: rgba(255, 255, 255, 0.5);
}
.is-active {
	background-color: #fff;
}

.content__profile__container {
	height: 15em;
	padding: 0;
}
.description {
	max-width: 320px;
	margin: 0 auto;
}

.heading {
	font-family: var(--ff-H);
	font-weight: var(--fw);
	text-transform: uppercase;
	color: var(--color-title);
}
h2.subheading {
	font-family: var(--ff-H);

	font-size: 1rem;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 0px;
	margin-bottom: 0.5em;
}
.content__profile h1.subheading {
	font-family: var(--ff-H);

	font-size: 1rem;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 0px;
	margin-bottom: 0.5em;
	text-align: center;
}

h2.heading {
	font-size: 24px;
	line-height: 28px;
	letter-spacing: 0px;
	margin-bottom: 0.5em;
}

.content__profile {
	width: 100%;
	margin: 0 auto;
}

@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/crew/background-crew-tablet.jpg);

		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: 1fr;
		justify-content: center;
	}
	.subheading {
		grid-row: 1;
		grid-column: 1;
		margin: 3em 2em 1em;
	}
	.contents {
		grid-row: 2;
		grid-column: 1;

		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-start;
		align-items: center;
	}

	.content__profile h1.subheading {
		font-size: 24px;
		line-height: 28px;
		margin: 2em 0em .5em;
}

	h2.heading {
		font-size: 40px;
		line-height: 46px;
	}

	.content__profile__container {
		width: 100%;
		height: initial;
		margin: 0 auto;
	}
	.description {
		max-width: 480px;
	}
	.img__container {
		grid-row: 3;
		grid-column: 1;
		margin-bottom: 0;
		margin-top: 0;
		height: 25em;
		border-bottom: 0;
	}
	.avatar {
		object-fit: contain;
		object-position: bottom;
		width: 100%;
	}
	.avatar--width {
		width: 17em;
	}
}
@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/crew/background-crew-desktop.jpg);
		padding-top: 0;
		display: grid;
		grid-template-rows: 10em 40px calc(100vh - 10em - 40px);
		grid-template-columns: 100px 1fr 1fr 80px;
		text-align: left;
	}
	.subheading {
		grid-row: 2;
		grid-column: 2;
		margin: 0;
		align-self: end;
	}
	h1.subheading {
		text-align: left;
		display: inline-block;
	}
	.img__container {
		grid-column: 3;
		grid-row: 2/-1;
		align-self: end;
		height: 100%;
		margin: 0;
	}
	.avatar {
		object-position: bottom;
	}
	.avatar--width {
		width: 100%;
	}
	.contents {
		grid-row: 3;
		grid-column: 2;
		width: 100%;
		padding: 0;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column-reverse;
	}
	h2.subheading {
		text-align: left;
		line-height: 1;
		font-size: clamp(28px, 3vw, 32px);
	}
	h2.heading {
		font-size: clamp(37px, 3vw, 56px);
	}
.description {
	max-width: 350px;
	margin: 0;
}
	.btn__container {
		align-self: start;
	}
}
@media (min-width: 1100px) {
	.section {
		grid-template-columns: 130px 1fr 1fr 100px;
	}
}
@media (min-width: 1200px) {
	.section {
		grid-template-columns: 150px 1fr 1fr 150px;
	}
	h2.heading {
		font-size: clamp(30px, 3.4vw, 56px);
	}

}
</style>