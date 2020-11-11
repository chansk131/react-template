import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import "./App.css";
import alertState from "./components/Alert/alertState";
import userService, { User } from "./services/user";

const LoginPage = lazy(() => import("./pages/LoginPage"));

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
const getUser = () => sleep(1000).then(() => ({ username: "elmo" }));

function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const setAlertState = useSetRecoilState(alertState);
  useEffect(() => {
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
    getUser().then(
      (tempUser) => {
        setUser({ id: 0, name: tempUser.username });

        setAlertState({
          show: true,
          message: "Success",
          type: "success",
        });
      },
      (error: Error) =>
        setAlertState({ show: true, message: error.message, type: "error" })
    );
  }, [setAlertState]);

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Switch>
          <Route exact from="/">
            {!user && <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" render={() => <LoginPage />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
