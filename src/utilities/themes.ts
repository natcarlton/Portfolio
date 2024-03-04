import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: [
            "Dela Gothic One",
            "Verdana",
            "sans-serif"
        ].join(',')
    },
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: "#243a46",
        },
    },
});
