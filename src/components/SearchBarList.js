import { h } from 'hyperapp'

export default (props) =>
  <div>
    {props.state.filteredCountries.map((item) =>
      <div>{item.name}</div>
    )}
  </div>
