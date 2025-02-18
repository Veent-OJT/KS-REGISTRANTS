<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';

  onMount(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
</svelte:head>

<div class="min-h-screen bg-white text-gray-900">
	<slot />
</div>
