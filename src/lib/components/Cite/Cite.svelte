<script lang="ts">
  import { base } from '$app/paths';

  export let imgAttributes = {
    src: `${base}/images/employees/default.jpg`,
    alt: 'Tanzimpulse - Institut für Tanzimpulse'
  };
</script>

<div class="flex flex-col w-full pt-14 pb-12 px-4 lg:px-8 ">
  <img class="w-24 h-24 mx-auto mb-4 rounded-full" {...imgAttributes} alt="Kundenrückmeldung" />
  <p class="mx-auto px-10 uppercase font-bold tracking-widest text-gray-500 text-sm"><slot name="name" /></p>

  <cite class="mx-auto py-6 text-ti_blue_mat text-2xl lg:text-3xl font-light not-italic">
    <slot name="cite" />
  </cite>
</div>
