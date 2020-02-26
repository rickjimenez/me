<script>
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';

  const API = "https://rickandmortyapi.com/api/character";

  let count = 0;
  let data = [];
  let characters = [];

  onMount(async () => {
    const res = await fetch(API);
    data = await res.json();
    characters = data.results;
  });
  console.log(count);
</script>

<style>
  .characters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
  figure,
  img {
    width: 100%;
    margin: 0;
  }
</style>

<div class="characters">
  {#each characters as character, i}
    <figure transition:fade="{{delay: 100 * i }}">
      <img src={character.image} alt={character.name} />
      <figcaption>{character.name}</figcaption>
    </figure>
  {:else}
    <p>loading...</p>
  {/each}
</div>
