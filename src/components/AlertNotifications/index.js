// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="card-icon success" />
      <div className="card-data-container">
        <h1 className="card-data-title success">Success</h1>
        <p className="card-data-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="card-icon error" />
      <div className="card-data-container">
        <h1 className="card-data-title error">Error</h1>
        <p className="card-data-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="card-icon warning" />
      <div className="card-data-container">
        <h1 className="card-data-title warning">Warning</h1>
        <p className="card-data-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="card-icon info" />
      <div className="card-data-container">
        <h1 className="card-data-title info">Info</h1>
        <p className="card-data-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="alert-container">
      <div className="app-container">
        <h1 className="alert-heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
