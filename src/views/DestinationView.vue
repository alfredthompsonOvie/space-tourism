<template>
	<div class="section section__destination">
		<h3 class="subheading subheading__others is-subheading">
			<span class="subheading__number">01</span>
			Pick your destination
		</h3>
		<!--  -->
		<div class="section-img-container section-img__destination">
			<div v-for="destination in destinations" :key="destination.name">
				<template v-if="showDestination === destination.name">
					<img
						:src="`${imageUrl}${destination.images.png}.png`"
						alt=""
						class="section-img planet section-img__destination__0 section-img__0 showcase content__active"
					/>
				</template>
			</div>
		</div>
		<!--  -->

		<!-- !NEXT SECTION -->
		<div class="section-contents section-contents__destination">
			<div class="contents-btn-control btnDestination">
				<button 
				class="btn dest__active btn__planet btn__tab"
				v-for="destination in destinations" :key="destination.name"
				@click="showDestination = destination.name"
				>
					{{ destination.name }}
				</button>
			</div>
			<!-- contents -->
			<div class="contents contents__destination" >
				<div v-for="destination in destinations" :key="destination.name" v-auto-animate>
					<template v-if="showDestination === destination.name">
						<div 
							class="content content__0 content__active content__profile showcase"
						>
							<h3 class="heading heading__destination">{{ destination.name }}</h3>
							<p class="content-description content-description__destination">
								{{ destination.description }}
							</p>
							<div class="content-duration">
								<div class="content-duration__avgDistance">
									<h4
										class="content-duration__header subheading subheading__duration"
									>
										avg. distance
									</h4>
									<h1 class="content-duration__distance heading heading__duration">
										{{ destination.distance }}
									</h1>
								</div>
								<div class="content-duration__est-travel-time">
									<h4 class="subheading subheading__duration">est. travel time</h4>
									<h1 class="heading heading__duration">{{ destination.travel }}</h1>
								</div>
							</div>
						</div>
					
					</template>
				</div>
				
				<!--  -->
				<!-- <div class="content content__1 content__profile showcase">
					<h3 class="heading heading__destination">Mars</h3>
					<p class="content-description content-description__destination">
						Don’t forget to pack your hiking boots. You’ll need them to tackle
						Olympus Mons, the tallest planetary mountain in our solar system.
						It’s two and a half times the size of Everest!
					</p>
					<div class="content-duration">
						<div class="content-duration__avgDistance">
							<h4 class="subheading subheading__duration">avg. distance</h4>
							<h1 class="heading heading__duration">225 mil. km</h1>
						</div>
						<div class="content-duration__est-travel-time">
							<h4 class="subheading subheading__duration">est. travel time</h4>
							<h1 class="heading heading__duration">9 months</h1>
						</div>
					</div>
				</div> -->
				
				<!--  -->
				<!-- <div class="content content__2 content__profile showcase">
					<h3 class="heading heading__destination">Europa</h3>
					<p class="content-description content-description__destination">
						The smallest of the four Galilean moons orbiting Jupiter, Europa is
						a winter lover’s dream. With an icy surface, it’s perfect for a bit
						of ice skating, curling, hockey, or simple relaxation in your snug
						wintery cabin.
					</p>
					<div class="content-duration">
						<div class="content-duration__avgDistance">
							<h4 class="subheading subheading__duration">avg. distance</h4>
							<h1 class="heading heading__duration">628 mil. km</h1>
						</div>
						<div class="content-duration__est-travel-time">
							<h4 class="subheading subheading__duration">est. travel time</h4>
							<h1 class="heading heading__duration">3 years</h1>
						</div>
					</div>
				</div> -->
				<!--  -->
				<!-- <div class="content content__3 content__profile showcase">
					<h3 class="heading heading__destination">Titan</h3>
					<p class="content-description content-description__destination">
						The only moon known to have a dense atmosphere other than Earth,
						Titan is a home away from home (just a few hundred degrees colder!).
						As a bonus, you get striking views of the Rings of Saturn.
					</p>
					<div class="content-duration">
						<div class="content-duration__avgDistance">
							<h4 class="subheading subheading__duration">avg. distance</h4>
							<h1 class="heading heading__duration">1.6 bil. km</h1>
						</div>
						<div class="content-duration__est-travel-time">
							<h4 class="subheading subheading__duration">est. travel time</h4>
							<h1 class="heading heading__duration">7 years</h1>
						</div>
					</div>
				</div> -->
				<!--  -->
			</div>
			<!-- end of contents -->
		</div>
		<!-- end of section-contents -->
	</div>
</template>

<script>
import { ref } from 'vue';
import userData from "../data/data.json"



export default {
	name: "DestinationView",
	setup() {
		const showDestination = ref('Moon') 
		const { destinations } = userData
		const imageUrl = new URL("../assets/destination/",  import.meta.url).href
		console.log(destinations);
		return {
			destinations,
			showDestination,
			imageUrl
		}
	},
};
</script>

<style scoped>
.section__destination {
	background-image: url(@/assets/destination/background-destination-mobile.jpg);

	background-size: cover;
	background-repeat: no-repeat;

	min-height: 100vh;
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.section__destination {
		background-image: url(@/assets/images/destination/background-destination-tablet.jpg);
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.section__destination {
		background-image: url(@/assets/images/destination/background-destination-desktop.jpg);
	}
}
</style>
