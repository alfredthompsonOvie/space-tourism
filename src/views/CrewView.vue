<template>
	<div class="section__crew">
		<h3 class="subheading">
			<span class="subheading__number">02</span>
			Meet your crew
		</h3>

		<!--! iMAGES -->
		<template v-for="crew in crewMembers" :key="crew.name">
			<div v-if="showCrew === crew.name" class="section-img__crew">
				<!-- :src="`${imageUrl}${crew.images.png}.png`" -->
				<img
				:src="`${getImageUrl(crew.images.png)}.png`"
					alt=""
					class="section-img avatar"
					:class="{ 'avatar--width': crew.name == 'Mark Shuttleworth' }"
				/>
			</div>
		</template>

		<div class="section-contents__crew">
			<!--! BUTTONS -->
			<div class="btn__crew">
				<button
					v-for="crew in crewMembers"
					:key="crew.name"
					class="btn__dot"
					:class="{ 'is-active': crew.name == showCrew }"
					@click="showCrew = crew.name"
				></button>
			</div>
			<!--! CONTENTS -->
			<template v-for="crew in crewMembers" :key="crew.name">
				<div class="contents contents__crew" v-if="showCrew === crew.name">
					<div class="content__profile">
						<h3 class="subheading subheading__rank">{{ crew.role }}</h3>
						<h2 class="heading heading__crew">{{ crew.name }}</h2>
						<p class="content-description content-description__crew">
							{{ crew.bio }}
						</p>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import userData from "@/data/data.json";
import { ref } from "vue";

export default {
	name: "CrewView",
	setup() {
		const { crew: crewMembers } = userData;
		const imageUrl = new URL("../assets/crew/", import.meta.url).href;
		function getImageUrl(name) {
			return new URL(`/src/assets/crew/${name}`, import.meta.url).href;
		}
		const showCrew = ref("Douglas Hurley");


		return {
			crewMembers,
			showCrew,
			imageUrl,
			getImageUrl
		};
	},
};
</script>

<style scoped>
.section__crew {
	background-image: url(@/assets/crew/background-crew-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;

	text-align: center;
	padding-top: 6em;
	overflow: hidden;
}
/** benchMark */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
.section-img__crew {
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
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
.btn__crew {
	margin: 1.5em 0 1.8em;
}
.btn__dot {
	background-color: rgba(255, 255, 255, 0.2);
	width: 10px;
	height: 10px;
	border-radius: 50%;
	margin: 0 0.6em;
	cursor: pointer;
}
.btn__dot:hover {
	background-color: rgba(255, 255, 255, 0.5);
}
.is-active {
	background-color: #fff;
}
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */
/* ====================================================================== */

.contents__crew {
	height: 15em;
	padding: 0;
}
.content-description__crew {
	max-width: 320px;
	margin: 0 auto;
}

.heading {
	font-family: var(--ff-H);
	font-weight: var(--fw);
	text-transform: uppercase;
	color: var(--color-title);
}
/* crew__rank */
.subheading__rank {
	font-family: var(--ff-H);
	margin-bottom: 0.5em;
}
/* crew__title */
.heading__crew {
	font-size: 1.65rem;
	margin-bottom: 0.5em;
}

/* crew__profile */
.content__profile {
	width: 100%;
	margin: 0 auto;
	/* border: 1px solid; */
}

@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.section__crew {
		background-image: url(@/assets/crew/background-crew-tablet.jpg);

		display: grid;
		grid-template-rows: repeat(3, auto);
		grid-template-columns: 1fr;
		justify-content: center;
	}
	.subheading {
		grid-row: 1;
		grid-column: 1;
		font-size: 19px;
		margin: 3em 2em 1em;
		text-align: left;
	}
	.section-contents__crew {
		grid-row: 2;
		grid-column: 1;

		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-start;
		align-items: center;
		/* border: 1px solid; */
	}

	/* crew__rank */
	.subheading__rank {
		font-size: 1.15rem;
		text-align: center;
		line-height: 0;
	}

	/* crew__title */
	.heading__crew {
		font-size: 2.2rem;
		margin: 0em 0 0.3em;
	}

	/* ============================================= */

	.contents__crew {
		width: 100%;
		height: initial;
		margin: 0 auto;
	}
	.content-description {
		max-width: 400px;
	}
	.content-description__crew__1 {
		max-width: 450px;
	}
	.content-description__crew__2 {
		max-width: 530px;
	}
	.content-description__crew__3 {
		max-width: 462px;
	}
	.content-description__crew {
		font-size: 16px;
		margin: 0 auto;
	}
	.section-img__crew {
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
	.section__crew {
		background-image: url(@/assets/crew/background-crew-desktop.jpg);
		padding-top: 0;
		display: grid;
		grid-template-rows: 10em 40px calc(100vh - 10em - 40px);
		grid-template-columns: 100px 1fr 1fr 80px;
		/* align-items: center; */
		text-align: left;
	}
	.subheading {
		grid-row: 2;
		grid-column: 2;
		margin: 0;
		align-self: end;
	}
	.section-img__crew {
		grid-column: 3;
		grid-row: 2/-1;
		align-self: end;
		height: 100%;
		margin: 0;
	}
	.avatar {
		/* object-fit: cover; */
		/* object-fit: contain; */
		object-position: bottom;
	}
	.avatar--width {
		width: 100%;
	}
	.section-contents__crew {
		grid-row: 3;
		grid-column: 2;
		width: 353px;
		padding: 0;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column-reverse;
		height: initial;
		/* background-color: red; */
	}
	.subheading__rank {
		font-size: 1.15rem;
		text-align: left;
		line-height: 1;
	}
	.btn__crew {
		align-self: start;
	}
}
@media (min-width: 1100px) {
	.section__crew {
		grid-template-columns: 130px 1fr 1fr 100px;
	}
}
@media (min-width: 1200px) {
	.section__crew {
		grid-template-columns: 150px 1fr 1fr 150px;
	}
	/* .section-img__destination {
	width: 25em;
	height: 25em;
	
} */
}
</style>
