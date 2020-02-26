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
    01110100 01101000 01101001 01101110 01101011 00100000 01100100 01101001
    01100110 01100110 01100101 01110010 01100101 01101110 01110100 00100000
    01100001 01101110 01100100 00100000 01100011 01110010 01100101 01100001
    01110100 01100101
  </p>
{/if}
