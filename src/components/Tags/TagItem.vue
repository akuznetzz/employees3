<template>
    <v-chip :color="tag.color" :variant="variant" @click="activate">
        {{ tag.title }}
    </v-chip>

</template>

<script setup>
/* eslint-disable */

import { ref, watch } from 'vue'

const props = defineProps(['tag', 'allTags'])
const emit = defineEmits(['activeTags'])

const variant = ref('outlined')

function activate() {
    if (variant.value === 'outlined') variant.value = 'elevated'
    else variant.value = 'outlined'

    emit('activeTags', props.tag.id)
}

watch(() => props.allTags, (val) => {
    if (val) {
        variant.value = 'outlined'
    }
})


</script>


<style scoped>

</style>