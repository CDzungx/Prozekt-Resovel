<script>
   import { onMount } from 'svelte';
   import { setting } from '@store/i18n';

   let className;
   export { className as class };

   onMount(() => {
      const lang = localStorage.getItem('locale') || 'en';
      setting.set(lang);
   });
</script>

<div class="langSel hidden md:flex">
   <select class="VNFont select select-bordered select-md sm:select-sm" bind:value={$setting}>
      <option value="en" class="font-semibold text-base">English</option>
      <option value="vi" class="font-semibold text-base">Tiếng Việt</option>
   </select>
</div>

<style>
   .VNFont {
      font-family: 'Trebuchet MS', sans-serif;
   }
</style>
