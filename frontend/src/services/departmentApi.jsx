import axios from "axios";

const baseURL = "http://localhost:3000";

const departmentApi = axios.create({
  baseURL,
});

export const getAllDepartments = async () => {
  try {
    const response = await departmentApi.get("/api/departments");
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};

export const getDepartmentById = async (departmentId) => {
  try {
    const response = await departmentApi.get(
      `/api/departments/getDepartment/${departmentId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching department with ID ${departmentId}:`, error);
    throw error;
  }
};

export const createDepartment = async (departmentData) => {
  try {
    const response = await departmentApi.post(
      "/api/departments/createDepartment",
      departmentData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating department:", error);
    throw error;
  }
};

export const updateDepartment = async (departmentId, departmentData) => {
  try {
    const response = await departmentApi.put(
      `/api/departments/updateDepartment/${departmentId}`,
      departmentData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating department with ID ${departmentId}:`, error);
    throw error;
  }
};

export const deleteDepartment = async (departmentId) => {
  try {
    const response = await departmentApi.delete(
      `/api/departments/deleteDepartment/${departmentId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting department with ID ${departmentId}:`, error);
    throw error;
  }
};
