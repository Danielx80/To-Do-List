import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ zIndex: 1100 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", display: { xs: "none", sm: "block" } }}
          >
            TO-DO-LIST
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 8 }} />
    </>
  );
}
