import { h } from 'hyperapp'

function renderCountry (item, props) {
  return (
    <ul className='country' style={{order: item.index}}>
      <lh className='country__title'>
        <div className='country__detailOrder' onclick={ () => { props.actions.sortBy({ property: 'name', sameOrder: false }) }}><i className='material-icons'>unfold_more</i></div>
        <span className='country__titleText'>{ item.name }</span>
        <span className='country__titleFlag' style={{backgroundImage: 'url(https://www.countryflags.io/' + item.alpha2Code.toLowerCase() + '/flat/64.png)'}}></span>
      </lh>
      <li className='country__detail'>
        <span className='country__detailTitle'>Capital</span>
        <span>{ item.capital }</span>
      </li>
      <li className='country__detail latlng'>
        <span className='country__detailTitle'>Lat</span>
        <span>{ Math.round(item.latlng[0] * 100) / 100 }</span>
        <span className='country__detailTitle'>Long</span>
        <span>{ Math.round(item.latlng[1] * 100) / 100 }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Area</span>
        <span>{ item.area === null ? 'NOT SPECIFIED' : item.area } km<sup>2</sup></span>
      </li>
      <li className='country__detail ordered'>
        <div className='country__detailOrder' onclick={ () => { props.actions.sortBy({ property: 'population', sameOrder: false }) }}><i className='material-icons'>unfold_more</i></div>
        <div className='country__detailText'>
          <span className='country__detailTitle'>Population</span>
          <span>{ item.population }</span>
        </div>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Population Density</span>
        <span>{ item.population === null || item.area === null ? 'NOT SPECIFIED' : (item.population / item.area).toFixed(2) }</span>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Language</span>
        <span>{ item.languages[0]['name'] }</span>
      </li>
      <li className='country__detail ordered'>
        <div className='country__detailOrder' onclick={ () => { props.actions.sortBy({ property: 'gini', sameOrder: false }) }}><i className='material-icons'>unfold_more</i></div>
        <div className='country__detailText'>
          <span className='country__detailTitle'>Gini</span>
          <span>{ item.gini === null ? 'NOT SPECIFIED' : item.gini }</span>
        </div>
      </li>
      <li className='country__detail'>
        <span className='country__detailTitle'>Currencies</span>
        <span>{ item.currencies[0]['name'] }</span>
      </li>
    </ul>)
}

export default (props) =>
  <div className='countriesList_content'>
    { props.state.countries.map((item) => item.checked && renderCountry(item, props)) }
  </div>
