<script>
import { dataTheme } from "@store/DataStore";
import { locale } from "@store/i18n";
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
            <span class="text-lg font-bold">Language: </span>
            {$locale === 'vi' ? 'Tiếng Việt' : 'English'}
         </div>
      </div>
      <div class="modal-action">
         <button class="btn">Close</button>
      </div>
   </form>
</dialog>
