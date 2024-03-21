// services/categoryAPI.jsx
import axios from "axios";

const baseURL = "http://localhost:3000"; // Update with your backend URL

const api = axios.create({
  baseURL,
});

export const getAllCategories = async () => {
  try {
    const response = await api.get("/api/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    const response = await api.get(`/api/categories/getCategory/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with ID ${categoryId}:`, error);
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    const response = await api.post(
      "/api/categories/createCategory",
      categoryData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await api.put(
      `/api/categories/updateCategory/${categoryId}`,
      categoryData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating category with ID ${categoryId}:`, error);
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const response = await api.delete(
      `/api/categories/deleteCategory/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting category with ID ${categoryId}:`, error);
    throw error;
  }
};
