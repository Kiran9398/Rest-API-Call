import React from "react";
import "./InputForm.css";

const InputForm = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control form-controls"
          placeholder="Serch your items"
          aria-label="Recipient's username"
        />
        <div class="input-group-append">
          <button
            class="btn btn-primary search-button"
            type="button"
            id="button-addon2"
          >
            Seach
          </button>
        </div>
      </div>

      <br />
      <div className="text-center">
        <button className="btn btn-primary ml-5 mt-2">Home</button>
        <button className="btn btn-info mt-2">Electronics</button>
        <button className="btn btn-danger mt-2">Appliances</button>
        <button className="btn btn-success mt-2">Fashion</button>
        <button className="btn btn-warning mt-2">Accessories</button>
        <button className="btn btn-secondary mt-2">Mobiles</button>
      </div>
    </div>
  );
};
export default InputForm;
