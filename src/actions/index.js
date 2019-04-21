export default {
  setInputValue: (inputValue) => state =>
    ({...state,
      inputValue: inputValue
    }),
  getCountries: (countries) => state =>
    ({...state,
      countries: countries
    }),
  filterCountries: () => state =>
    ({...state,
      countries: state.countries.map(item => item.name.toLowerCase().includes(state.inputValue.toLowerCase()) ? {...item, filtered: true} : {...item, filtered: false})
    }),
  toggleCountry: (numericCode) => state =>
    ({...state,
      countries: state.countries.map((item) => item.numericCode === numericCode ? {...item, checked: !item.checked} : item)
    })
}
