import { h } from 'hyperapp'

function renderCountry (item) {
  return (
    <ul className='country'>
      <lh>{ item.name }</lh>
      <li className='detailCountry'>
        <span className='spanTitle'>Capital</span>
        <span>{ item.capital }</span>
      </li>
      <li className='detailCountry latlng'>
        <span className='spanTitle'>Lat</span>
        <span>{ item.latlng[0] }</span>
        <span className='spanTitle'>Long</span>
        <span>{ item.latlng[1] }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Area</span>
        <span>{ item.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }km&#xB2;</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Population</span>
        <span>{ truncateNumber(item.population) }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Population Density</span>
        <span>{ (item.population / item.area).toFixed(2) }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Language</span>
        <span>{ item.languages[0]['name'] }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Gini</span>
        <span>{ item.gini }</span>
      </li>
      <li className='detailCountry'>
        <span className='spanTitle'>Currencies</span>
        <span>{ item.currencies[0]['name'] }</span>
      </li>
    </ul>)
}

const truncateNumber = x => {
  if (x > 999999999) return x.toString().substring(0, 1) + '.' + x.toString().substring(1, 2) + 'B'
  if (x > 999999) return x.toString().substring(0, 1) + '.' + x.toString().substring(1, 2) + 'M'
  if (x > 999) return x.toString().substring(0, 1) + '.' + x.toString().substring(1, 2) + 'K'
  return x.toString()
}

export default (props) =>
  <div className='countriesList_content' onclick={() => { console.log(props.state) }}>
    { props.state.countries.map((item) => item.checked ? renderCountry(item) : console.log()) }
  </div>
