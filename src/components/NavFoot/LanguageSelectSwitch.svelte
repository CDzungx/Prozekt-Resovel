<script>
   import { onMount } from 'svelte';
   import { setting } from '@store/i18n';

   let checked = setting === 'en';
   function handleChange(event) {
      setting.set(event.target.checked ? 'vi' : 'en');
   }
   let className;
   export { className as class };

   onMount(() => {
      const lang = localStorage.getItem('locale') || 'en';
      if (lang === 'vi') {
         checked = true;
      }
   });
</script>

<div class="form-control grid-flow-col">
   <label class="label cursor-pointer">
      <input
         id="langCheck"
         aria-label="language"
         type="checkbox"
         class="toggle"
         bind:checked
         on:change={handleChange} />
      <span class="label-text text-base font-medium" style="font-family: 'Trebuchet MS', sans-serif;">
         {checked ? 'Tiếng Việt' : 'English'}
      </span>
   </label>
</div>

<style>
   .label-text {
      font-family: 'Trebuchet MS', sans-serif;
   }
</style>
