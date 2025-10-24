<template>
	<div class="min-h-screen w-screen bg-stone-50 dark:bg-stone-900 overflow-x-hidden">
		<div class="container mx-auto max-w-4xl bg-white dark:bg-stone-800 shadow-sm dark:border-x dark:border-stone-700">
			<Marquee>
				<div class="flex items-center gap-8 py-6">
					<div class="px-4 flex items-center gap-3 font-bold text-emerald-600">
						<LogoVue class="w-7 h-7"/>
						<span>Vue.js</span>
					</div>
					<div class="px-4 flex items-center gap-3 font-bold text-teal-500">
						<LogoTailwind class="w-8 h-8"/>
						<span>Tailwind CSS</span>
					</div>
					<div class="px-4 flex items-center gap-3 font-bold text-indigo-600">
						<LogoInertia class="w-8 h-8"/>
						<span>Inertia.js</span>
					</div>
					<div class="px-4 flex items-center gap-3 font-bold text-red-400">
						<LogoLaravel class="w-8 h-8"/>
						<span>Laravel</span>
					</div>
				</div>
			</Marquee>
	
			<div class="p-12 flex flex-col gap-8 relative">
				<div class="absolute w-full flex items-center justify-end gap-4 top-4 right-4">
					<a href="https://github.com/DignitySAMP/vilt-stack" class="hover:scale-125 cursor-pointer transition duration-200 text-stone-800 dark:text-stone-300">
						<IconGithub/>
					</a>
					<a href="https://packagist.org/packages/dignitysamp/viltstack" class="hover:scale-125 cursor-pointer transition duration-200 text-stone-800 dark:text-stone-300">
						<IconPackagist/>
					</a>
					<div @click="toggleTheme" class="text-stone-800 dark:text-stone-300">
						<span v-if="isDark === false" class="hover:scale-125 hover:text-amber-500 cursor-pointer transition duration-200">
							<IconLightmode/>
						</span>
						<span v-else class="hover:scale-125 hover:text-sky-500 cursor-pointer transition duration-200">
							<IconDarkmode/>
						</span>
					</div>
				</div>
		
				<div class="w-full flex flex-col gap-4 text-stone-700 dark:text-stone-300">
					<span class="w-full text-center text-sm dark:text-stone-300">Bundle the simplicity of Vue 3 and Tailwind with the power of Laravel 12 and Inertia.js.</span>


					<h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100">Introduction</h2>

					<span class="w-full leading-relaxed">
						This template provides a fresh Laravel installation with Vue 3 and Tailwind set up out of the box. Inertia.js is configured to tie it all together with ziggy.js.
					</span>

					<span class="w-full leading-relaxed">
						Remniscent of Laravel 11's Breeze starter template, it is a clean entry point for any full stack application without the extra bloat of authentication and without the need to configure things yourself.
					</span>
				</div>

				<div class="flex flex-col gap-4">
					<h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100"> Installation</h2>
					
					<div class="relative">
						<pre class="bg-stone-900 text-stone-100 dark:border dark:border-stone-700 p-6 rounded-lg font-mono text-sm overflow-x-auto"><code>laravel new my-app --using=dignitysamp/viltstack</code></pre>
						<button 
							@click="copyToClipboard"
							class="absolute top-4 right-4 p-2 rounded-md bg-stone-800 hover:bg-stone-700 transition-colors"
							:class="{ 'text-emerald-500': copied, 'text-stone-400': !copied }"
						>
							<IconCheck v-if="copied" class="w-5 h-5"/>
							<IconCopy v-else class="w-5 h-5"/>
						</button>
					</div>
		
					<div class="pl-4 border-l-4 border-stone-200 dark:border-stone-700 flex flex-col gap-3 text-stone-600 dark:text-stone-400">
						<p>→ Paste in your terminal and follow the Laravel installer wizard</p>
						<p>→ Run <code class="px-2 py-1 bg-stone-100 dark:bg-stone-900 rounded text-sm font-mono">npm run dev</code> and <code class="px-2 py-1 bg-stone-100 dark:bg-stone-900 rounded text-sm font-mono">php artisan serve</code> and you're all set</p>
					</div>
				</div>
	
				<div class="flex flex-col gap-6 pt-4">
					<h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100">What's Included</h2>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					
						<div class="flex flex-col gap-3 p-6 border border-stone-200 dark:border-stone-600 dark:bg-stone-900 rounded-lg hover:border-emerald-300 transition-colors">
							<div class="flex items-center gap-3">
								<LogoVue class="w-8 h-8 text-emerald-600"/>
								<h3 class="text-lg font-semibold text-stone-900 dark:text-stone-100">Vue 3</h3>
							</div>
							<p class="text-sm text-stone-600 dark:text-stone-300">The progressive JavaScript framework with Composition API support.</p>
							<a href="https://vuejs.org/" target="_blank" class="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
								Documentation <IconExternalLink class="w-4 h-4"/>
							</a>
						</div>
			
						<div class="flex flex-col gap-3  p-6 border border-stone-200 dark:border-stone-600 dark:bg-stone-900 rounded-lg hover:border-indigo-400 transition-colors">
							<div class="flex items-center gap-3">
								<LogoInertia class="w-8 h-8 text-indigo-600"/>
								<h3 class="text-lg font-semibold text-stone-900  dark:text-stone-100">Inertia.js</h3>
							</div>
							<p class="text-sm text-stone-600 dark:text-stone-300">Build modern single-page apps using classic server-side routing.</p>

							<a href="https://inertiajs.com/" target="_blank" class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
								Documentation <IconExternalLink class="w-4 h-4"/>
							</a>
						</div>
			
						<div class="flex flex-col gap-3 p-6 border border-stone-200 dark:border-stone-700 dark:bg-stone-900 rounded-lg hover:border-red-400 transition-colors">
							<div class="flex items-center gap-3">
								<LogoLaravel class="w-8 h-8 text-red-500"/>
								<h3 class="text-lg font-semibold text-stone-900 dark:text-stone-100">Laravel</h3>
							</div>
							<p class="text-sm text-stone-600 dark:text-stone-300">The PHP framework for web artisans with elegant syntax.</p>
							<a href="https://laravel.com/" target="_blank" class="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-medium">
								Documentation <IconExternalLink class="w-4 h-4"/>
							</a>
						</div>
			
						<div class="flex flex-col gap-3 p-6 border border-stone-200 dark:border-stone-700 dark:bg-stone-900 rounded-lg hover:border-teal-300 transition-colors">
							<div class="flex items-center gap-3">
								<LogoTailwind class="w-8 h-8 text-teal-500"/>
								<h3 class="text-lg font-semibold text-stone-900 dark:text-stone-100">Tailwind CSS</h3>
							</div>
							<p class="text-sm text-stone-600 dark:text-stone-300">A utility-first CSS framework for rapidly building custom designs.</p>
							<a href="https://tailwindcss.com/" target="_blank" class="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 font-medium">
								Documentation <IconExternalLink class="w-4 h-4"/>
							</a>
						</div>

						<div class="flex flex-col gap-3 p-6 border border-stone-200 dark:border-stone-700 dark:bg-stone-900 rounded-lg hover:border-amber-400 transition-colors md:col-span-2">
							<div class="flex items-center gap-3">
								<div class="rounded-full w-8 h-8 bg-stone-800 text-amber-500">
									<LogoZiggy/>
								</div>
								<h3 class="text-lg font-semibold text-stone-900 dark:text-stone-100">Ziggy.js</h3>
							</div>
							<p class="text-sm text-stone-600 dark:text-stone-300">								
								Seemlessly use Laravel named routes in JavaScript.
							</p>
							<a href="https://github.com/tighten/ziggy/" target="_blank" class="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-medium">
								Documentation <IconExternalLink class="w-4 h-4"/>
							</a>

						</div>
					</div>
				</div>
	
				<div class="pt-8  border-t border-stone-200 dark:border-stone-700  text-stone-400 dark:text-stone-500 flex w-full justify-between text-center items-center">
					<p class="flex gap-1 items-center">Landing page powered by <LogoVue class="w-4 h-4"/> and <LogoTailwind class="w-6 h-6"/></p>
					<p class="">Maintained with ❤️ by Davy L</p>
				</div>
	
			</div>
		</div>
	</div>
