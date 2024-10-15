import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";

import AdminLayout from "./components/admin-view/layout";
import AdminDashBoard from "./pages/admin-view/dashbaord";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import ShoppingLayout from "./pages/shopping-view/layout";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1 className="">header component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
