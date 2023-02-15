<template>
    <v-sheet class="tags d-flex flex-row">
        <v-chip :variant="variant" color="#B0BCC7" @click="showAll">Весь список</v-chip>
        <TagItem :tag="tag" v-for="tag in stuff_tags" :key="tag.id" :allTags="allTags" @activeTags="activeTags" />
    </v-sheet>
</template>

<script setup>
/* eslint-disable */
import TagItem from '@/components/Tags/TagItem.vue';
import { mapGetters } from '@/libs/storeLib';
import { ref } from 'vue';
import { useStore } from 'vuex';


const store = useStore()
const allTags = ref(true)
const selectedTags = ref([])
const { stuff_tags } = mapGetters()

const variant = ref('elevated')


function showAll() {
    allTags.value = true
    variant.value = 'elevated'
    selectedTags.value = []
    store.commit('setTags', selectedTags.value)
}

function activeTags(data) {
    allTags.value = false
    variant.value = 'outlined'

    if (selectedTags.value.includes(data)) {
        const index = selectedTags.value.indexOf(data)
        selectedTags.value.splice(index, 1)
    } else {
        selectedTags.value.push(data)
    }
    if (!selectedTags.value.length) allTags.value = true

    store.commit('setTags', selectedTags.value)
}


</script>

<style >
.tags {
    gap: 10px;
}
</style>