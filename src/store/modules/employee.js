const state = {
    employee: [

        {
            full_name: 'Иванов Иван Иванович',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 1,
                title: 'Трудовой договор',
                slug: 'ТД'
            },
            type_contract_id: 1,
            gender: {
                id: 1,
                title: 'Мужской',
                slug: 'М'
            },
            gender_id: 1,
            country: {
                id: 1,
                title: 'Россия',
                slug: 'RU',
                icon: './static/ru_flag.svg'
            },
            country_id: 1,
            position: {
                id: 1,
                name: 'Промышленный альпинист'
            },
            position_id: 1,
            status: {
                tag_id: 1,
                tag: {
                    id: 1,
                    title: 'Критический',
                    slug: 'crit',
                    color: '#E52E2E',
                    backgroundColor: '#FFF8F8',
                },
                description: 'All docs expired'
            }
        },
        {
            full_name: 'Смирнова Наталья Петровна',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 2,
                title: 'Договор гражданско-правового характера',
                slug: 'ГПХ'
            },
            type_contract_id: 2,
            gender: {
                id: 2,
                title: 'Женский',
                slug: 'Ж'
            },
            gender_id: 2,
            country: {
                id: 2,
                title: 'Таджикистан',
                slug: 'TJ',
                icon: './static/tj_flag.svg'
            },
            country_id: 2,
            position: {
                id: 2,
                name: 'Токарь'
            },
            position_id: 2,
            status: {
                tag_id: 2,
                tag: {
                    id: 2,
                    title: 'Проблемный',
                    slug: 'problem',
                    color: '#E2BD06',
                    backgroundColor: '#FFFDF1',
                },
                description: 'Патент заканчивается'
            }
        },
        {
            full_name: 'Тимашук Матвей Патефонович',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 3,
                title: 'Самозанятость',
                slug: 'СМЗ'
            },
            type_contract_id: 3,
            gender: {
                id: 1,
                title: 'Мужской',
                slug: 'М'
            },
            gender_id: 1,
            country: {
                id: 3,
                title: 'Узбекистан',
                slug: 'UZ',
                icon: './static/tj_flag.svg'
            },
            country_id: 3,
            position: {
                id: 3,
                name: 'Пекарь'
            },
            position_id: 3,
            status: {
                tag_id: 4,
                tag: {
                    id: 4,
                    title: 'Выполнено',
                    slug: 'done',
                    color: '#00AE5B',
                    backgroundColor: '#F2FFF9'
                },
                description: 'All fine'
            }
        },
        {
            full_name: 'Иванов Иван Иванович',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 1,
                title: 'Трудовой договор',
                slug: 'ТД'
            },
            type_contract_id: 1,
            gender: {
                id: 1,
                title: 'Мужской',
                slug: 'М'
            },
            gender_id: 1,
            country: {
                id: 1,
                title: 'Россия',
                slug: 'RU',
                icon: './static/ru_flag.svg'
            },
            country_id: 1,
            position: {
                id: 1,
                name: 'Промышленный альпинист'
            },
            position_id: 1,
            status: {
                tag_id: 1,
                tag: {
                    id: 1,
                    title: 'Критический',
                    slug: 'crit',
                    color: '#E52E2E',
                    backgroundColor: '#FFF8F8',
                },
                description: 'All docs expired'
            }
        },
        {
            full_name: 'Смирнова Наталья Петровна',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 2,
                title: 'Договор гражданско-правового характера',
                slug: 'ГПХ'
            },
            type_contract_id: 2,
            gender: {
                id: 2,
                title: 'Женский',
                slug: 'Ж'
            },
            gender_id: 2,
            country: {
                id: 2,
                title: 'Таджикистан',
                slug: 'TJ',
                icon: './static/tj_flag.svg'
            },
            country_id: 2,
            position: {
                id: 2,
                name: 'Токарь'
            },
            position_id: 2,
            status: {
                tag_id: 2,
                tag: {
                    id: 2,
                    title: 'Проблемный',
                    slug: 'problem',
                    color: '#E2BD06',
                    backgroundColor: '#FFFDF1',
                },
                description: 'Патент заканчивается'
            }
        },
        {
            full_name: 'Тимашук Матвей Патефонович',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 3,
                title: 'Самозанятость',
                slug: 'СМЗ'
            },
            type_contract_id: 3,
            gender: {
                id: 1,
                title: 'Мужской',
                slug: 'М'
            },
            gender_id: 1,
            country: {
                id: 3,
                title: 'Узбекистан',
                slug: 'UZ',
                icon: './static/tj_flag.svg'
            },
            country_id: 3,
            position: {
                id: 3,
                name: 'Пекарь'
            },
            position_id: 3,
            status: {
                tag_id: 4,
                tag: {
                    id: 4,
                    title: 'Выполнено',
                    slug: 'done',
                    color: '#00AE5B',
                    backgroundColor: '#F2FFF9'
                },
                description: 'All fine'
            }
        },
        {
            full_name: 'Иванов Иван Иванович',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 1,
                title: 'Трудовой договор',
                slug: 'ТД'
            },
            type_contract_id: 1,
            gender: {
                id: 1,
                title: 'Мужской',
                slug: 'М'
            },
            gender_id: 1,
            country: {
                id: 1,
                title: 'Россия',
                slug: 'RU',
                icon: './static/ru_flag.svg'
            },
            country_id: 1,
            position: {
                id: 1,
                name: 'Промышленный альпинист'
            },
            position_id: 1,
            status: {
                tag_id: 1,
                tag: {
                    id: 1,
                    title: 'Критический',
                    slug: 'crit',
                    color: '#E52E2E',
                    backgroundColor: '#FFF8F8',
                },
                description: 'All docs expired'
            }
        },
        {
            full_name: 'Смирнова Наталья Петровна',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 2,
                title: 'Договор гражданско-правового характера',
                slug: 'ГПХ'
            },
            type_contract_id: 2,
            gender: {
                id: 2,
                title: 'Женский',
                slug: 'Ж'
            },
            gender_id: 2,
            country: {
                id: 2,
                title: 'Таджикистан',
                slug: 'TJ',
                icon: './static/tj_flag.svg'
            },
            country_id: 2,
            position: {
                id: 2,
                name: 'Токарь'
            },
            position_id: 2,
            status: {
                tag_id: 2,
                tag: {
                    id: 2,
                    title: 'Проблемный',
                    slug: 'problem',
                    color: '#E2BD06',
                    backgroundColor: '#FFFDF1',
                },
                description: 'Патент заканчивается'
            }
        },
        {
            full_name: 'Тимашук Матвей Патефонович',
            inn: '123456789',
            passport: '40 00 123456',
            address: 'Saint-Petersburg',
            birth: '01.01.1970',
            age: 53,
            type_contract: {
                id: 3,
                title: 'Самозанятость',
                slug: 'СМЗ'
            },
            type_contract_id: 3,
            gender: {
                id: 1,
                title: 'Мужской',
                slug: 'М'
            },
            gender_id: 1,
            country: {
                id: 3,
                title: 'Узбекистан',
                slug: 'UZ',
                icon: './static/tj_flag.svg'
            },
            country_id: 3,
            position: {
                id: 3,
                name: 'Пекарь'
            },
            position_id: 3,
            status: {
                tag_id: 4,
                tag: {
                    id: 4,
                    title: 'Выполнено',
                    slug: 'done',
                    color: '#00AE5B',
                    backgroundColor: '#F2FFF9'
                },
                description: 'All fine'
            }
        },


    ]
}

const getters = {
    employees(state) {
        return state.employee
    }
}

const mutations = {
    addEmployee(state, payload) {
        state.employee = [{ ...payload }, ...state.employee]
    }
}

export default {
    state, getters, mutations
}