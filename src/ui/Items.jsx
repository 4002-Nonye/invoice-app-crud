function Items({ item }) {
  return (
    <div className="flex items-start justify-between pb-3">
      <input className="input w-[19rem]" type="text" value="graphic design" />

      <div className="inline-flex gap-6">
        <input className="input w-16" type="text" value="qty" />
        <input className="input w-24" type="text" value="price" />
        <p className="left-0 right-0 m-auto w-20">{item.qty * item.price}</p>
        <div className="m-auto">
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Combined Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"
              fill="#888EB0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Items;
