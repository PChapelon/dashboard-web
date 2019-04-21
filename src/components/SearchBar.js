import { h } from 'hyperapp'
import SearchBarList from '../components/SearchBarList'

export default (props) =>
  <div>
    <input className="searchBar" type="text" placeholder="Add countries..." oninput={(e) => props.actions.filterCountries(e.target.value)}/>
    <div className="searchBar__list">
      <SearchBarList state={props.state}/>
    </div>
  </div>
