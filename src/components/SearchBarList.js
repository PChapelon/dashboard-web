import { h } from 'hyperapp'

export default (props) =>
  <div>
    {props.state.countries.map((item) => (item.filtered) &&
      <div key={item.numericCode}>
        <p>{item.name}</p>
        <input onchange={ () => props.actions.toggleCountry(item.numericCode) } type='checkbox' checked={item.checked ? 'checked' : ''}/>
      </div>
    )}
  </div>
