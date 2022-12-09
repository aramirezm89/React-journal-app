import { UploadOutlined } from "@mui/icons-material";
import { Grid, IconButton, ImageList, ImageListItem } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUploadingFiles } from "../../store/journal/thunk";

export const ImageGallery = () => {
  const { isSaving, activeNote } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const fileInputRef = useRef();
  const [imagePreview, setImagePreview] = useState(null);



  const onInputChangeFile = ({ target }) => {

   
    if (target.files.length === 0) return;
  

    
    //TODO dispatch de los archivos seleccionados
     dispatch(startUploadingFiles(target.files))
 
  };
  return (
    <>
      <input
        multiple
        type="file"
        onChange={onInputChangeFile}
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      <Grid container direction="row">
        <Grid item>
          <IconButton
            color="primary"
            disabled={isSaving}
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            <UploadOutlined />
          </IconButton>
          <span>Subir imagenes: </span>
        </Grid>
      </Grid>
      <ImageList sx={{ width: "100%", height: '100%' }} cols={3} rowHeight="auto">
        {activeNote.imageUrls?.map((image) => (
          <ImageListItem key={image} >
            <img
              
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={"imagen"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

