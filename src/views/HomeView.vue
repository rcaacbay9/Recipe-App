<template>
  <h1 class="text-xl mb-5 ml-1">Recipe Name</h1>
  <Input v-model="recipeStore.search" />
  <div class="grid sm:grid-cols-3 md:grid-rows-1 mb-3" >
    <Card v-for="item in recipeStore.getRecipe" :key="item.id" :item="item" class="m-4" />
  </div>
  <div>
    <Pagination v-model="currentPage" :total-pages="recipeStore.getTotalPages" class="flex justify-end" @click="handleClick" />
  </div>
</template>
<script setup>
import Input from '../components/Input.vue';
import Card from '../components/Card.vue';
import Pagination from './Pagination.vue';
import { useRecipeStore } from '../stores/recipe';
import { onMounted, ref, watchEffect } from 'vue';

const recipeStore = useRecipeStore()
const currentPage = ref(1)

const handleClick = () => {
  recipeStore.getDataRecipe(currentPage.value)
}
watchEffect(() => {
  recipeStore.getDataRecipe(currentPage.value);
});
onMounted(async () => {
  await recipeStore.getDataRecipe(currentPage.value)
})
</script>
