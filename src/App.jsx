import React, { useState } from "react";
import ExpressionForm from "./components/Expression";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (formData) => {
    setFormData(formData);
    console.log("Form Data:", formData);
  };

  return (
    <div className="App">
      <h1 className="text-center mt-4 bg-black text-white">
        Expression Engine
      </h1>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <ExpressionForm onSubmit={handleFormSubmit} />
          </div>
          <div className="col-md-4 border rounded shadow">
            {formData ? (
              <div className="bg-black text-white rounded p-2 mt-4">
                <h2 className="text-center mt-4 text-white">Form Data</h2>
                <JsonView src={formData} theme="dark" />
              </div>
            ) : <div class="container">
            <div class="d-flex justify-content-center align-items-center vh-100">
                <div class="text-center mt-4">
                    <h2 class="text-center mt-4 text-black">No Data</h2>
                    <img src="/ban-solid.svg" alt="Data Not Found" width="15%" class="m-2" />
                </div>
            </div>
        </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
