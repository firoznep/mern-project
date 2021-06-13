import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import CartPage from "./screens/CartPage";
import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:_id" component={ProductPage} />
          <Route path="/cart/:_id?" component={CartPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
