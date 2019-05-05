import { h } from 'hyperapp'

export default (props) =>
  <div className='sortCheckbox'>
    <form>
      <label for='sortPopulation'>Sort by population</label>
      <input type='radio' name='sort' id="sortPopulation" value="sortPopulation" onchange={ () => { props.actions.sortByPopulation() }}/>
      <label for='sortGini'>Sort by gini</label>
      <input type='radio' name='sort' id="sortGini" value="sortGini" onchange={ () => props.actions.sortByGini() }/>
    </form>
  </div>