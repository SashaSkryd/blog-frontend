import "./App.scss";
import { Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import routes from "./routes";
import Header from "./components/Header/Header";

export default function App(props) {
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
        <Header />
      </div>
      <Suspense fallback="Loading">
        <Switch>{routesMap}</Switch>
      </Suspense>
    </>
  );
}
