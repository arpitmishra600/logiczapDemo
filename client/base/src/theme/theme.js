import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'OpenSauceSans',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: 'black', // Text color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#777579', // Default label/legend color
          fontWeight: 500,
          '&.Mui-focused': {
            color: 'black', // Focused label/legend color
          },
        },
      },
    },
    MuiButton: {
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
  },
});
