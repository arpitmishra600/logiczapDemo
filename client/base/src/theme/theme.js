import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              color: 'black', // Text color
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#2D1BAB', // Label color
          },
        },
      },
    }, MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#3523B5',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2e1f9e',
          },
        },
      },
    },

  });