<script context="module" lang="ts">
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Accordion from '$lib/components/Accordion/Accordion.svelte';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Philosophie</title>
</svelte:head>

<section>
  <div class="container">
    <div class="flex w-full lg:w-1/2">
      <DefaultCard>
        <h2 class="ti_headline_blue_bold mb-4">Unsere Arbeit – unser Ziel</h2>
        <p class="py-2">
          <Accordion id="1">
            <span slot="headline">Erfahrung seit 1994</span>
            <div slot="content">
              <p class="pb-6">Wir vermitteln seit 1994 Tanz als ureigenste Ausdrucksform des Menschen. Unser Ziel ist es, Tanz in traditioneller, multikultureller und moderner Form in Schul- , Berufsalltag und Freizeit zu etablieren. In allen Schulformen und in Kindertageseinrichtungen soll Tanz als eigenständiges Fach im Rahmen der ästhetischen und kulturellen Bildung vermittelt werden.</p>
            </div>
          </Accordion>

          <Accordion id="2">
            <span slot="headline">Praxisorientiert</span>
            <div slot="content">
              <p class="pb-6">Unser Ziel ist es, methodisch/didaktisches Handwerkszeug am Beispiel verschiedener Tanzrichtungen an Multiplikatoren*innen zu vermitteln. Unsere Zusatzqualifikation und die Fortbildungs-Workshops richten sich an Tanzinteressierte aus pädagogischen, sozialen, therapeutischen Arbeitsfeldern, aus Vereinen und anderen Kinder- + Jugendfreizeiteinrichtungen und aus der Erwachsenenbildung. Oberste Priorität ist es, tanzbegeisterten Menschen zu einer solide Tanzbasis zu verhelfen und sie in eigenen kreativen Tanz- + Bewegungsprozessen zu bestärken, ein eigenes Thema zu finden und dies im beruflichen oder auch Freizeit-Bereich einzubinden oder um eine Selbständigkeit mit einem individuellen Konzept anzustreben.</p>
            </div>
          </Accordion>

          <Accordion id="3">
            <span slot="headline">Kreativ-Potenzial</span>
            <div slot="content">
              <p class="pb-6">Unser Ziel ist es, dass unsere Teilnehmenden tänzerisches Vorbild werden und die Fähigkeit entwickeln, kreativen Potentialen in ihren Zielgruppen Raum zu geben im Sinne der ästhetischen und kulturellen Bildung.</p>
            </div>
          </Accordion>

          <Accordion id="4">
            <span slot="headline">Anregungen und Bedürfnisse</span>
            <div slot="content">
              <p class="pb-6">Unser Konzept wird regelmäßig überarbeitet und im Team abgesprochen, sodass wir unsere Zusatz- Qualifikationen aktualisieren und unser Angebot erweitern.</p>
            </div>
          </Accordion>

          <Accordion id="5">
            <span slot="headline">Kompetentes Team</span>
            <div slot="content">
              <p class="pb-6">Wir arbeiten mit dem Ziel, alle Teilnehmende entsprechend ihrer individuellen Fähigkeiten zu fördern und zu beraten. Über eine langjährige Zusammenarbeit sind wir zusammengewachsen und legen großen Wert auf intensiven Austausch.</p>
            </div>
          </Accordion>

          <Accordion id="6">
            <span slot="headline">Bewährte Qualitätskriterien</span>
            <div slot="content">
              <p class="pb-6">Als Mitglied der Qualitätsgemeinschaft Berufliche Bildung Region Köln e.V. haben wir uns den Qualitätsstandards der Qualitätsgemeinschaft Berufliche Bildung Region Köln verpflichtet. Die geeignete Qualitätsverfahren werden bei Tanzimpulse und in unseren Weiterbildungen eingesetzt. Hierzu erfolgen in unregelmäßigen Abständen Überprüfungen.</p>
            </div>
          </Accordion>

          <Accordion id="7">
            <span slot="headline">Netzwerke</span>
            <div slot="content">
              <p class="pb-6">Wir arbeiten mit Partnern zusammen die zu Informationsaustausch, Ergänzung und Erweiterung unseres Angebotes führen. Durch die Kooperation mit dem <a class="hyperlink" href="https://www.anders-tanzen.de/" target="_blank">Verein AndersTanzen – ästhetische und kulturelle Bildung im Tanz e.V</a> bringen wir Tanzpädagogen/innen aus unseren Ausbildungen und andere Tanzvermittler/innen und Vermittler/innen anderer Künste in Projekte, in denen sie ihre tänzerischen Schwerpunktthemen, bzw. ihren Schwerpunkt Musik, Theater, Bildende Kunst etc. umsetzen.</p>
            </div>
          </Accordion>
        </p>

        <p class="pt-10">Wir freuen uns, auf einen regen Austausch und interessante Tanzerlebnisse mit allen Weiterbildungs- und Tanzinteressierten (m/w/d).</p>
        <p class="pt-4">Bettina Bierdümpel (Künstlerische Leitung) und Ute Luckey (Geschäftsführung)</p>
      </DefaultCard>
    </div>
  </div>
</section>
