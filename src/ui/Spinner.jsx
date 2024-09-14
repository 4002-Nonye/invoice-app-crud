function Spinner({ size }) {
  return <div className={`spinner ${size ? "w-7" : "w-16 my-12"}`}></div>;
}

export default Spinner;
