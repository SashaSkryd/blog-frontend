import "./App.scss";
import { Suspense } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import routes from "./routes";
import userAuth from "./redux/operations/userOperations";

function App(props) {
  const routesMap = routes.map((route) => {
    return route.privated ? (
      <PrivateRoute key={route.path} {...route} />
    ) : (
      <PublicRoute key={route.path} {...route} />
    );
  });
  return (
    <>
      <div className="App">
        <h1>Hello world</h1>
      </div>
      <Suspense fallback="Loading">
        <Switch>{routesMap}</Switch>
      </Suspense>
    </>
  );
}

const mapDispatchToProps = {
  register: userAuth.register,
};

export default connect(null, mapDispatchToProps)(App);
