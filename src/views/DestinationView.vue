<template>
	<div class="destination">Destination Page</div>
</template>

<script>
export default {
	name: "DestinationView",
	setup() {},
};
</script>

<style scoped>
.destination {
	background-image: url(@/assets/images/destination/background-destination-mobile.jpg);

	background-size: cover;
	background-repeat: no-repeat;

	min-height: 100vh;
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.destination {
		background-image: url(@/assets/images/destination/background-destination-tablet.jpg);
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.destination {
		background-image: url(@/assets/images/destination/background-destination-desktop.jpg);
	}
}
</style>
