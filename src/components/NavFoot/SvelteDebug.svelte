<script>
   import { onMount } from 'svelte';
   import { dataTheme, hasClickedStartButton } from '@store/DataStore';
   import { locale } from '@store/i18n';

   onMount(() => {
      if (localStorage.getItem('hasClickedStartButton') === 'true') {
         hasClickedStartButton.set('true');
      }
   });
</script>

<dialog id="debugModal" class="modal">
   <form method="dialog" class="modal-box">
      <p class="self-center pb-5 text-4xl font-extrabold">Debug Info</p>
      <div>
         <div class="prose">
            <span class="text-lg font-bold">Data-Theme: </span>
            {$dataTheme}
         </div>
         <div class="prose">
            <span class="text-lg font-bold">Has Start Button Clicked: </span>
            {$hasClickedStartButton}
         </div>
         <div class="prose">
            <span class="text-lg font-bold">Language: </span>
            {$locale === 'vi' ? 'Tiếng Việt' : 'English'}
         </div>
      </div>
      <div class="modal-action">
         <button class="btn">Close</button>
      </div>
   </form>
</dialog>
