<template>
    <v-card class="pa-7" flat>
        <v-card-title class="pl-0">
            Фильтр
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="6" class="pl-0">
                    <div>Гражданство</div>
                    <v-select :items="countries" item-value="id" item-title="title" label="Все страны"
                        v-model="filter.country_id"></v-select>

                </v-col>
                <v-col cols="6" class="pr-0">
                    <div>Пол</div>
                    <v-select :items="genders" item-value="id" item-title="title" v-model="filter.gender_id"
                        label="Без разницы"></v-select>
                </v-col>
                <v-col cols="12" class="pa-0">
                    <div>Должность</div>
                    <v-select :items="positions" item-value="id" item-title="name" label="Все должности"
                        v-model="filter.position_id"></v-select>
                </v-col>
                <v-col cols="12" class="pb-5">
                    <v-row>
                        <div>Тип договора</div>
                    </v-row>
                    <v-row class="checkbox__row" v-for="contract in type_contracts" :key="contract.id">
                        <input class="checkbox__box" type="checkbox" :value="contract.id" :name="contract.slug"
                            v-model="filter.contract">
                        <label class="checkbox__label" :for="contract.slug"> {{ contract.slug }}</label>
                    </v-row>
                </v-col>

            </v-row>
        </v-card-text>
        <v-divider></v-divider>

        <v-row class="pt-5">
            <v-col>
                <v-btn size="large" block color="#00AE5B" class="text-white" @click="accept">Применить</v-btn>
            </v-col>
            <v-col>
                <v-btn size="large" block color="#84909B" class="text-white" @click="clear">Очистить</v-btn>
            </v-col>
        </v-row>

    </v-card>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue';
import { mapGetters } from '@/libs/storeLib'
import { useStore } from 'vuex';

const store = useStore()
const { type_contracts, countries, genders, positions } = mapGetters()

const filter = ref({
    contract: []
})

function accept() {
    store.commit('setFilter', filter.value)
    store.commit('filtred')
}

function clear() {
    filter.value.position_id = filter.value.gender_id = filter.value.country_id = null
    filter.value.contract = []
    store.commit('setFilter', filter.value)
    store.commit('notFiltred')

}
</script>

<style>
.checkbox__row {
    gap: 8px;
}
</style>