<template>
	<div class="crew">Crew Page</div>
</template>

<script>
export default {
	name: "CrewView",
	setup() {},
};
</script>

<style scoped>
.crew {
	background-image: url(@/assets/images/crew/background-crew-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.crew {
		background-image: url(@/assets/images/crew/background-crew-tablet.jpg);
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.crew {
		background-image: url(@/assets/images/crew/background-crew-desktop.jpg);
	}
}
</style>
