<template>
	<nav class="navigation nav">
		<!-- site logo -->
		<div class="branding">
			<img src="@/assets/images/shared/logo.svg" alt="" />
		</div>

		<!-- open menu icon -->
		<button type="btn" @click="toggleMobileNav" v-if="mobile">
			<img src="@/assets/images/shared/icon-hamburger.svg" alt="" />
		</button>

		<!-- mobile navigation -->
		<Transition 
		@before-enter="onBeforeEnter"
		@enter="onEnter"
		@leave="onLeave"
		:css="false"
		>

		<ul class="mobileNav" v-if="mobileNav">
			<!-- close icon -->
			<button type="btn" class="closeBtn" @click="toggleMobileNav">
				<img src="@/assets/images/shared/icon-close.svg" alt="" />
			</button>
	
			<!-- nav lists -->
			<li class="mobileNav__item">
				<RouterLink to="/" class="mobileNav__link"  @click="toggleMobileNav">
					<span class="mobileNav__link--number">00</span>
					<span class="mobileNav__link--text">Home</span>
				</RouterLink>
			</li>
			<li class="mobileNav__item">
				<RouterLink :to="{ name: 'Destination' }" class="mobileNav__link"  @click="toggleMobileNav">
					<span class="mobileNav__link--number">01</span>
					<span class="mobileNav__link--text">Destination</span>
				</RouterLink>
			</li>
			<li class="mobileNav__item">
				<RouterLink :to="{ name: 'Crew' }" class="mobileNav__link"  @click="toggleMobileNav">
					<span class="mobileNav__link--number">02</span>
					<span class="mobileNav__link--text">Crew</span>
				</RouterLink>
			</li>
			<li class="mobileNav__item">
				<RouterLink :to="{ name: 'Technology' }" class="mobileNav__link"  @click="toggleMobileNav">
					<span class="mobileNav__link--number">03</span>
					<span class="mobileNav__link--text">Technology</span>
				</RouterLink>
			</li>
			</ul>
		</Transition>

		<!-- tablet and desktop nav -->
		<div class="line"></div>
		
		<div class="overlay" v-if="!mobile">
			<ul class="mainNav">
				<li>
					<RouterLink to="/">
						<span class="mobileNav__link--number">00</span>
						<span class="mobileNav__link--text">Home</span>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'Destination' }">
						<span class="mobileNav__link--number">01</span>
						<span class="mobileNav__link--text">Destination</span>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'Crew' }">
						<span class="mobileNav__link--number">02</span>
						<span class="mobileNav__link--text">Crew</span>
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name: 'Technology' }">
						<span class="mobileNav__link--number">03</span>
						<span class="mobileNav__link--text">Technology</span>
					</RouterLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { gsap } from 'gsap';
export default {
	name: "AppNavigation",
	data() {
		return {
			mobile: null,
			mobileNav: null,
			windowWidth: null,
		};
	},
	created() {
		window.addEventListener("resize", this.checkscreenSize);
		this.checkscreenSize();
	},
	mounted() {
		this.mobileNav = false;
		console.log("nav mounted");
	},
	methods: {
		checkscreenSize() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth < 700) {
				this.mobile = true;
				return;
			}
			this.mobile = false;
			this.mobileNav = false;
		},
		toggleMobileNav() {
			this.mobileNav = !this.mobileNav;
		},
	},
	setup() {
		const onBeforeEnter = (el) => { 
			const items = [...el.children]
			gsap.set(el, {
				autoAlpha: 0.01,
				x:100
			})
			gsap.set(items, {
				autoAlpha: 0.01,
				y:10
			})
		}
		const onEnter = (el, done) => { 
			const items = [...el.children]
			const tl = gsap.timeline();
			tl.to(el, {
				autoAlpha: 1,
				x: 0
			})
			.to(items, {
				autoAlpha: 1,
				y: 0,
				stagger: 0.2,
				onComplete: done
			})
		}
		const onLeave = (el, done) => {
			gsap.to(el, {
				autoAlpha: 0.01,
				x: 100,
				onComplete: done
			})
		}
		return {
			onBeforeEnter,
			onEnter,
			onLeave,
		}
	}
};
</script>

<style scoped>
.nav {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.2em;
}
.branding {
	width: 2.2em;
}
.mobileNav {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	max-width: 250px;
	display: flex;
	flex-direction: column;
	background-color: var(--nav-background);
	backdrop-filter: var(--nav-backdrop-filter);
	z-index: 99;
}
.closeBtn {
	align-self: flex-end;
	margin: 2em 2em 5em;
}
.mobileNav__item + .mobileNav__item {
	margin-top: 1em;
}
.mobileNav__link {
	display: flex;
	gap: 0.8em;
	padding: 0.3em 1.8em;
	font-family: var(--ff);
	font-size: var(--fs);
	line-height: var(--line-height);
	color: var(--color-title);
	text-transform: uppercase;
}
.mobileNav__link--number {
	font-weight: var(--fw-number);
}
.mobileNav__link--text {
	font-weight: var(--fw);
}
.nav a {
	letter-spacing: 2.7px;
}

