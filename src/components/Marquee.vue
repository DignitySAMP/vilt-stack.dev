<template>
  <div class="relative flex overflow-hidden select-none bg-white dark:bg-stone-800">
		<div class="flex animate-marquee whitespace-nowrap gap-8">
			<div v-for="i in 4">
				<slot />
			</div>
		</div>

		<div class="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white dark:from-stone-800 to-transparent"/>
		<div class="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white dark:from-stone-800 to-transparent"/>
  	</div>
</template>

<style scoped>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-25%);
		}
	}

	.animate-marquee {
		display: flex;
		animation: marquee 30s linear infinite;
		will-change: transform;
	}
</style>
