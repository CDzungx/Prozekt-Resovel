<script>
   import { onMount } from 'svelte';
   import { setting } from '@store/i18n';

   onMount(() => {
      const lang = localStorage.getItem('locale') || 'en';
      setting.set(lang);
   });
</script>

<div class="langSel hidden md:flex">
   <select class="VNFont select select-bordered select-md sm:select-sm" bind:value={$setting}>
      <option value="en" class="text-base font-semibold">English</option>
      <option value="vi" class="text-base font-semibold">Tiếng Việt</option>
   </select>
</div>

<style>
   .VNFont {
      font-family: 'Trebuchet MS', sans-serif;
   }
</style>
