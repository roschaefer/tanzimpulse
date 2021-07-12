<script lang="ts">
  import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
  import SeminarForm from '$lib/components/SeminarForm/SeminarForm.svelte';
  import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';
  import Success from '$lib/components/Alerts/Success.svelte';
  import Error from '$lib/components/Alerts/Error.svelte';
  import { base } from '$app/paths';
  export let seminar: {};
  export let errors = [];
  export let anmeldung = null;

  let isPending = false;

  const pending = () => {
    isPending = true;
  };
  const error = async (res: Response, error: Error) => {
    isPending = false;
    errors.push(error);
    if (res) errors.push(await res.text());
  };
  const result = async (res: Response) => {
    isPending = false;
    const {
      data: { teilnehmer },
      errors: graphQLErrors
    } = await res.json();
    if (graphQLErrors) errors.push(...graphQLErrors);
    anmeldung = teilnehmer;
  };
  const action = `${base}/${seminar.format}/${seminar.url}/anmeldung.json`;
</script>

<section>
  <div class="container mx-auto flex flex-col md:flex-row gap-10">
    <div class="__long_description flex-1 ">
      <SeminarCard {seminar}>
        <div slot="beschreibung">
          <p class="py-6">
            {@html seminar.beschreibung.html}
          </p>
          <p class="text-black py-2">
            <span class="uppercase tracking-widest text-xs title-font font-medium text-gray-600">Kursgebühr</span><br>{seminar.preis} Euro
          </p>
          
          <VeranstaltungsOrt veranstaltungsort={seminar.veranstaltungsort} />
        </div>
      </SeminarCard>
    </div>

    <div class="__registration flex-1">



      {#if errors.length}
        <Error />
      {:else if isPending}
      <div class="flex justify-center items-center">
      <p class="text-ti_blue_accent mr-4 py-4"> 
        <svg xmlns="http://www.w3.org/2000/svg" class="ti_animate-spin h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

    </p>
    <h2 class="ti_headline_blue_bold">Lädt ...</h2>
    </div>
 

      {:else if anmeldung}
        <Success />
      {:else}
        <SeminarForm {action} {result} {error} {pending} />
      {/if}

    </div>
  </div>
</section>
