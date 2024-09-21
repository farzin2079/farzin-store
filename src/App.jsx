// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Categoryes from "./pages/Categoryes";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GlobalStyles from "./style/GlobalStyles";
import Applayout from "./ui/Applayout";
import { HamMenuProvider } from "./context/HamMenuContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <HamMenuProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Applayout />}>
                <Route element={<Home />} path="/" />
                <Route element={<NotFound/>} path="*"/>
                {/* <Route element={<Profile />} path="/profile" />
                <Route element={<Categoryes />} path="/categoryes" />
                <Route element={<Details />} path="/details/:id" />
                <Route element={<Login />} path="/login" />
                <Route element={<Signup />} path="/signup" /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </HamMenuProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
