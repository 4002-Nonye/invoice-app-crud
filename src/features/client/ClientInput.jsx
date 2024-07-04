function ClientInput() {
  return (
    <>
      <h4 className="pt-7 font-bold text-lightblue-300">Bill To</h4>
      <label htmlFor="client-name" className="label">
        Client&apos;s Name
      </label>
      <input
        type="text"
        name="client-name"
        id="client-name"
        value="Adanma"
        className="input"
      />
      <label htmlFor="client-email" className="label pt-4">
        Client&apos;s Email
      </label>
      <input
        type="text"
        name="client-email"
        id="client-email"
        value="eg: example@gmail.com"
        className="input"
      />
      <label htmlFor="client-address" className="label pt-4">
        Client&apos;s Address
      </label>
      <input
        type="text"
        name="client-address"
        id="client-address"
        value="London, south west"
        className="input"
      />{" "}
      <div className="flex items-center gap-5 flex-wrap pt-5">
        <div className="flex flex-col space-y-3 w-full md:w-[unset]">
          <label htmlFor="client-city" className="label">
            City
          </label>
          <input
            type="text"
            name="client-city"
            id="client-city"
            value="19 Union Terrace"
            className="input  w-full"
          />
        </div>

        <div className="flex flex-col space-y-3 w-full md:w-[unset]">
          <label htmlFor="client-postcode" className="label">
            Post Code
          </label>
          <input
            type="text"
            name="client-postcode"
            id="client-postcode"
            value="E1 3EZ"
            className="input  w-full"
          />
        </div>

        <div className="flex flex-col space-y-3 w-full md:w-[unset]">
          <label htmlFor="client-country" className="label">
            Country
          </label>
          <input
            type="text"
            name="client-country"
            id="client-country"
            value="United Kingdom"
            className="input w-full"
          />
        </div>
      </div>
    </>
  );
}

export default ClientInput;
