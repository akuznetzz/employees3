<template>
  <v-container class="container mx-auto">

    <v-row class="main-row">
      <v-col cols="8">
        <v-sheet rounded="sm" color="white" flat class="d-flex flex-column py-7" elevation="1">
          <v-sheet class="px-7 pb-7">
            <v-text-field density="compact" label="Поиск сотрудника" append-inner-icon="mdi-magnify" persistent-hint
              hint="Например, Иванов Иван" v-model="searchName"></v-text-field>
          </v-sheet>
          <v-divider></v-divider>
          <v-card flat class="pa-8">
            <v-card-title class="pa-0">Список сотрудников</v-card-title>

            <TagsList class="py-5" />

            <EmployeeCart v-for="employee, index in computedEmployees" :employee="employee" :key="index" />
            <div class="d-flex flex-row justify-center">
              <v-btn v-if="computedEmployees.length > getAmount" variant="outlined" prepend-icon="mdi-cached"
                color="#2A358C" @click="increaseAmount()">
                Показать ещё
              </v-btn>
            </div>

          </v-card>

        </v-sheet>
      </v-col>
      <v-col cols="4">
        <v-sheet rounded="lg" color="white" elevation="1">
          <v-sheet class="pa-7">
            <add-employee />
          </v-sheet>
          <v-divider></v-divider>
          <FiltersForm />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
/* eslint-disable */
import addEmployee from '@/components/AddEmployee';
import FiltersForm from '@/components/FiltersForm';
import TagsList from '@/components/Tags/TagsList.vue';
import EmployeeCart from '@/components/EmployeeCart.vue';


import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { mapGetters, mapMutations } from '@/libs/storeLib';

const store = useStore()
const { employees, getFilter, getTags, getAmount, isFiltred } = mapGetters()
const { increaseAmount } = mapMutations()

const searchName = ref('')

const computedEmployees = computed(() => {
  let result = [...employees.value]
  if (isFiltred.value) {
    result = employees.value.filter(item => item.country_id === getFilter.value.country_id ||
      item.gender_id === getFilter.value.gender_id ||
      item.position_id === getFilter.value.position_id ||
      getFilter.value.contract.includes(item.type_contract_id)
    )
  }

  if (getTags.value.length) {
    result = result.filter(item => getTags.value.includes(item.status.tag_id))
  }

  store.commit('setComputedLength', result.length)


  result = result.filter((item, index) => index <= getAmount.value)


  // if (searchName.value) result = employees.value.find(item => item.full_name.toLowerCase().includes(searchName.value.toLowerCase()))

  return result


})

</script>

<style>
.container {
  max-width: 1820px;
}

.v-text-field .v-input__details {
  padding-left: 0;
}
</style>
