import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Layout from "./Components/Layout/Layout";
import ContactPage from "./Pages/ContactPage";
import SignUp from "./Pages/SignUp";
import LoginPage from "./Pages/LoginPage";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import Modal from "./Components/Modal/Modal";
import CartPage from "./Pages/CartPage";
import FavoritePage from "./Pages/FavoritePage";
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <Layout>
              <AboutPage />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route
        path="/signUp"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route path="/product/:productId" element={<Modal />} />
      <Route
        path="/cart"
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />
      <Route path="/favorite" element={<Layout><FavoritePage/></Layout>}/>
    </Routes>
  );
};

export default Router;
