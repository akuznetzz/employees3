const state = {
    country: [
        {
            id: 1,
            title: 'Россия',
            slug: 'RU',
            icon: './static/ru_flag.svg'
        },
        {
            id: 2,
            title: 'Таджикистан',
            slug: 'TJ',
            icon: './static/tj_flag.svg'
        },
        {
            id: 3,
            title: 'Узбекистан',
            slug: 'UZ',
            icon: './static/tj_flag.svg'
        },
    ]
}

const getters = {
    countries(state) {
        return state.country
    }
}

export default {
    state, getters
}