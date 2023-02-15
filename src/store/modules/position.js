const state = {
    position: [
        {
            id: 1,
            name: 'Промышленный альпинист'
        },
        {
            id: 2,
            name: 'Токарь'
        },
        {
            id: 3,
            name: 'Пекарь'
        },
    ]
}

const getters = {
    positions(state) {
        return state.position
    }
}

export default {
    state, getters
}