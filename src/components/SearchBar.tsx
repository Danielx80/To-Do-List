import SearchIcon from "@mui/icons-material/Search";
import { TextField, useTheme, InputAdornment } from "@mui/material";
import { useTaskStore } from "../store/kanbanStore";
import { useState, useEffect, useCallback } from "react";

export default function SearchBar() {
  const { setSearchTerm } = useTaskStore();
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");

  // Evitar varias actualizaciones 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchTerm(searchValue);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchValue, setSearchTerm]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder="Buscar tareas..."
      onChange={handleSearchChange}
      value={searchValue}
      aria-label="Buscar tareas"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: theme.palette.primary.main }} />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "350px",
        bgcolor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          "& fieldset": {
            borderColor: theme.palette.primary.light,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.dark,
          },
        },
      }}
    />
  );
}
