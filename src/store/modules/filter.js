const state = {
    filter: [
        {
            country_id: 0,
            gender_id: 0,
            position_id: 0,
            contract: []
        }
    ],
    tags: [],
    amount: 3,
    isFiltred: false,
    computedLength: 0,

}

const getters = {
    getFilter(state) {
        return state.filter[0]
    },
    getTags(state) {
        return state.tags
    },
    getAmount(state) {
        return state.amount
    },
    isFiltred(state) {
        return state.isFiltred
    }
}

const mutations = {
    setFilter(state, payload) {
        state.filter.pop()
        state.filter.push(payload)
    },

    setTags(state, payload) {
        state.tags = [...payload]
    },
    increaseAmount(state) {
        state.amount += 4
    },
    filtred(state) {
        state.isFiltred = true
    },
    notFiltred(state) {
        state.isFiltred = false
    },
    setComputedLength(state, payload) {
        state.computedLength = payload
    }

}

export default {
    state, getters, mutations
}