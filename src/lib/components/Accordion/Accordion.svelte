<<<<<<< HEAD
<div class="py-4">

  <!-- single accordion item -->
  <div class="tab w-full overflow-hidden pb-2">
    <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
    <label class="block leading-normal cursor-pointer text-3xl px-2" for="tab-multi-one">1. Die Grundstufen</label>
    <div class="tab-content overflow-hidden leading-normal">
      <div class="py-4">
        <h3 class="font-bold pt-4 pb-4">a) Grundstufe/Alters-und Zielgruppen übergreifend</h3>
        <p class="pb-8">in der einjährigen Grundstufenausbildung ist das Ziel die Vermittlung von Grundlagen in Tanzstilen wie Hip Hop, Moderner Tanz, Tanzimprovisation, Jazztanz und Afrikanischer Tanz; die Vermittlung von tanzpädagogischer Methoden-Vielfalt mit Praxisbezug; Tanz als Medium in der Arbeit mit Kindern, Jugendlichen, Erwachsenen/Senioren und in Inklusionsgruppen.</p>
        <h3 class="font-bold pb-4">b) Grundstufe/Schwerpunkt Kindertanz</h3>
        <p>für die Arbeit mit Kindern von U3 bis 11 Jahren</p>
        <p class="py-2">
          In dieser einjährigen Qualifikation steht die ästhetisch-kulturelle Bildung im Mittelpunkt. Visuell, auditiv und kinästhetisch werden die Verknüpfungen von Musik, Sprache und Tanz zur Unterstützung der kindlichen Entwicklung eingesetzt. Ausgangspunkt ist eine Tanzpädagogik, die sich an der altersgemäßen Entwicklung der Kinder orientiert. Tanz verbindet das Erkennen und Erfahren mit Erleben und Empfinden!
        </p>
        <p class="py-2">
        Nach erfolgreichem Abschluss einer Grundstufe wird ein Zertifikat erteilt, in dem Umfang und Inhalte der Zusatzqualifikation detailliert aufgeführt sind. Dies berechtigt zur Teilnahme an der Aufbaustufe.
        <br />
        Die Grundstufen a) + b) können unabhängig von den anderen Bausteinen als abgeschlossene Zusatzausbildung besucht werden.
      </p>
     </div>
    </div>
  </div>
  <!-- -->

  <!-- single accordion item -->
  <div class="tab w-full overflow-hidden pb-2">
    <input class="absolute opacity-0 " id="tab-multi-two" type="checkbox" name="tabs" />
    <label class="block leading-normal cursor-pointer text-3xl px-2" for="tab-multi-two">2. Die Aufbaustufen</label>
    <div class="tab-content overflow-hidden leading-normal">
      <div class="py-4">
<p>
  ...dienen den Tanzpädagogen/innen aller Grundstufen dazu, ihre persönlichen Schwerpunkte aus dem 1. Jahr individuell zu bearbeiten und zu trainieren. Tanztheorie, Tanzwissenschaft, Anatomie  + Körperarbeit werden vertieft; in einer Projektphase erprobt sich jede/r Teilnehmer/in als Tänzer/in, Choreograf/in oder Projektleitung.
</p>
  <p class="py-2">
Nach erfolgreichem Abschluss der Aufbaustufe wird ein Zertifikat erteilt, in dem Umfang und Inhalte der Tanzpädagogik-Ausbildung detailliert aufgeführt sind
      </p>
     </div>
    </div>
  </div>
  <!-- -->

  <!-- single accordion item -->
  <div class="tab w-full overflow-hidden pb-2">
    <input class="absolute opacity-0 " id="tab-multi-three" type="checkbox" name="tabs" />
    <label class="block leading-normal cursor-pointer text-3xl px-2" for="tab-multi-three">3. Die Aufbaustufe mit Diplom (TI)</label>
    <div class="tab-content overflow-hidden leading-normal">
      <div class="py-4">
 <p>
  ...beinhaltet die Auseinandersetzung mit einem selbstgewählten tanzwissenschaftlichen Thema, mit der Entwicklung eines eigenen tanzpädagogischen Profils sowie der Planung und Durchführung eines Workshops. Sie schließt mit einer Diplomarbeit und einem Colloquium ab.
</p>
<p class="py-2">
  Nach erfolgreichem Abschluss der Aufbaustufe mit Diplom (TI) wird eine Diplomurkunde (TI) erteilt.
      </p>
     </div>
    </div>
  </div>
  <!-- -->


</div>




<style>
  .tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.35s;
    -o-transition: max-height 0.35s;
    transition: max-height 0.35s;
  }
  /* :checked - resize to full height */
  .tab input:checked ~ .tab-content {
    max-height: 100vh;
  }
  /* Label formatting when open */
  .tab input:checked + label {
    /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
  }

  label {
    border-bottom: 2px solid rgb(243,244,246);
    font-weight: 300;
    line-height: 1.5em;
  }

  /* Icon */
  .tab label::after {
    float: right;
    color: #1F3266;
    right: 0;
    top: 0;
    display: block;
    width: 1.25em;
    height: 1.25em;
    font-size: 2rem;
    line-height: 1.3em;
=======
<div class="shadow-md">
  <div class="tab w-full overflow-hidden border-t">
    <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
    <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one">Label One</label>
    <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
      <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
    </div>
  </div>
  <div class="tab w-full overflow-hidden border-t">
    <input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs" />
    <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-two">Label Two</label>
    <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
      <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
    </div>
  </div>
  <div class="tab w-full overflow-hidden border-t">
    <input class="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs" />
    <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-three">Label Three</label>
    <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
      <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
    </div>
  </div>
</div>

<style>
  .tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.35s;
    -o-transition: max-height 0.35s;
    transition: max-height 0.35s;
  }
  /* :checked - resize to full height */
  .tab input:checked ~ .tab-content {
    max-height: 100vh;
  }
  /* Label formatting when open */
  .tab input:checked + label {
    /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
    font-size: 1.25rem; /*.text-xl*/
    padding: 1.25rem; /*.p-5*/
    border-left-width: 2px; /*.border-l-2*/
    border-color: #6574cd; /*.border-indigo*/
    background-color: #f8fafc; /*.bg-gray-100 */
    color: #6574cd; /*.text-indigo*/
  }
  /* Icon */
  .tab label::after {
    float: right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 1.25rem;
>>>>>>> 9adf0235a5cf98e7f4424c4347bbebb2a9ac99a4
    text-align: center;
    -webkit-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
  }
  /* Icon formatting - closed */
  .tab input[type='checkbox'] + label::after {
<<<<<<< HEAD
    content: '>';
  }
  .tab input[type='checkbox']:checked + label::after {
    transform: rotate(90deg);
  }
</style>

=======
    content: '+';
    font-weight: bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
  }
  .tab input[type='checkbox']:checked + label::after {
    transform: rotate(315deg);
    background-color: #6574cd; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
  }
</style>
>>>>>>> 9adf0235a5cf98e7f4424c4347bbebb2a9ac99a4
