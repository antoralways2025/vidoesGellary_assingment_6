import axios from 'axios';
// "http://localhost:9000/"

  const url= "https://fakefakeserver.herokuapp.com/"

  const axiosInstance = axios.create({
    baseURL:url
  }) ;
  
  
   export default axiosInstance
