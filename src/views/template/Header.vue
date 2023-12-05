<template>
    <fwb-navbar>
        <template #logo>
            <h1 class="text-xl font-bold" @click="$router.push('/')">Recipe Application</h1>
        </template>
        <template #right-side>
            <fwb-button @click="$router.push('/')">
                Home
            </fwb-button>
        </template>
    </fwb-navbar>
</template>

<script setup>
import {
    FwbButton,
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
} from 'flowbite-vue'
</script>

<style></style>