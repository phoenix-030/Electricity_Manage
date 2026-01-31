import { useState } from "react";
import "../styles/Calculator.css";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculator = () => {
  // Existing calculator
  const [units, setUnits] = useState("");
  const [bill, setBill] = useState(null);

  // Comparison calculator
  const [prevUnits, setPrevUnits] = useState("");
  const [currUnits, setCurrUnits] = useState("");
  const [compareResult, setCompareResult] = useState(null);

  // Tamil Nadu EB Slab Calculation (Bi-Monthly)
  const calculateBill = (units) => {
    let amount = 0;

    if (units <= 100) {
      amount = 0;
    } else if (units <= 200) {
      amount = (units - 100) * 2.35;
    } else if (units <= 400) {
      amount = 100 * 2.25 + (units - 200) * 4.7;
    } else if (units <= 500) {
      amount = 100 * 2.25 + 200 * 4.5 + (units - 400) * 6;
    } else {
      amount =
        100 * 2.25 +
        200 * 4.5 +
        100 * 6 +
        (units - 500) * 8;
    }

    return amount;
  };

  // Main calculator
  const handleCalculate = () => {
    const n = Number(units);
    if (isNaN(n) || n < 0) {
      alert("Please enter valid units");
      return;
    }
    setBill(calculateBill(n));
  };

  // Comparison calculator
  const handleCompare = () => {
    const prev = Number(prevUnits);
    const curr = Number(currUnits);

    if (isNaN(prev) || isNaN(curr) || prev < 0 || curr < 0) {
      alert("Please enter valid units");
      return;
    }

    const prevBill = calculateBill(prev * 2) / 2;
    const currBill = calculateBill(curr * 2) / 2;

    setCompareResult({
      unitDiff: curr - prev,
      amountDiff: currBill - prevBill,
      prevBill,
      currBill,
    });
  };

  return (
    <>
      <div className="container mt-5">

        {/* 🔹 MAIN EB CALCULATOR */}
        <div className="shadow p-4 rounded calculator-card">
          <h2 className="text-center mb-4">
            Tamil Nadu EB Bill Calculator
          </h2>

          <label className="form-label">Enter Units (2 Months)</label>
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Eg: 250"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={handleCalculate}>
            Calculate Bill
          </button>

          {bill !== null && (
            <div className=" alert-success text-center mt-4">
              <h4>Total EB Bill (Bi-Monthly)</h4>
              <h3>₹ {bill.toFixed(2)}</h3>
              <p>
                Estimated Monthly Bill:
                <strong> ₹ {(bill / 2).toFixed(2)}</strong>
              </p>
            </div>
          )}
        </div>
{/* ------------------------------------------------------ */}
        {/* 🔹 USAGE COMPARISON CALCULATOR */}
        <div className=" p-4 shadow mt-4 calculator-card">
          <h2 className="text-center  mb-4">
            📊 Monthly Usage Comparison
          </h2>

          <input
            type="number"
            className="form-control mb-2"
            placeholder="Previous Month Units"
            value={prevUnits}
            onChange={(e) => setPrevUnits(e.target.value)}
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder="Current Month Units"
            value={currUnits}
            onChange={(e) => setCurrUnits(e.target.value)}
          />

          <button className="btn btn-warning w-100" onClick={handleCompare}>
            Compare Usage
          </button>

          {compareResult && (
            <div className="mt-4">
              <p>Previous Month Bill: ₹ {compareResult.prevBill.toFixed(2)}</p>
              <p>Current Month Bill: ₹ {compareResult.currBill.toFixed(2)}</p>

              {compareResult.unitDiff > 0 ? (
                <div className="alert alert-danger">
                  <strong>Usage Increased 📈</strong><br />
                  Extra Units: {compareResult.unitDiff}<br />
                  Extra Cost: ₹ {compareResult.amountDiff.toFixed(2)}
                </div>
              ) : compareResult.unitDiff < 0 ? (
                <div className=" alert-success">
                  <strong>You Saved Energy 🎉</strong><br />
                  Saved Units: {Math.abs(compareResult.unitDiff)}<br />
                  Saved Amount: ₹ {Math.abs(compareResult.amountDiff).toFixed(2)}
                </div>
              ) : (
                <div className="alert alert-info">
                  No change in usage 👍
                </div>
              )}
            </div>
          )}
        </div>

        {/* 🔹 DESCRIPTION */}
        <div className=" p-4 shadow mt-4">
          <h2>📌 Description</h2>
          <p>
            This calculator estimates electricity bills using Tamil Nadu
            domestic slab tariffs. It also compares previous and current
            monthly usage to show savings or extra consumption.
          </p>
        </div>

        <div className="card p-4 shadow mt-4">
          <h2>🧠 How to Use</h2>
          <ul className="list-group">
            <li className="list-group-item">
              Enter bi-monthly units to calculate EB bill.
            </li>
            <li className="list-group-item">
              Enter previous & current month units to compare usage.
            </li>
            <li className="list-group-item">
              View saved or exceeded units and cost.
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Calculator;
