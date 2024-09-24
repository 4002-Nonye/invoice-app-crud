/* eslint-disable react/prop-types */
function Error({ message, children }) {
    return <span className="text-red-200">{message || children}</span>;
}

export default Error;
