// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  render() {
    const {destinationList} = this.props

    return (
      <div className="bg-container">
        <div className="destination-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input className="input-search" type="search" />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-icon"
              className="image-icon"
            />
          </div>

          <ul>
            {destinationList.map(eachDestination => (
              <DestinationItem
                destinationDetails={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
