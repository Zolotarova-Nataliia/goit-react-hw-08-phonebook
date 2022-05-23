import "./App.css";
import { useEffect, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-spinkit";
import { AppBar } from "./components/AppBar/AppBar";
import { getCurrentUser } from "./redux/auth/authOperations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getIsGettingCurrentUser } from "./redux/auth/authSelectors";

const RegistrationView = lazy(() => import("./views/RegistrationView"));
const HomepageView = lazy(() => import("./views/HomepageView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

export function App() {
  const refreshing = useSelector(getIsGettingCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    !refreshing && (
      <div className="App">
        <AppBar />
        <Suspense
          fallback={<Spinner name="ball-spin-fade-loader" color="#ffff" />}
        >
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomepageView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegistrationView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    )
  );
}
