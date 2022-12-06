import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
import "moment/locale/es";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { setActiveNote, startSaveNote } from "../../store/journal";
import { ImageGallery } from "../components";

export const NoteView = () => {

  const dispatch = useDispatch();
  const validationSchema = yup.object({
    title:yup.string().required('Campo requerido'),
    body:yup.string()
  })

  const onSubmitForm = (values,actions) =>{
    dispatch(setActiveNote(values))
    dispatch(startSaveNote())

  }

  const {activeNote} = useSelector(state => state.journal);


  const formik =  useFormik({
    initialValues: activeNote,
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
    enableReinitialize:true
  });

  const {handleSubmit,handleChange,values,touched,errors} = formik;

 
  return (
    <Grid
      container
      gap={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1, padding: 3 }}
    >
   

      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Grid item>
            <Typography fontSize={39} fontWeight="light">
              {moment(activeNote.date).format("MMMM Do YYYY, h:mm:ss a")}
            </Typography>
          </Grid>

          {/* button */}
          <Grid item>
            <Button
              type="submit"
              color="primary"
              variant="outlined"
              sx={{ padding: 2, borderRadius: 2 }}
            >
              <SaveOutlined sx={{ mr: 1, fontSize: { md: 30, sm: "1rem" } }} />{" "}
              Guardar
            </Button>
          </Grid>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingres un titulo"
            label="titulo"
            sx={{ border: "none", mb: 1 }}
            name="title"
            value={values.title}
            onChange={handleChange}
            error={touched.title && Boolean(errors.email)}
            helperText={touched.title && errors.title}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedio en el día de hoy?"
            minRows={5}
            name="body"
            value={values.body}
            onChange={handleChange}
            error={touched.body && Boolean(errors.email)}
            helperText={touched.body && errors.title}
          />
        </Grid>
      </form>

      {/*  image gallery */}
      <ImageGallery />
    </Grid>
  );
};
