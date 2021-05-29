import React from "react";
import ReactDOM from "react-dom";

function Main() {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
