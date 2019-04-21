export default {
  getCountries: (countries) => state =>
    ({...state,
      countries: countries
    }),
  filterCountries: (input) => state =>
    ({...state,
      filteredCountries: state.countries.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()))
    })
}
