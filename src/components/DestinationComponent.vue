<template>
	<div class="section section__destination">
		<h3 class="subheading subheading--js">
			<span class="subheading__number">01</span>
			Pick your destination
		</h3>

		<!-- destination images section-->
		<div
			class="section-img-container"
			v-for="destination in destinations"
			:key="destination.name"
		>
			<template v-if="showDestination === destination.name">
				<transition name="fade_in" mode="out-in" appear>
					<img
						:src="`${imageUrl}${destination.images.png}.png`"
						:alt="`${destination.name}`"
						class="section-img__destination"
					/>
				</transition>
			</template>
		</div>
		<!-- !NEXT SECTION -->
		<div class="section-contents__destination">
			<!--! buttons -->
			<div class="btnDestination">
				<button
					class="btn__planet"
					:class="showDestination === destination.name ? 'btn__active' : ''"
					v-for="destination in destinations"
					:key="destination.name"
					@click.prevent="showDestination = destination.name"
				>
					{{ destination.name }}
				</button>
			</div>
			<!-- contents -->
			<div class="contents contents__destination">
				<div v-for="destination in destinations" :key="destination.name">
					<template v-if="showDestination === destination.name">
						<div class="dest__contents">
							<h3 class="heading heading__destination">
								{{ destination.name }}
							</h3>
							<p class="content-description content-description__destination">
								{{ destination.description }}
							</p>
							<div class="content-duration">
								<div class="content-duration__avgDistance">
									<h4
										class="subheading subheading__duration"
									>
										avg. distance
									</h4>
									<h1
										class="heading heading__duration"
									>
										{{ destination.distance }}
									</h1>
								</div>
								<div class="content-duration__est-travel-time">
									<h4 class="subheading subheading__duration">
										est. travel time
									</h4>
									<h1 class="heading heading__duration">
										{{ destination.travel }}
									</h1>
								</div>
							</div>
						</div>
						<!-- <Transition name="slide_in" mode="out-in" appear>

						</Transition> -->
					</template>
				</div>
			</div>
			<!-- end of contents -->
		</div>
		<!-- end of section-contents -->
	</div>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue";
import userData from "../data/data.json";

import { gsap } from "gsap";

export default {
	name: "DestinationView",
	setup() {
		const { destinations } = userData;
		const showDestination = ref("Moon");

		const imageUrl = new URL("../assets/destination/", import.meta.url).href;

		onMounted(() => {
			console.log("dest mounted");
			// gsap.from(".app_header", {
			// 	opacity: 0,
			// })
			const tl = gsap.timeline({
				defaults: {
					duration: 1.6,
					ease: "sine"
				}
			});
			tl.from(".subheading--js", {
				x: -30,
				autoAlpha: 0.01,
			}).from(".section-img__destination", {
				scale: .95,
				autoAlpha: 0.01,
				ease: "back"
			}, "-=1")
			.from(".btn__planet", {
				x: 10,
				autoAlpha: 0.01,
				ease: "power4",
				stagger: 0.2,
			}, "<")
			.from(".dest__contents > *", {
				y: 10,
				autoAlpha: 0.01,
				ease: "power4",
				stagger: 0.2,
			}, "-=1.5")
		})
		onUpdated(() => {
			gsap.from(".dest__contents > *", {
				y: 70,
				autoAlpha: 0.01,
				stagger: .1,
				ease: "expo",
				duration: 1.2,
			})
		})

		return {
			destinations,
			showDestination,
			imageUrl,
		};
	},
};
</script>

<style scoped>
.section {
	text-align: center;
	min-height: 100vh;
	padding-top: 6em;
	/* overflow: hidden; */
}
.section__destination {
	background-image: url(@/assets/destination/background-destination-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	/* min-height: 100vh; */
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
.section-img-container {
	margin: 2em 0;
	/* border: 1px solid; */
}
.section-img__destination {
	width: 12em;
	height: 12em;
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
	/* height: 28em; */
	padding: 0;
	/* margin: 0 auto; */
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
	.section-img__destination {
		width: 16em;
		height: 16em;
	}
	.contents__destination {
		font-size: 17px;
		max-width: 355px;
	}
	/* ! btn */
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
	.section__destination {
		background-image: url(@/assets/destination/background-destination-tablet.jpg);
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
		/* height: 20em; */
	}
	.content-description__destination {
		font-size: 16px;
		max-width: 520px;
	}
	.content-duration {
		display: flex;
		justify-content: space-evenly;
	}
	.section-img__destination {
		width: 340px;
		height: 340px;
	}
	.btnDestination {
		max-width: 350px;
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.section__destination {
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
	.section-img-container {
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

	.contents-btn-control {
		margin: 0;
	}
	/* destination */
	.btnDestination,
	.content-duration {
		justify-content: flex-start;
	}
	.content-duration__est-travel-time {
		margin-left: 4em;
	}
}
@media (min-width: 1100px) {
	.section__destination {
		grid-template-columns: 130px 1.2fr 0.8fr 100px;
	}
}
@media (min-width: 1200px) {
	.section__destination {
		grid-template-columns: 150px 1.2fr 0.8fr 150px;
	}
	.section-img__destination {
		width: 25em;
		height: 25em;
	}
}
</style>