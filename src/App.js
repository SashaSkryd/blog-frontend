import "./App.scss";
import { connect } from "react-redux";
import userAuth from "./redux/operations/userOperations";

function App(props) {
  const clickHandler = () => {
    props.register({
      nickname: "Jora",
      password: "12345",
    });
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}

const mapDispatchToProps = {
  register: userAuth.register,
};

export default connect(null, mapDispatchToProps)(App);
