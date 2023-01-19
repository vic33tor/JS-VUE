import axios from "axios";

import { escribeLocalStorage } from "@/shared/LocalStorage/LocalStorage";

const axiosUsuario = async (nombre, apellido1, apellido2) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/usuarios?nombre=${nombre}&apellido1=${apellido1}&$apellido2=${apellido2}`
    );
    console.log(response.data);
    if (response.data.length > 0) {
      console.log(response.data);
      escribeLocalStorage("permitido", "Sí");
    } else {
      escribeLocalStorage("permitido", "No");
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { axiosUsuario };
