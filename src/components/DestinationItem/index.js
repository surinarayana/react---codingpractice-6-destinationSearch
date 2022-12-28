// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  // for single image output  practice

  //   <div className="destination-item">
  //     <img
  //       src="https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png"
  //       className="image"
  //     />
  //     <p className="destination-name">Image Name</p>
  //   </div>

  //   const {destinationDetails} = props

  //   const {imgUrl, name} = destinationDetails
  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
