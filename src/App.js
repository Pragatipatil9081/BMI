import "./App.css"
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const reset = () => {
    window.location.reload();
  };

  const calc = (e) => {
    e.preventDefault();
    if (weight === 0 && height === 0) alert("enter value");
    else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      ///
      if (bmi < 25) {
        setMsg("Your under weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMsg("Your Healthy weight");
      } else {
        setMsg("Your overweight");
      }
    }
  };

  return (
    <div className="All">
    <div className="grid md:flex">
      <form onSubmit={calc}>
        <p className=" underline max-w-lg text-3xl font-semibold leading-loose text-gray-900 ">
          BMI Calculator
        </p>
        <div>
          <label className="block mb-1 text-xl  font-medium text-gray-900">
            Weight (ibs)
          </label>
          <input
            type="number"
            className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter weight"
            required
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="block mb-1 text-xl font-medium text-gray-900">
            Height (in)
          </label>
          <input
            type="number"
            className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter height"
            required
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="text-white mr-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={reset}
          >
            Reset
          </button>
          <h3 className="mt-2">Your BMI is: {bmi}</h3>
          <p>{msg}</p>
        </div>
      </form>
    </div>
    </div>
  );
}
export default App;
