import { Container, Grid, Stack, Box, Typography } from "@mui/material";
import CreateTask from "./components/CreateTask/CreateTask";
import Column from "./components/Column/Column";
import Navbar from "./components/Navbar";
import AlertComponent from "./components/AlertComponent";

export default function App() {
  return (
    <>
      <Navbar />
      <AlertComponent />
      <Container maxWidth="xl" sx={{ py: 10, display: 'grid' }}>
        <Stack >
          <CreateTask />

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "8px",
                  p: 2,
                  minHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#60a5fa" }}
                >
                  To Do
                </Typography>
                <Column status="To Do" />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "8px",
                  p: 2,
                  minHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#FF9800" }}
                >
                  In Progress
                </Typography>
                <Column status="In progress" />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: "8px",
                  p: 2,
                  minHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#4CAF50" }}
                >
                  Done
                </Typography>
                <Column status="Done" />
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
