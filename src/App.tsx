import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import "./App.css";
import AuthenticatedRoute from "./AuthenticatedRoute";
import alertState from "./components/Alert/alertState";
import useAuth from "./services/auth-hook";

const LoginPage = lazy(() => import("./pages/LoginPage"));

function App(): JSX.Element {
  const { user, refresh, isAuthenticated } = useAuth();

  const setAlertState = useSetRecoilState(alertState);

  // refresh the first time running the app
  // if 403 then redirect to login page
  // else go to authorised page
  useEffect(() => {
    refresh();
  }, []);

  // useEffect(() => {
  // const getUser = async () => {
  //   try {
  //     const tempUser = await userService.getUser();
  //     setUser(tempUser);
  //   } catch (e) {
  //     setUser(null);
  //     setAlertState({
  //       show: true,
  //       message: e.response?.data?.error_code ?? e.message ?? "Failed",
  //     });
  //   }
  // };
  // getUser().then(
  //   (tempUser) => {
  //     setUser({ id: 0, name: tempUser.username });
  //     setAlertState({
  //       show: true,
  //       message: "Success",
  //       type: "success",
  //     });
  //   },
  //   (error: Error) =>
  //     setAlertState({ show: true, message: error.message, type: "error" })
  // );
  // }, [setAlertState]);

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            from="*"
            render={() =>
              isAuthenticated ? (
                <AuthenticatedRoute />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
