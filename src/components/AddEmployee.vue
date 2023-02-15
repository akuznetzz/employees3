<template>
    <v-btn block size="large" color="#00B6ED" class="text-white" prepend-icon="mdi-account-plus-outline">
        <span> Добавить сотрудника</span>
        <v-dialog activator="parent" v-model="dialog">
            <v-sheet width="600" class="mx-auto">
                <v-form @submit.prevent class="ma-5">
                    <v-text-field label="ФИО" v-model="employee.full_name"></v-text-field>
                    <v-text-field label="ИНН" v-model="employee.inn"></v-text-field>
                    <v-text-field label="Адрес" v-model="employee.address"></v-text-field>
                    <v-text-field label="Паспорт" v-model="employee.pasport"></v-text-field>
                    <v-text-field label="Дата рождения" v-model="employee.birth"></v-text-field>
                    <v-text-field label="Возраст" v-model="employee.age"></v-text-field>
                    <v-select v-model="employee.type_contract_id" :items="type_contracts" item-title="title"
                        item-value="id" label="Тип договора"></v-select>
                    <v-select v-model="employee.gender_id" :items="genders" item-title="title" item-value="id"
                        label="Пол"></v-select>
                    <v-select v-model="employee.country_id" :items="countries" item-title="title" item-value="id"
                        label="Гражданство"></v-select>
                    <v-select v-model="employee.position_id" :items="positions" item-title="name" item-value="id"
                        label="Должность"></v-select>
                    <v-select v-model="employee.status.tag_id" :items="stuff_tags" item-title="title" item-value="id"
                        label="Статус"></v-select>
                    <v-text-field label="Описание статуса" v-model="employee.status.description"></v-text-field>


                    <v-btn type="submit" class="mt-2" @click="addEmployee">Submit</v-btn>
                    <v-btn type="submit" class="mt-2" @click="dialog = false">Close</v-btn>

                </v-form>
            </v-sheet>
        </v-dialog>
    </v-btn>
</template>

<script setup>
import { mapGetters } from '@/libs/storeLib'
import { ref } from 'vue'
import { useStore } from 'vuex';

const dialog = ref(false)
const store = useStore()
const { type_contracts, genders, countries, positions, stuff_tags } = mapGetters()
const employee = ref({
    status: ref({})
})

function addEmployee() {
    dialog.value = false

    employee.value.gender = genders.value.find(item => item.id === employee.value.gender_id)
    employee.value.country = countries.value.find(item => item.id === employee.value.country_id)
    employee.value.position = positions.value.find(item => item.id === employee.value.position_id)
    employee.value.type_contract = type_contracts.value.find(item => item.id === employee.value.type_contract_id)
    employee.value.status.tag = stuff_tags.value.find(item => item.id === employee.value.status.tag_id)

    store.commit('addEmployee', employee.value)

    for (let key in employee.value) {
        if (key !== 'status') { employee.value[key] = null }
        else { employee.value[key] = ref({}) }
    }
}

</script>
