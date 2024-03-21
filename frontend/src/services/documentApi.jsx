import axios from "axios";

const baseURL = "http://localhost:3000"; // Update with your backend URL

const api = axios.create({
  baseURL,
});

export const getDocuments = async () => {
  try {
    const response = await api.get("/api/documents");
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

export const getDocumentById = async (documentId) => {
  try {
    const response = await api.get(`/api/documents/getDocument/${documentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching document with ID ${documentId}:`, error);
    throw error;
  }
};

export const createDocument = async (documentData) => {
  try {
    const response = await api.post("/api/documents", documentData);
    return response.data;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

export const updateDocument = async (documentId, documentData) => {
  try {
    const response = await api.put(
      `/api/documents/updateDocument/${documentId}`,
      documentData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating document with ID ${documentId}:`, error);
    throw error;
  }
};

export const deleteDocument = async (documentId) => {
  try {
    const response = await api.delete(
      `/api/documents/deleteDocument/${documentId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error deleting document with ID ${documentId}:`, error);
    throw error;
  }
};
