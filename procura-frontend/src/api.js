import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api-docs",
});

api.interceptors.request.use(
  (config) => {
    const apiKey = localStorage.getItem("API_KEY"); // retrieve stored API_KEY
    if (apiKey) {
      config.headers["x-api-key"] = apiKey; // add header automatically
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Products API
export const getProducts = () => api.get("/products");
export const getProduct = (id) => api.get(`/products/${id}`);
export const createProduct = (data) => api.post("/products", data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// Orders API
export const getOrders = () => api.get("/orders");
export const getOrder = (id) => api.get(`/orders/${id}`);
export const createOrder = (data) => api.post("/orders", data);

export default api;
