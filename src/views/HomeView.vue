<template>
	<div class="section section__home">
		<div class="section-contents section-contents__home">
			<!-- contents -->
			<div class="contents contents__home">
				<div class="content content__home">
					<h3 class="subheading subheading__home">So, you want to travel to</h3>
					<h2 class="heading heading__home">Space</h2>
					<p class="content-description content-description__home">
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
			</div>

			<!-- btn -->
			<div class="contents-control contents-btn contents-control__home">
				<router-link :to="{ name: 'Destination' }" class="btn btn__explore"
					>expore</router-link
				>
			</div>
		</div>
		<!-- end of section-contents -->
	</div>
</template>

<script>
export default {
	name: "HomeView",
	setup() {},
};
</script>

<style scoped>
.section {
	text-align: center;
	min-height: 100vh;
	padding-top: 6em;
	/* overflow: hidden; */
}
.section__home {
	background-image: url(@/assets/images/home/background-home-mobile.jpg);
	/* background-position: 0% 65%; */
	background-size: cover;
	background-repeat: no-repeat;
	/* min-height: 100vh; */
}
.heading {
	font-family: var(--ff-H);
	font-weight: var(--fw);
	text-transform: uppercase;
	color: var(--color-title);
}
.heading__home {
	margin: 0.15em 0;
	font-size: clamp(2rem, 22vw, 7.5rem);
}
.subheading__home {
	margin: 1em 0 0;
	font-size: .75rem;
}
.section-contents__home {
	padding: 0 1em;
}
.contents__home {
	padding: 0em;
	margin: 0 auto;
}
.content-description__home {
	font-size: var(--fs);
	max-width: 320px;
	margin: 0 auto;
}
.contents-control__home {
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
.btn__explore:hover::before,
.btn__explore:hover::after {
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
	.content-description__home {
		max-width: 400px;
		margin: 0 auto;
	}
	/* ! btn */
	.contents-control__home {
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
	.section__home {
		background-image: url(@/assets/images/home/background-home-tablet.jpg);
		background-position: center;
	}
	.subheading__home {
		margin: 4em 0 0;
		text-align: center;
		/* font-size: 1.15rem; */
	}
	.heading__home {
		/* font-size: 7.5rem; */
		margin: 0.1em 0;
	}
	.contents__home {
		padding: 0em;
		margin: 0 auto;
	}
	/* .content-description__home {
		font-size: 16px;
		max-width: 400px;
		margin: 0 auto;
	} */
	/* .contents-control__home {
		width: 8.5em;
		height: 8.5em;
	} */
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
		/* grid-template-rows: 120px calc(82vh - 120px); */
		grid-template-rows: auto;
		grid-template-columns: 100px 1fr 80px;

		align-items: end;

		/* margin: 1em 0 0; */
		text-align: left;
		padding: 0;
	}
	.section__home {
		background-image: url(@/assets/images/home/background-home-desktop.jpg);
		padding-bottom: 5em;

	}
	.section-contents__home {
		grid-row: 1;
		grid-column: 2/3;
	}

	.subheading__home {
		margin: 0;
		text-align: left;
		font-size: clamp(1.2rem, 2vw, 1.6rem);
	}
	.subheading__title {
		font-size: clamp(1.2rem, 2vw, 1.5rem);
	}
	.heading__home {
		font-size: clamp(7rem, 11vw, 9rem);
		margin: 0.05em 0;
	}
	.section-contents__home {
		padding: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.content-description__home {
		max-width: clamp(330px, 32vw, 420px);
		margin: 0;
		font-size: clamp(15px, 1.5vw, 18px);
	}
	/*  */
		.contents__home {
		padding: 0em;
		margin: 0;
	}
	.content-title__name {
		font-size: 2.8rem;
	}
	.content__1 .content-title__name {
		font-size: 37px;
	}
	.content__3 .content-title__name {
		font-size: 37px;
	}
		.contents-control__home {
		position: relative;
		/* border: 1px solid; */
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
	.contents-btn-control {
		margin: 0;
	}
}
@media (min-width: 1100px) {
	.section {
		grid-template-columns: 130px 1fr  100px;
	}
}
@media (min-width: 1150px) {
	.contents-control__home {
		width: 14em;
		height: 14em;
	}
}
@media (min-width: 1200px) {
	.section {
		grid-template-columns: 150px 1fr  150px;
	}
}
</style>
