import "./App.scss";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userOperations from "./redux/operations/userOperations";
import { Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import routes from "./routes";
import Header from "./components/Header/Header";

export default function App(props) {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.current(token));
  });
  const routesMap = routes.map((route, i) => {
    return route.privated ? (
      <PrivateRoute key={i} {...route} />
    ) : (
      <PublicRoute key={i} {...route} />
    );
  });
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Suspense fallback="Loading">
        <Switch>{routesMap}</Switch>
      </Suspense>
    </>
  );
}
