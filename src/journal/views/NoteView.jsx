import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      gap={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1, padding: 3 }}
    >
      {/* label */}
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de marzo 2002
        </Typography>
      </Grid>

      {/* button */}
      <Grid item>
        <Button
          color="primary"
          variant="outlined"
          sx={{ padding: 2, borderRadius: 2 }}
        >
          <SaveOutlined sx={{ mr: 1, fontSize: { md: 30, sm: "1rem" } }} />{" "}
          Guardar
        </Button>
      </Grid>

      {/* inputs */}

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingres un titulo"
          label="titulo"
          sx={{ border: "none", mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedio en el día de hoy?"
          minRows={5}
         
        />
      </Grid>

     {/*  image gallery */}
     <ImageGallery/>
    </Grid>
  );
};
