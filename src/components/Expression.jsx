// src/components/ExpressionForm.js
import React, { useState } from "react";

const ExpressionForm = ({ onSubmit }) => {
  const [connectorType, setConnectorType] = useState("and");
  const [expressions, setExpressions] = useState([
    {
      key: "age",
      output: {
        value: "",
        operator: ">=",
        score: "",
      },
    },
  ]);

  const keyOptions = ["Age", "Credit Score", "Account Balance"];

  const addExpression = () => {
    setExpressions([
      ...expressions,
      {
        key: "age",
        output: {
          value: "",
          operator: ">=",
          score: "",
        },
      },
    ]);
  };

  const deleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rules: expressions, combinator: connectorType });
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="connectorType" className="form-label">
            Connector Type
          </label>
          <select
            className="form-select shadow"
            id="connectorType"
            value={connectorType}
            required
            onChange={(e) => setConnectorType(e.target.value)}
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
          </select>
        </div>

        {expressions.map((expression, index) => (
          <div key={index} className="mb-3 border p-3">
            <h5>Expression {index + 1}</h5>
            <div className="mb-3">
              <label htmlFor={`key${index}`} className="form-label">
                Key
              </label>
              <select
                className="form-select shadow"
                id={`key${index}`}
                value={expression.key}
                required
                onChange={(e) =>
                  setExpressions((prevExpressions) =>
                    prevExpressions.map((prevExp, i) =>
                      i === index
                        ? { ...prevExp, key: e.target.value.toLowerCase() }
                        : prevExp
                    )
                  )
                }
              >
                {keyOptions.map((option) => (
                  <option key={option} value={option.toLowerCase()}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor={`operator${index}`} className="form-label">
                Operator
              </label>
              <select
                className="form-select shadow"
                id={`operator${index}`}
                value={expression.output.operator}
                required
                onChange={(e) =>
                  setExpressions((prevExpressions) =>
                    prevExpressions.map((prevExp, i) =>
                      i === index
                        ? {
                            ...prevExp,
                            output: {
                              ...prevExp.output,
                              operator: e.target.value,
                            },
                          }
                        : prevExp
                    )
                  )
                }
              >
                <option value=">">{">"}</option>
                <option value="<">{"<"}</option>
                <option value=">=">{">="}</option>
                <option value="<=">{"<="}</option>
                <option value="=">{"="}</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor={`value${index}`} className="form-label">
                Value
              </label>
              <input
                type="text"
                className="form-control shadow"
                id={`value${index}`}
                value={expression.output.value}
                required
                onChange={(e) =>
                  setExpressions((prevExpressions) =>
                    prevExpressions.map((prevExp, i) =>
                      i === index
                        ? {
                            ...prevExp,
                            output: {
                              ...prevExp.output,
                              value: e.target.value,
                            },
                          }
                        : prevExp
                    )
                  )
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`score${index}`} className="form-label">
                Score
              </label>
              <input
                type="text"
                className="form-control shadow"
                id={`score${index}`}
                value={expression.output.score}
                required
                onChange={(e) =>
                  setExpressions((prevExpressions) =>
                    prevExpressions.map((prevExp, i) =>
                      i === index
                        ? {
                            ...prevExp,
                            output: {
                              ...prevExp.output,
                              score: e.target.value,
                            },
                          }
                        : prevExp
                    )
                  )
                }
              />
            </div>

            <button
              type="button"
              className="btn btn-danger shadow"
              onClick={() => deleteExpression(index)}
            >
              Delete Expression
            </button>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-primary shadow"
          onClick={addExpression}
        >
          Add Expression
        </button>

        <button type="submit" className="btn btn-success mt-3 mb-3 ms-5 shadow">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpressionForm;
