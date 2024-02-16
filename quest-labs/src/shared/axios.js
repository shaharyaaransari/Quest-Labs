import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
    (config) => {
       config.headers["accept"] = 'application/json';
       config.headers["apikey"] = 'k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be';
       config.headers["token"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc';
       config.headers["userid"] = 'u-a2399489-9cd0-4c94-ad12-568379202b08';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default instance;
