import axios from 'axios';

const api = axios.create({
  /**
   * Se estiver no emulador:
   * Android: abd reverse tcp:3333 tcp:3333
   * iOs: localhost:3333
   */
  baseURL: 'http://192.168.0.6:3333',
});

export default api;