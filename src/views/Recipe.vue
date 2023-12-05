<template>
    <div class="flex items-center justify-center">
        <div
            class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <div class="md:flex-shrink-0">
                <img class="h-96 w-full object-cover rounded-t-lg md:h-auto md:!rounded-none md:!rounded-l-lg" :src="imgUrl"
                    alt="" />
            </div>
            <div class="flex flex-col p-6 w-full md:w-3/4">
                <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {{ recipeStore.itemData.Title }}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Recipe:
                </p>
                <div class="grid grid-cols-2 gap-2 text-s text-neutral-500 dark:text-neutral-300">
                    <p v-for="ingredient in parseIngredients" :key="ingredient">
                        {{ ingredient }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <h3 class="text-xl font-bold pt-5 m-5">Instructions</h3>
    <p class="mb-4 mt-6 text-xl font-light leading-relaxed m-5">
        {{ recipeStore.itemData.Instructions }}
    </p>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useRecipeStore } from '../stores/recipe';
const recipeStore = useRecipeStore()
const route = useRoute()
const imgUrl = computed(() => {
    return '/dist/assets/food-image/' + recipeStore.itemData.Image_Name + '.jpg'
})
const parseIngredients = computed(() => {
    const ingredientsString = recipeStore.itemData.Ingredients;
    if (!ingredientsString) return [];

    const cleanedIngredients = ingredientsString.replace(/\[|\]|'/g, '');
    return cleanedIngredients.split(',').map((ingredient) => ingredient.trim());
});
console.log(recipeStore.itemData)
onMounted(async () => {
    await recipeStore.gotoData(route.params.id)
})

</script>