/* ------------------------------ */

nav a.router-link-exact-active {
	border-right: 4px solid #fff;
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}
/* ------------------------------ */

.line {
		display: none;
	}
/* !============================================================ */
/* !============================================================ */
/* ============================================= */
/* ============================================= */
/* !============================================================ */
/* !============================================================ */
/* !-----======= Tablet =======------*/

@media (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.nav {
		padding: 0;
		display: grid;
		grid-template-columns: 120px 1fr;
		grid-template-rows: 5em;
	}
	.branding {
		grid-column: 1;
		justify-self: center;
	}
	.overlay {
		/* display: block; */
		width: 100%;
		grid-row: 1;
		grid-column: 3/-1;
		background-color: var(--nav-background);
		/* backdrop-filter: var(--nav-backdrop-filter);
		backdrop-filter: blur(40.7742px); */
		backdrop-filter: blur(10.7742px);
		/* --nav-backdrop-filter: blur(40.7742px); */
		height: 100%;
		/* display: grid; */
		/* grid-template-rows: 120px calc(82vh - 120px); */
		/* grid-template-rows: auto;
		grid-template-columns: 0.2fr 1fr  120px;
		justify-content: end; */
		display: flex;
		align-items: center;
		padding: 0;
	}
	.mainNav {
		justify-self: end;
		display: flex;
		justify-content: center;
		align-items: center;
		/* gap: 2.8em; */
		gap: 1em;
		padding: 0 3em;
		height: 100%;
		/* 
		background-color: var(--nav-background);
		backdrop-filter: var(--nav-backdrop-filter); */
	}

	/* ------------------------------ */

	nav a {
		color: inherit;
		font-size: var(--fs-nav);
		letter-spacing: var(--letter-spacing-nav);
		padding: 1.8em 0.1em;
	}
	.mobileNav__link--number{
		display: none;
	}
	nav a.router-link-exact-active {
		color: var(--color-text);
		border: 0;
		border-bottom: 3px solid #fff;
	}

	nav a.router-link-exact-active:hover {
		background-color: transparent;
	}
}
@media screen and (min-width: 750px) {
	.mainNav {
		/* gap: 2.5em; */
		padding: 0 3em;
	}
}
@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.nav {
		display: grid;
		grid-template-columns: 100px  4fr 0.2fr 5.2fr 80px;
		grid-row: auto;
		align-items: center;
		
		position: fixed;
		position: absolute;
		left: 0;
		top: 1.5em;
		/* height: 100%; */
		padding: 0;
	}
	.branding {
		grid-column: 1;
		grid-row: 1;
		width: 3em;
		height: 3em;
	}
	/* .branding img {
		width: inherit;
		height: inherit;
	} */
	.line {
		display: block;
		grid-row: 1;
		grid-column: 2/4;
		width: 100%;
		height: 2px;
		background-color: rgba(255, 255, 255, 0.1);
		z-index: 99;
	}
	.overlay {
		/* display: block; */
		/* width: 100%; */
		grid-row: 1;
		grid-column: 3/-1;
		background-color: var(--nav-background);
		backdrop-filter: var(--nav-backdrop-filter);
		height: 100%;

		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 0.2fr 1fr  80px;
		justify-content: end;
		overflow: hidden;
		position: relative;
	}
	/* .mainNav */
	.mainNav {
		/* width: 60%; */
		grid-row: 1;
		grid-column: 2;
		/* background-color: transparent;
		backdrop-filter: none; */
		padding: 0;

		justify-self: end;

		/* justify-content: end; */
		/* background-color: red; */
		/* background-color: green; */
		gap: 1.5em;

		display: flex;

	}
	.mainNav li {
		height: 100%;
	}
	.mainNav a {
		/*  */
		display: flex;
		gap: .5em;
		align-items: center;
		height: 100%;
		border-bottom: 3px solid transparent;
		font-size: 14px;
		letter-spacing: 1px;
	}
	.mobileNav__link--number{
		display: inline-block;
	}

	/* !============================================================ */
	/* !============================================================ */
	/* ============================================= */
	/* ============================================= */
	/* !============================================================ */
	/* !============================================================ */

	
}
@media (min-width: 1100px) {
	.nav {
		grid-template-columns: 130px  4fr 0.2fr 5.2fr 100px;
	}
	.overlay {
		grid-template-columns: 0.2fr 1fr  100px;
	}
	.mainNav {
		gap: 2em;
	}
}
@media (min-width: 1200px) {
	.nav {
		grid-template-columns: 150px  4fr 0.2fr 5.2fr 150px;
	}
	.mainNav {
		gap: 3em;
	}
	.overlay {
		grid-template-columns: 0.2fr 1fr  150px;
	}
}
</style>
