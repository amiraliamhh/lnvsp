<script>
  export let variant = 'success'
  export let timeout = 4
  export let open = false

  let isOpen = open

  const close = () => {
    isOpen = false
  }
</script>

{#if isOpen}
  <div class={`alert alert--${variant}`}>
    <h3>Success!</h3>
    <p>Data was saved successfully.</p>
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
