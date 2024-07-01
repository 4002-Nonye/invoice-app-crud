function Items({ item }) {
  return (
    <div className="relative flex flex-col justify-between md:pb-0 pb-3 font-bold md:flex-row">
      <label className="label md:hidden">Item Name</label>
      <input
        className="input md:my-2 my-5 w-full text-darkblue-600 md:w-[19rem]"
        type="text"
        value="graphic design"
      />

      <div className="mb-7 inline-flex items-center gap-6 md:mb-0">
        <div className="flex flex-col">
          <label className="label md:hidden">Qty.</label>
          <input
            className="input w-16 text-darkblue-600"
            type="text"
            value={0}
          />
        </div>

        <div className="flex flex-col">
          <label className="label md:hidden">Price</label>
          <input
            className="input w-24 text-darkblue-600"
            type="text"
            value={10}
          />
        </div>
        <div className="flex flex-col">
          <p className="label md:hidden">Total</p>
          <p className="m-auto w-20 p-3 text-grey-100 md:p-0">
            {item.qty * item.price}
          </p>
        </div>

        <div className="absolute right-0 text-center">
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
