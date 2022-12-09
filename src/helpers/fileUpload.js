export const fileUplaod = async (file) => {
  if (!file) throw new Error("No hay ningun archivo para subir");
  
  const clodinaryURL =
    "https://api.cloudinary.com/v1_1/my-cloudinary-ar/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const response = await fetch(clodinaryURL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("No se pudo subir la imagen");

    const cloudinaryRes = await response.json();

    return cloudinaryRes.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
