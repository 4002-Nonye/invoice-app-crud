function UserForm() {
  return (
    <>
      <h4 className="text-lightblue-300 font-bold">Bill From</h4>
      <label htmlFor="user-address" className="label">Street Address</label>
      <input
        type="text"
        name="user-address"
        id="user-address"
        value="19 Union Terrace"
      />

      <label htmlFor="user-city" className="label">City</label>
      <input
        type="text"
        name="user-city"
        id="user-city"
        value="19 Union Terrace"
      />

      <label htmlFor="user-postcode" className="label">Post Code</label>
      <input
        type="text"
        name="user-postcode"
        id="user-address"
        value="E1 3EZ"
      />

      <label htmlFor="user-country" className="label">Country</label>
      <input
        type="text"
        name="user-country"
        id="user-country"
        value="United Kingdom"
      />
    </>
  );
}

export default UserForm;
