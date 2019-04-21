import { h } from 'hyperapp'
function renderItem (item, props) {
  return (<div key={item.numericCode}>
    <p>{item.name}</p>
    <input onchange={ () => props.actions.toggleCountry(item.numericCode) } type='checkbox' checked={item.checked ? 'checked' : ''}/>
  </div>)
}
export default (props) =>
  <div>
    {props.state.countries.map((item) => item.includes && item.startsWith && renderItem(item, props))}
    {props.state.countries.map((item) => item.includes && !item.startsWith && renderItem(item, props))}
  </div>
