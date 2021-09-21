<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Videos</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div class="shadow-ti">
        <div class="aspect-w-16 aspect-h-9">
          <iframe title="Wuppertal Tanzen" src="https://www.youtube.com/embed/cwjuiZZPtT0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
      <div class="shadow-ti">
        <div class="aspect-w-16 aspect-h-9">
          <iframe title="Werkschau der Ausbaustufe A 21" src="https://www.youtube.com/embed/sReA6W5qvIk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
      <div class="shadow-ti">
        <div class="aspect-w-16 aspect-h-9">
          <iframe title="25 Jahre Tanzimpulse in Köln" src="https://www.youtube.com/embed/mngbGH_dJmE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </div>
  </div>
</section>
