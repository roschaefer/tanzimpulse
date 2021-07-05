<script>
  export let id;
</script>

<div class="tab w-full overflow-hidden pb-2">
  <input class="absolute opacity-0 " {id} type="checkbox" name="tabs" />
  <label class="block leading-normal cursor-pointer text-2xl px-2" for={id}><slot name="headline" /></label>
  <div class="tab-content overflow-hidden leading-normal">
    <div class="px-2 py-4">
      <p>
        <slot name="content" />
      </p>
    </div>
  </div>
</div>

<style>


  .tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.5s;
    -o-transition: max-height 0.5s;
    transition: max-height 0.5s;
  }
  /* :checked - resize to full height */
  .tab input:checked ~ .tab-content {
    max-height: 100vh;
  }

  label {
    position: relative;
    border-bottom: 2px solid rgb(243, 244, 246);
    font-weight: 300;
    line-height: 1.5em;
    padding-top:0.25em;
    padding-bottom:0.25em;
    padding-right:1.5em;
  }

  /* Icon */
  .tab label::after {
    position: absolute;
    float: right;
    color: #1f3266;
    right: 0;
    top: 0.15em;
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    font-size: 2rem;
    line-height: 1.3em;
    text-align: center;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  /* Icon formatting - closed */
  .tab input[type='checkbox'] + label::after {
    content: '>';
  }
  .tab input[type='checkbox']:checked + label::after {
    transform: rotate(90deg);
  }
</style>
