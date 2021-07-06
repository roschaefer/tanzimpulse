<script context="module" lang="ts">
  import { base } from '$app/paths';
</script>

<div role="alert">
  <div class="flex w-full flex-col p-4 sm:p-6 md:p-8 lg:p-10 bg-ti_green_mat text-black shadow-ti">
    <h2 class="text-3xl uppercase font-bold text-white tracking-wide text-center mb-4">Gesendet</h2>
    <p class="text-center text-white pb-2">Das hat geklappt. Sie erhalten in den nächsten Minuten eine Bestätigung per E-Mail. Wenn Sie keine Nachricht erhalten haben, schauen Sie bitte auch einmal in Ihrem Spamordner nach.</p>
    <p>Falls Sie wider Erwarten keine Bestätigung erhalten, <a sveltekit:prefetch href="{base}/kontakt">kontaktieren Sie uns</a> bitte direkt.</p>
  </div>
</div>


