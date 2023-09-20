import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';

import StarRating from "./StartRating";

function Test() {
  const [movie, setMovie] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovie} />;
      <p>Movie is {movie}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "good", "amazing"]}
    />
    {/* <StarRating maxRating={10} /> */}
    <StarRating size={88} color="green" className="test" defaultRating={3} />

    <Test />
  </React.StrictMode>
);
