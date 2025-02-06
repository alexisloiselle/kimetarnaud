<script setup lang="ts">
const text = `
Elle, c'est Kim et lui, c'est Arnaud.
Elle est petite, lui est plus grand.
Elle a les cheveux noirs, lui a les cheveux roux.
Elle ne prend pas de décision sans un tableau Excel, lui est spontané.
Elle aime rire, lui aime la faire rire.
Elle a besoin des moments seuls, lui ne veut jamais être tout seul.
Elle aime lui donner de l'affection quand il est occupé, lui aime l'énerver toute sa vie.
Elle est sassy, lui est cocky.
Elle est un moulin à parole à ses côtés, lui est un moulin à parole avec les autres.
Elle est la moitié douce, lui bien enfoui dans sa poitrine a le coeur gros comme l'univers.
Elle est devenue une "petite Moderie", lui dit "Chè Ba Màu".
Et, ensemble, nous aimons bien manger, voyager, et bouger.
Ensemble, nous aimons surtout donner et rassembler.
Ensemble, nous avons décidé de rassembler nos deux mondes.
Ensemble, nous avons décidé de continuer à grandir avec l'un et l'autre.
Ensemble, nous avons décidé de nous marier.

Nous avons été amis (pendant très longtemps, ceux qui savent, savent), ensuite des colocs et très bientôt nous allons être mariés. C'est donc avec beaucoup d'amour et de bonheur que nous vous invitons à partager ce moment unique à nos côtés.`
</script>

<template>
  <pre class="text-center text-md leading-7! whitespace-pre-wrap max-w-6xl px-4 story-text">
    {{ text }}
  </pre>
</template>

<style scoped>
.story-text {
  @media (width < 28rem) {
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 0.9rem;
    line-height: 0 !important;
  }
}
</style>
