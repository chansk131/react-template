import React, { lazy } from "react";
import { Route, RouteProps, Switch } from "react-router-dom";
import PageWrapper from "./components/layout/PageWrapper";

const AboutPage = lazy(() => import("./pages/AboutPage"));

const PrivateRoute = (route: RouteProps) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => (
        <PageWrapper hasSider>
          {route.render ? route.render({ ...route, ...props }) : null}
        </PageWrapper>
      )}
    />
  );
};

const AuthenticatedRoute: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/about" render={() => <AboutPage />} />
    </Switch>
  );
};

export default AuthenticatedRoute;