</template>
  
<script setup lang="ts">
	import { ref, computed } from 'vue';

	import { useTheme } from '@/composables/useTheme';
	const { theme, toggleTheme } = useTheme();

	import Marquee from '@/components/Marquee.vue';
	
	import LogoInertia from '@/icons/LogoInertia.vue';
	import LogoLaravel from '@/icons/LogoLaravel.vue';
	import LogoTailwind from '@/icons/LogoTailwind.vue';
	import LogoZiggy from '@/icons/LogoZiggy.vue';
	
	import LogoVue from '@/icons/LogoVue.vue';
	import IconCopy from '@/icons/IconCopy.vue';
	import IconCheck from '@/icons/IconCheck.vue';
	import IconExternalLink from '@/icons/IconExternalLink.vue';
	import IconGithub from '@/icons/IconGithub.vue';
	import IconPackagist from '@/icons/IconPackagist.vue';
	import IconLightmode from '@/icons/IconLightmode.vue';
	import IconDarkmode from '@/icons/IconDarkmode.vue';

	const copied = ref<boolean>(false);

	const copyToClipboard = async (): Promise<void> => {
		try {
			await navigator.clipboard.writeText('laravel new my-app --using=dignitysamp/viltstack');
			copied.value = true;

			setTimeout(() => {
				copied.value = false;
			}, 2000);
		} 
		catch (err: unknown) {
			console.error('Failed to copy:', err);
		}
	};

	const isDark = computed(() => {
		if (theme.value === 'system') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		return theme.value === 'dark';
	});
</script>
