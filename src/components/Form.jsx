import React from "react";

const Form = () => {
  return (
    <>
      <div>
        <h1>Application Form</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
          <br />
          <label htmlFor="mbNo">Mobile no:</label>
          <input
            type="tel"
            name="MobileNo"
            id="mbNo"
            placeholder="Enter your 10 digit mobile no"
            required
          />
          <br></br>
          <label htmlFor="pass"> Set Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter your password"
            required
          />
          <br />
          <label htmlFor="confPass">Confirm Password:</label>
          <input
            type="password"
            id="confPass"
            placeholder="Enter your password"
            required
          />
          <br />
          <label htmlFor="dob">Enter DOB:</label>
          <input type="date" id="dob" name="dob" required />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <label htmlFor="street">Street Address:</label>
        <br/>
         <textarea id="street" name="address" cols={35} rows={4} placeholder="Enter your address"/><br/>

         
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            autocomplete="address-level2"
            required
          /><br/>

          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            autocomplete="address-level1"
          /><br/>

          <label htmlFor="zip">ZIP Code:</label>
          <input
            type="text"
            id="zip"
            name="zip"
            autocomplete="postal-code"
            required
          /><br/>

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            autocomplete="country-name"
          /><br/><br/>
          <input type="submit" name="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
