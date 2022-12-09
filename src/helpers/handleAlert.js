import Swal from "sweetalert2";

export const alertSuccess = (mensaje='') => {
  return Swal.fire("Nota actualizada",mensaje, "success");
};
