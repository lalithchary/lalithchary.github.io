import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00e5ff', // Cyan - representing innovation/technology
            contrastText: '#000000',
        },
        secondary: {
            main: '#ff3d00', // Deep Orange - mechanical accent
            contrastText: '#ffffff',
        },
        background: {
            default: '#0a1929', // Dark Blue-Grey - deep industrial background
            paper: '#132f4c',   // Slightly lighter for cards
        },
        text: {
            primary: '#ffffff',
            secondary: '#b2bac2',
        },
        action: {
            active: '#00e5ff',
            hover: 'rgba(0, 229, 255, 0.08)',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            letterSpacing: '0.02em',
            fontSize: '3.5rem',
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '0.01em',
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 500,
        },
        button: {
            fontWeight: 600,
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0, // Sharp edges for mechanical feel
                    textTransform: 'none',
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                    },
                },
                contained: {
                    boxShadow: '0 4px 6px rgba(0, 229, 255, 0.25)',
                },
                outlined: {
                    borderColor: '#00e5ff',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    background: 'linear-gradient(145deg, #132f4c 0%, #0a1929 100%)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(10, 25, 41, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(0, 229, 255, 0.1)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 4, // Slightly rounded but still structural
                },
            },
        },
    },
});

export default theme;
