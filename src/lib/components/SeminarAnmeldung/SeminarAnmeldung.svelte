<script lang="ts">
  import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
  import SeminarForm from '$lib/components/SeminarForm/SeminarForm.svelte';
  import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
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
          <VeranstaltungsOrt veranstaltungsort={seminar.veranstaltungsort} />
        </div>
      </SeminarCard>
    </div>

    <div class="__registration flex-1">


      
      {#if errors.length}
        <Error />
      {:else if isPending}
        Pending...
      {:else if anmeldung}
        <Success />
      {:else}
        <SeminarForm {action} {result} {error} {pending} />
      {/if}

    </div>
  </div>
</section>
