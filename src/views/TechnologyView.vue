<template>
	<div class="technology">
		<h1>This is an tech page</h1>
	</div>
</template>

<script>
export default {
	name: "TechnologyView",
	setup() {},
};
</script>

<style scoped>
.technology {
	background-image: url(@/assets/images/technology/background-technology-mobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;

	min-height: 100vh;
}
@media screen and (min-width: 700px) {
	:root {
		--fs-H: 80px;
		--fs-nav: 14px;
	}
	.technology {
		background-image: url(@/assets/images/technology/background-technology-tablet.jpg);
	}
}

@media (min-width: 992px) {
	:root {
		--fs-H: 80px;
		--line-height-H: 100px;
		--fs-nav: 14px;
	}
	.technology {
		background-image: url(@/assets/images/technology/background-technology-desktop.jpg);
	}
}
</style>
