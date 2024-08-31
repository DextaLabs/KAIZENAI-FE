// src/App.js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import classNames from "classnames";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Signup from "./components/signup";
import { AuthProvider } from "./library/utils/AuthProvider";
import ProtectedRoute from "./library/utils/ProtectedRoute";
import Home from "./pages/dashboard";
import LoginPage from "./pages/login";
import ThemeProvider from "./provider/theme/themeProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <ThemeProvider>
          <div className={classNames("bg-whitePurple overflow-auto flex")}>
            <ToastContainer />
            <Router>
              <Routes>
                <Route element={<ProtectedRoute />}>
                  <Route path="/*" element={<Home />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/*" element={<Home />} /> */}
              </Routes>
            </Router>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
