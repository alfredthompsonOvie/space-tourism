<template>
	<main class="section">
		<h1 class="subheading subheading--js">
			<span class="subheading__number">01</span>
			Pick your destination
		</h1>

		<template v-for="destination in destinations" :key="destination.name">
			<section
				class="img__container"
				v-if="showDestination === destination.name"
			>
				<transition
				appear
				@enter="onEnter"
				:css="false"
				>
					<img
						:src="`${getImageUrl(destination.images.webp)}`"
						:alt="`a picture of ${destination.name} in space`"
						class="img"
					/>
				</transition>
			</section>
		</template>

		<section class="section-contents__destination">
			<section class="btnDestination">
				<button
					class="btn__planet"
					type="button"
					:class="showDestination === destination.name ? 'btn__active' : ''"
					v-for="destination in destinations"
					:key="destination.name"
					@click.prevent="showDestination = destination.name"
				>
					{{ destination.name }}
				</button>
			</section>
			<section class="contents contents__destination">
				<section v-for="destination in destinations" :key="destination.name">
					<template v-if="showDestination === destination.name">
						<section class="dest__contents">
							<h1 class="heading heading__destination">
								{{ destination.name }}
							</h1>
							<p class="content-description content-description__destination">
								{{ destination.description }}
							</p>
							<section class="content-duration">
								<section class="content-duration__avgDistance">
									<h1 class="subheading subheading__duration">avg. distance</h1>
									<h2 class="heading heading__duration">
										{{ destination.distance }}
									</h2>
								</section>
								<section class="content-duration__est-travel-time">
									<h1 class="subheading subheading__duration">
										est. travel time
									</h1>
									<h2 class="heading heading__duration">
										{{ destination.travel }}
									</h2>
								</section>
							</section>
						</section>
					</template>
				</section>
			</section>
		</section>
	</main>
</template>

<script>
import { ref } from "vue";
import userData from "../data/data.json";
import { gsap } from "gsap";


export default {

	setup() {
		const { destinations } = userData;
		const showDestination = ref("Moon");

		const imageUrl = new URL("../assets/destination/", import.meta.url).href;
		function getImageUrl(name) {
			return new URL(`/src/assets/destination/${name}`, import.meta.url).href;
		}

		const onEnter = () => {
			const tl = gsap.timeline({
				defaults: {
					duration: 1.4,
				},
			});

			tl.fromTo(
				".img",
				{
					y: 10,
					scale: 0.95,
					autoAlpha: 0.01,
				},
				{
					y: 0,
					scale: 1,
					autoAlpha: 1,
					ease: "sine",
					onRepeat: () => {
						gsap.fromTo(
							".img",
							{
								autoAlpha: 1,
							},
							{
								autoAlpha: 1,
							}
						);
					},
					onComplete: () => {
						gsap.fromTo(
							".img",
							{
								scale: 1,
							},
							{
								scale: 0.95,
								yoyo: true,
								yoyoEase: true,
								repeat: -1,
								duration: 2,
							}
						);
					},
				}
			).fromTo(
				".dest__contents > *",
				{
					y: 70,
					autoAlpha: 0.01,
				},
				{
					y: 0,
					autoAlpha: 1,
					stagger: 0.1,
					ease: "power4",
				},
				"<"
			);
		}

		return {
			destinations,
			showDestination,
			imageUrl,
			onEnter,
			getImageUrl,
		}
	}
}
</script>

<style scoped>
.section {
	text-align: center;
	min-height: 100vh;
	padding-top: 6em;
	overflow: hidden;
	background-image: url(@/assets/destination/background-destination-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
}
.section-contents__destination {
	padding: 0 0.8em;
}
.heading {
	font-family: var(--ff-H);
	font-weight: var(--fw);
	text-transform: uppercase;
	color: var(--color-title);
}
.subheading__duration {
	font-family: var(--ff);
	text-transform: uppercase;
	font-weight: normal;
	font-size: 14px;
	letter-spacing: 2px;
	margin-bottom: 0.7em;
}
.heading__destination {
	font-size: clamp(2rem, 15vw, 5rem);
}
.heading__duration {
	text-transform: uppercase;
	font-family: var(--ff-H);
	font-weight: normal;
	font-size: 1.8rem;
	margin-top: 0.2em;
	color: #fff;
}
.img__container  {
	margin: 2em 0;
}
.img {
	width: 12em;
	height: 12em;
	display: inline-block;
}

.btnDestination {
	display: flex;
	justify-content: space-around;
	max-width: 280px;
	margin: 1.5em auto;
}
.btn__planet {
	border-bottom: 3px solid transparent;
	padding: 0.6em 0;
}
.btn__active {
	border-bottom: 3px solid #fff;
}
.contents__destination {
	max-width: 315px;
	padding: 0;
}
.content-duration {
	border-top: 1px solid var(--border-line);
	margin-top: 2em;
	padding: 2em 0;
}
.content-duration__avgDistance {
	margin-bottom: 2em;
}
@media screen and (min-width: 500px) {
	.img {
		width: 16em;
		height: 16em;
	}
	.contents__destination {
		font-size: 17px;
		max-width: 355px;
	}
	.btn__planet {
		font-size: 16px;
	}
	.btn__planet + .btn__planet {
		margin-left: 2em;
	}
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/destination/background-destination-tablet.jpg);
	}
	.subheading {
		font-size: 19px;
		margin: 3em 2em;
		text-align: left;
	}
	.subheading__duration {
		font-size: 0.75rem;
	}
	.heading__duration {
		font-size: 1.5rem;
	}
	.contents__destination {
		font-size: 17px;
		max-width: 535px;
	}
	.content-description__destination {
		font-size: 16px;
		max-width: 520px;
	}
	.content-duration {
		display: flex;
		justify-content: space-evenly;
	}
	.img {
		width: 340px;
		height: 340px;
	}
	.btnDestination {
		max-width: 350px;
		margin: 2em auto;
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.section {
		background-image: url(@/assets/destination/background-destination-desktop.jpg);
		padding-top: 8em;
		display: grid;
		grid-template-rows: 40px auto;
		grid-template-columns: 100px 1.2fr 0.8fr 80px;
		align-items: center;
		text-align: left;
	}
	.subheading {
		grid-row: 1;
		grid-column: 2;
		margin: 0;
	}
	.img__container {
		grid-column: 2;
		grid-row: 2;
		justify-self: center;
	}
	.section-contents__destination {
		grid-row: 2;
		grid-column: 3;
		justify-self: end;
		width: 353px;
		padding: 0;
	}
	.btnDestination,
	.content-duration {
		justify-content: flex-start;
	}
	.content-duration__est-travel-time {
		margin-left: 4em;
	}
}
@media (min-width: 1100px) {
	.section {
		grid-template-columns: 130px 1.2fr 0.8fr 100px;
	}
}
@media (min-width: 1200px) {
	.section {
		grid-template-columns: 150px 1.2fr 0.8fr 150px;
	}
	.img {
		width: 25em;
		height: 25em;
	}
}
</style>