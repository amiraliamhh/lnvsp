<script>
  let content = ''
  let isvs = false

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
</script>

<div>
  <h1>Data Entry</h1>
  <form class="de__form" on:submit={handleSubmit}>
    <textarea placeholder="content..." bind:value={content} />
    <div>
      <label for="isvs">is VS: </label>
      <input type="checkbox" name="isvs" bind:checked={isvs} >
    </div>
    <button>
      Save
    </button>
  </form>
</div>

<style lang="scss">
// globals
* {
  color: #212121;
  box-sizing: border-box;
  font-family: sans-serif;
}

:global(body) {
  margin: 4rem;
}

.de {
  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;

    * {
      margin-bottom: 1.5rem;
    }

    textarea {
      height: 10rem;
      padding: 1rem;
      border-radius: 8px;
    }

    button {
      background-color: #219ebc;
      height: 3rem;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }
}
</style>
