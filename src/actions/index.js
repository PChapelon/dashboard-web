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
    })
}
