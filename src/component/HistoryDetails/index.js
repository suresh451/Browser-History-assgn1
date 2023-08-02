import './index.css'

const HistoryDetails = props => {
  const {historyDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="history-content">
        <div className="inner-img1">
          <p>{timeAccessed}</p>
          <div className="inner-img">
            <img src={logoUrl} className="app-img" alt="domain logo" />
            <p className="head">{title}</p>
            <p>{domainUrl} </p>
          </div>
        </div>
        <div>
          <button
            className=""
            type="button"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="app-img"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryDetails
