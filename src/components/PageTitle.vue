<template>
	<h3 class="subheading subheading__others is-subheading">
		<span class="subheading__number">{{ number }}</span>
		{{ title }}
	</h3>
</template>

<script>
export default {
	name: "PageTitle",
	props: {
		title: {
			type: String,
		},
		number: {
			type: Number,
		},
	},
};
</script>

<style lang="scss" scoped></style>
