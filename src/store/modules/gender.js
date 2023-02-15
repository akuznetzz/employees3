const state = {
    gender: [
        {
            id: 1,
            title: 'Мужской',
            slug: 'М'
        },
        {
            id: 2,
            title: 'Женский',
            slug: 'Ж'
        }
    ]
}

const getters = {
    genders(state) {
        return state.gender
    }
}

export default {
    state, getters
}