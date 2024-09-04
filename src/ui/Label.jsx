/* eslint-disable react/prop-types */
import Error from "./Error"


function Label({label,error,htmlFor}) {
  return (
    <div className="errorDiv">
    <label htmlFor={htmlFor}  className={`label ${error && "errorText"}`}>
     {label}
    </label>
    {error && (
      <Error message={error} />
    )}
  </div>
  )
}

export default Label