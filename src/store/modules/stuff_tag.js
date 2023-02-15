const state = {
    stuff_tag: [
        {
            id: 1,
            title: 'Критический',
            slug: 'crit',
            color: '#E52E2E',
            backgroundColor: '#FFF8F8',
        },
        {
            id: 2,
            title: 'Проблемный',
            slug: 'problem',
            color: '#E2BD06',
            backgroundColor: '#FFFDF1',
        },
        {
            id: 3,
            title: 'Есть замечания',
            slug: 'mistake',
            color: '#00B6ED',
            backgroundColor: '#F3FCFF',
        },
        {
            id: 4,
            title: 'Выполнено',
            slug: 'done',
            color: '#00AE5B',
            backgroundColor: '#F2FFF9'
        },
    ]
}

const getters = {
    stuff_tags(state) {
        return state.stuff_tag
    }
}

export default {
    state, getters
}