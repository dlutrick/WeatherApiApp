import React from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./components/Header";

function Main() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
