const Notification = ({ message, color}) => {

  const errorStyle = {
    color: color,
    background: 'lightgrey',
    fontSize: 20,
    border: '2px solid',
    borderRadius: '3px',
    borderradius: 5,
    padding: 10,
    marginbottom: 10,
  }

  if (message === null) {
    return null
  }

  return (
    <div style={errorStyle}>
      {message}
    </div>
  )
}
export default Notification