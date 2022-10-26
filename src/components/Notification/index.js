// Write your code here
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)

  return (
    <div className="card-icon-container">
      <div className="alert-card-container">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}
export default Notification
