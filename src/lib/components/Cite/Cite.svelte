<script lang="ts">
  import { base } from '$app/paths';

  export let imgAttributes = {
    src: `${base}/images/employees/default.jpg`,
    alt: 'Tanzimpulse - Institut für Tanzimpulse'
  };
</script>

<div class="___cite flex flex-col w-full py-12 px-4 lg:px-8 ">
  <img class="w-24 h-24 mx-auto mb-4 rounded-full" {...imgAttributes} />
  <p class="___author mx-auto px-8 uppercase tracking-widest text-warmGray-700 font-bold text-sm"><slot name="name" /></p>

  <cite class="mx-auto py-6 text-ti_blue_mat text-3xl font-light not-italic">
    <slot name="cite" />
  </cite>
</div>
