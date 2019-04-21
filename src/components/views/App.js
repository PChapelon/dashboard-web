import { h } from 'hyperapp'
import SearchBar from '../SearchBar'

const dataURL = 'https://restcountries.eu/rest/v2/all'

function initCountries (actions) {
  fetch(dataURL).then(res => res.json()).then((res) => actions.getCountries(res))
}

export default (state, actions) =>
  <div oncreate={() => initCountries(actions)}>
    <SearchBar state={state} actions={actions}/>
  </div>
