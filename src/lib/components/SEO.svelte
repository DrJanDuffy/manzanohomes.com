<script lang="ts">
import { ManzanoSchemas } from '$lib/seo/schemas';
import type { Thing, WithContext } from 'schema-dts';
import JsonLd from './JsonLd.svelte';

export let title: string;
export let description: string;
export const canonical: string | undefined = undefined;
export const image = '/og-default.jpg';
export const noindex = false;
export const schemas: WithContext<Thing>[] = [];

const schemaBuilder = new ManzanoSchemas();

// Always include organization schema
const baseSchemas = [schemaBuilder.organization()];

$: fullTitle = title.includes('Manzano') ? title : `${title} | Manzano Homes`;
$: allSchemas = [...baseSchemas, ...schemas];
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  
  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}
  
  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {/if}
  
  <!-- Open Graph -->
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={image} />
  {#if canonical}
    <meta property="og:url" content={canonical} />
  {/if}
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  
  <!-- Local Business -->
  <meta name="geo.region" content="US-NV" />
  <meta name="geo.placename" content="Las Vegas" />
  <meta name="geo.position" content="36.0839;-115.0891" />
  
  <!-- Additional Meta Tags -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0A2540" />
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Manifest -->
  <link rel="manifest" href="/manifest.json" />
</svelte:head>

<JsonLd schema={allSchemas} />