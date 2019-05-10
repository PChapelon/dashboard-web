import _ from 'lodash'

export default {
  setInputValue: (inputValue) => state =>
    ({...state,
      inputValue: inputValue.trim()
    }),
  setInputFocus: (focus) => state =>
    ({...state,
      inputFocus: focus
    }),
  getCountries: (countries) => state =>
    ({...state,
      countries: countries
    }),
  resetCountries: () => state =>
    ({...state,
      inputValue: '',
      nbSelectedCountries: 0,
      countries: state.countries.map((item) => ({...item, checked: false, includes: false, startsWith: false})),
      order: {
        lastProperty: 'name',
        lastOrder: 'asc'
      }
    }),
  filterCountries: () => state =>
    ({...state,
      countries: state.countries
        .map((item) => item.name.toLowerCase().includes(state.inputValue.toLowerCase()) ? {...item, includes: true} : {...item, includes: false})
        .map((item) => item.name.toLowerCase().startsWith(state.inputValue.toLowerCase()) ? {...item, startsWith: true} : {...item, startsWith: false})
    }),
  toggleCountry: (numericCode) => state =>
    ({...state,
      countries: state.countries.map((item) => item.numericCode === numericCode ? {...item, checked: !item.checked} : item)
    }),
  countSelectedCountries: () => state =>
    ({...state,
      nbSelectedCountries: state.countries.reduce((acc, item) => (item.checked === true) ? acc + 1 : acc, 0)
    }),
  sortBy: (context) => state => {
    const order = (context.property === state.order.lastProperty) ? ((context.sameOrder === true) ? state.order.lastOrder : ((state.order.lastOrder === 'desc') ? 'asc' : 'desc')) : 'asc'
    const sortedItem = _.orderBy([...state.countries].filter((item) => item.checked === true), [context.property], [order])
    return ({
      ...state,
      order: {
        lastProperty: context.property,
        lastOrder: order
      },
      countries: state.countries.map((item) => item.checked === true ? {...item, index: sortedItem.findIndex((sorted) => item.numericCode === sorted.numericCode)} : {...item})
    })
  }
}
