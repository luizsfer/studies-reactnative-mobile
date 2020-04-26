import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOs com Físico: endereço IP local
 * Android com Emulador: localhost ( adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: ip 10.0.2.2 (em caso de não querer usar o adb)
 * Android com Físico: ip da máquina
 */
