<template>
    <v-sheet rounded="sm" color="light-blue-lighten-5" class="sheet d-flex flex-column mb-2 pa-6">
        <div class="main-info d-flex flex-row">
            <div class="name">
                {{ employee.full_name }}
            </div>
            <div class="inn">
                ИНН {{ employee.inn }}
            </div>
            <div class="contract">
                {{ employee.type_contract.slug }}
            </div>
            <div class="position-name">
                {{ employee.position.name }}
            </div>

        </div>

        <div class="additional-info d-flex flex-row">
            <div class="passport d-flex flex-row">
                <img class="country-icon" :src="employee.country.icon" alt="">
                <span class="country-slug"> {{ employee.country.slug }}</span>
                <span class="passport-number"> {{ employee.passport }}</span>
            </div>
            <div class="line"></div>
            <span class="additional-text">{{ employee.address }}</span>
            <div class="line"></div>
            <span class="additional-text">Дата рождения: {{ employee.birth }}</span>
            <div class="line"></div>
            <span class="additional-text">Возраст: {{ employee.age }} год(а)</span>
            <div class="line"></div>
            <span class="additional-text">Пол: {{ employee.gender.title }} </span>
        </div>
        <div class="d-flex flex-row">

            <v-sheet rounded="sm" class="px-2 py-1" :style="`background: ${employee.status.tag.color};`">
                <span class="text-white">{{ employee.status.description }} </span>
            </v-sheet>
        </div>

    </v-sheet>
</template>

<script setup>
/* eslint-disable */

const props = defineProps(['employee'])

</script>

<style lang="scss">
.sheet {
    gap: 15px;
}

.main-info {
    gap: 20px;
}

.additional-info {
    gap: 15px;
}

.passport {
    gap: 10px;
}

.line {
    border: 1px solid #CEDAE6;
}
</style>
