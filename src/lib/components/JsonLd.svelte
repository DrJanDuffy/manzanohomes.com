<script lang="ts">
import type { Thing, WithContext } from 'schema-dts';

export let schema: WithContext<Thing> | WithContext<Thing>[];

// Handle single or multiple schemas
$: schemas = Array.isArray(schema) ? schema : [schema];

// Stringify for injection
$: jsonLdString = schemas
  .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}<\/script>`)
  .join('');
</script>

<svelte:head>
  {@html jsonLdString}
</svelte:head>
