<script>
   import Icon from '@iconify/svelte';
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

<label class="swap swap-flip">
   <input id="langCheck" type="checkbox" bind:checked on:change={handleChange} />
   <div class="swap-on">
      <Icon icon="emojione:flag-for-vietnam" class="h-12 w-12" />
   </div>
   <div class="swap-off">
      <Icon icon="emojione:flag-for-united-kingdom" class="w-12 h-12" />
   </div>
</label>
