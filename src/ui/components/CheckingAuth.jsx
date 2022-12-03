import { Grid,CircularProgress, Box } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          padding: 4,
        }}
      >
        <Box  sx={{ transform: "scale(3)" }}>
          <CircularProgress color="warning" />
        </Box>
      </Grid>
    </>
  );
};
