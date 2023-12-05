<template>
  <Header />
  <div class="container mx-auto mt-4">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
import Header from './views/template/Header.vue';
import Footer from './views/template/Footer.vue';
import { useRecipeStore } from './stores/recipe';

const recipeStore = useRecipeStore();

</script>
