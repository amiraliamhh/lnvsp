<script>
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()

  export let variant = 'success'
  export let timeout = 4
  export let open = false
  export let message = null

  $: {
    if (open) {
      setTimeout(() => {
        dispatch('close')
      }, timeout * 1e3);
    }
  }

  const close = () => {
    dispatch('close')
  }
</script>

{#if open}
  <div class={`alert alert--${variant}`}>
    <h3>{variant === 'success' ? 'Success :)' : 'Failure :('}</h3>
    <p>{message}</p>
    <button class="alert__close" on:click={close}>
      X
    </button>
  </div>
{/if}

<style lang="scss">
.alert {
  width: 80%;
  min-height: 4rem;
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 8px;
  padding: 1rem;

  * {
    color: white;
  }

  &--success {
    background: green;
  }

  &--danger {
    background: red;
  }

  &__close {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    font-weight: bold;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
}
</style>
