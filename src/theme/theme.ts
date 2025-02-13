import { createTheme } from "@mui/material/styles";

const slate = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a",
};

const blue = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      light: blue[400],
      dark: blue[800],
      contrastText: "#fff",
    },
    secondary: {
      main: slate[600],
      light: slate[400],
      dark: slate[800],
    },
    background: {
      default: slate[50],
      paper: "#ffffff",
    },
    text: {
      primary: slate[900],
      secondary: slate[600],
    },
    divider: slate[200],
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: `1px solid ${slate[200]}`,
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "6px",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: slate[600],
          "&:hover": {
            backgroundColor: slate[100],
          },
        },
      },
    },
  },
});
