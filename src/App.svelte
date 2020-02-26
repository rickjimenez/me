<script>
  import { fly } from "svelte/transition";
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import { GitlabIcon, CodeIcon } from "svelte-feather-icons";
  import axios from "axios";
  import BinaryWelcome from "./BinaryWelcome.svelte";
  import BinaryQuote from "./BinaryQuote.svelte";

  let src = "images/rick.svg";
  let me = "Rick Jimenez";
  let name = "";
  let visible = false;
  let disabled = false;
  let promise;

  const handleClick = () => {
    if (name.length === 0) notifier.warning("Please type your name!", 3000);
    else {
      disabled = true;
      const url =
        "https://us-central1-rick-d3a8c.cloudfunctions.net/api/getResume";
      //const url = "http://localhost:5001/rick-d3a8c/us-central1/api/getResume";
      promise = axios({
        url, //your url
        method: "GET",
        responseType: "blob",
        params: {
          name: name.toUpperCase()
        }
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "rick-resume.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
        disabled = false;
      });
    }
  };

  setTimeout(() => {
    visible = true;
  }, 100);
</script>

<style type="text/scss">
  .app {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .center {
      max-width: 700px;
      text-align: center;
    }
    input {
      width: 125px;
    }
    .img-r {
      width: 100%;
      height: auto;
    }
    font-size: 20px;
    small {
      font-family: "HelveticaNowThin";
    }
  }
</style>

<NotificationDisplay />

{#if visible}
  <main class="app" transition:fly={{ y: 200, duration: 2000 }}>
    <div class="center">
      <BinaryWelcome visible={true} />
      <img {src} alt={me} />
      <span>Hi,</span>
      <input bind:value={name} placeholder="Your Name" maxlength="8" />
      <span>I'm Baking some interesting code stuff, but you can</span>
      <button on:click={handleClick} {disabled}>
        {#await promise}
          Generating my resume for you...
        {:then number}
          Download my resume meanwhile.
        {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
      </button>
      <span>also you can check my</span>
      <button on:click={() => window.open('https://gitlab.com/richjimenez')}>
        <GitlabIcon size="20" />
        GitLab profile
      </button>
      <br />
      <BinaryQuote visible={true} />
      <small>
        <CodeIcon size="16" />
      </small>
    </div>
  </main>
{/if}
