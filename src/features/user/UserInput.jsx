function UserForm() {
  return (
    <>
      <h4 className="font-bold text-lightblue-300">Bill From</h4>
      <label htmlFor="user-address" className="label">
        Street Address
      </label>
      <input
        type="text"
        name="user-address"
        id="user-address"
        value="19 Union Terrace"
        className="input"
      />
      <div className="flex gap-5 pt-5 items-center">
        <div className="flex space-y-3 flex-col">
          <label htmlFor="user-city" className="label">
            City
          </label>
          <input
            type="text"
            name="user-city"
            id="user-city"
            value="19 Union Terrace"
            className="input"
          />
        </div>

        <div className="flex space-y-3 flex-col">
          <label htmlFor="user-postcode" className="label">
            Post Code
          </label>
          <input
            type="text"
            name="user-postcode"
            id="user-postcode"
            value="E1 3EZ"
            className="input"
          />
        </div>

        <div className="flex space-y-3 flex-col">
          <label htmlFor="user-country" className="label">
            Country
          </label>
          <input
            type="text"
            name="user-country"
            id="user-country"
            value="United Kingdom"
            className="input"
          />
        </div>
      </div>
    </>
  );
}

export default UserForm;
