<template>
    <div
        class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img class="rounded-t-lg w-full" :src="imgUrl" :alt="item.Image_Name" @load="imageLoad" />
        <fwb-spinner size="10" v-if="isLoading" class="rounded-t-lg w-full" />
        <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {{ item.Title }}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {{ textLimit(item.Instructions, 100) }}
            </p>
            <fwb-button color="default" @click="$router.push(`/recipe/${item.id}`)">See More -></fwb-button>
        </div>
    </div>
</template>

<script setup>
import { FwbButton, FwbSpinner } from 'flowbite-vue';
import { computed, defineProps, ref } from 'vue';
const props = defineProps(['item']);
const imgName = ref([props.item.Image_Name])
const isLoading = ref(true)

const imageLoad = () => {
    isLoading.value = false
}

const textLimit = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'
    }
    return text
}
const imgUrl = computed(() => {
    return '/assets/food-image/' + imgName.value + '.jpg'
})

</script>