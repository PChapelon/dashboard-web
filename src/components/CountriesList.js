import { h } from 'hyperapp'
import Country from '../components/Country'

export default (props) =>
  <div className='countriesList'>
    <Country state={props.state} actions={props.actions} />
  </div>
