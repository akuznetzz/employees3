const state = {
    type_contract: [
        {
            id: 1,
            title: 'Трудовой договор',
            slug: 'ТД'
        },
        {
            id: 2,
            title: 'Договор гражданско-правового характера',
            slug: 'ГПХ'
        },
        {
            id: 3,
            title: 'Самозанятость',
            slug: 'СМЗ'
        },
        {
            id: 4,
            title: 'Кандидат',
            slug: 'Кандидат'
        }

    ]
}

const getters = {
    type_contracts(state) {
        return state.type_contract
    }
}

export default {
    state, getters
}