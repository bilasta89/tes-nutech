import React from "react";
import "./App.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import NavigationBar from "./components/NavigationBar";
import { Router } from "@reach/router";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme ? "bg-black" : "bg-light-2"} style={{ height: "100vh", overflow: "auto" }}>
      <NavigationBar />
      <Router>
        <Home path="/" />
        <Cart path="/keranjang" />
      </Router>
    </main>
  );
}

export default App;
