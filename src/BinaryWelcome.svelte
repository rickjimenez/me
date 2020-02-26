<script>
  export let visible = false;
  function typewriter(node, { speed = 10 }) {
    const valid =
      node.childNodes.length === 1 && node.childNodes[0].nodeType === 3;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

<style type="text/scss">
  p {
    font-family: "HelveticaNowThin", sans-serif;
    font-size: 14px;
    color: #9e9e9e;
  }
</style>

{#if visible}
  <p in:typewriter>
    01010111 01100101 01101100 01100011 01101111 01101101 01100101
  </p>
{/if}
