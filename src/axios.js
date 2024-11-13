// src/plugins/axios.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VITE_API_URL || 'https://backend-api-production-1bb4.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json'
  }
});


// Función para iniciar sesión y almacenar el token
export const login = async (email, password) => {
    try {
      const response = await apiClient.post('/login', { email, password });
      const token = response.data.token;
      
      // Guarda el token en el localStorage para usarlo en futuras solicitudes
      localStorage.setItem('authToken', token);
      
      // Configura el token en los encabezados de Axios
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      return token;
    } catch (error) {
      console.error('Error de autenticación:', error);
      throw error;
    }
  };
  
  // Configura el token si ya está en el localStorage (para futuras sesiones)
  const token = localStorage.getItem('authToken');
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  


export default apiClient;