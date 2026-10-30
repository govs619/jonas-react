import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/App";
import StarRating from "./components/StarRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating} />
      <p>Movie Rating: {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
    <StarRating
      maxRating={5}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
  </React.StrictMode>,
);
