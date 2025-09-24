import React from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { Package, ShoppingCart, LogOut } from "lucide-react";
import Products from "./Products";
import Orders from "./Orders";

function App() {
  const apiKey = localStorage.getItem("API_KEY");
  const location = useLocation();

  if (!apiKey) return <Navigate to="/login" />;

  const handleLogout = () => {
    localStorage.removeItem("API_KEY");
    window.location.href = "/login";
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Store Manager
                </h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-1">
                <Link
                  to="/products"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive("/products")
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Package className="w-4 h-4" />
                  <span>Products</span>
                </Link>
                <Link
                  to="/orders"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive("/orders")
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Orders</span>
                </Link>
              </nav>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-200">
            <nav className="flex">
              <Link
                to="/products"
                className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
                  isActive("/products")
                    ? "bg-blue-50 text-blue-700 border-t-2 border-blue-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Products</span>
              </Link>
              <Link
                to="/orders"
                className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
                  isActive("/orders")
                    ? "bg-blue-50 text-blue-700 border-t-2 border-blue-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Orders</span>
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-6">
          <Routes>
            <Route path="/products/*" element={<Products />} />
            <Route path="/orders/*" element={<Orders />} />
            <Route path="*" element={<Navigate to="/products" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
