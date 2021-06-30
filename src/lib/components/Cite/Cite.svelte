<script lang="ts">
  import { base } from '$app/paths';



</script>



<div class="___cite flex flex-col w-full py-12 px-4 lg:px-8 ">
  <img class="w-24 h-24 mx-auto mb-4 rounded-full" src='{base}/images/employees/default.jpg' alt="Sabrina Wöhler | Tanzimpulse" />
  <p class="___author mx-auto px-8 uppercase tracking-widest text-warmGray-500 text-sm"><slot name="name"></slot></p>
  <cite class="mx-auto py-6 text-ti_blue_mat text-3xl font-light not-italic">
   <slot name="cite"></slot>
  </cite>
</div>