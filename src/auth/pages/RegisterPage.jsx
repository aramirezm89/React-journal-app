import {
  Alert, Button, Grid, Link, TextField, Typography
} from "@mui/material";
import { useFormik } from "formik";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isChekingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const dispatch = useDispatch();

  //validacion formulario
  const validationSchema = yup.object({
    displayName: yup.string().required("Campo Obligaotorio"),
    email: yup
      .string()
      .email("Debés ingresar un email valido")
      .required("Campo obligatorio"),
    password: yup
      .string()
      .min(6, "La contraseña debe tener por lo menos 6 caracteres")
      .max(20, "La contraseña debe tener maximo 20 caracteres")
      .required("Campo Obligatorio"),
  });

  //submit del formulario
  const onSubmit = (values, actions) => {
    dispatch(startCreatingUserWithEmailPassword(values));

    actions.resetForm();
  };

  //manejo deo formulario con formik
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  //destructuracion de funciones de formik
  const { handleSubmit, handleChange, isSubmitting, values, errors, touched } =
    formik;

  return (
    <AuthLayout title="Crear cuenta">
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          {/* Nombre completo */}
          <Grid item xs={12}>
            <TextField
              label="Nombre completo"
              type="text"
              id="displayName"
              name="displayName"
              placeholder="Ingresa tu nombre completo"
              fullWidth
              value={values.displayName}
              onChange={handleChange}
              error={touched.displayName && Boolean(errors.displayName)}
              helperText={touched.displayName && errors.displayName}
            />
          </Grid>

          {/* correo */}
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="text"
              id="email"
              name="email"
              placeholder="correo@google.com "
              fullWidth
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          {/* contraseña */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Grid>

          <Grid container item spacing={1}>
            <Grid item xs={12} display={errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={isChekingAuthentication}
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
        <Link color="inherit" component={RouterLink} to="/auth/login">
          Login
        </Link>
      </Grid>
    </AuthLayout>
  );
};
