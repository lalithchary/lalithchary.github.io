import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6C63FF',
            light: '#8B83FF',
            dark: '#4A42CC',
        },
        secondary: {
            main: '#00D9FF',
            light: '#33E1FF',
            dark: '#00A3BF',
        },
        background: {
            default: '#0B0F1A',
            paper: 'rgba(20, 27, 45, 0.7)',
        },
        text: {
            primary: '#F0F0F5',
            secondary: '#A0A8C0',
        },
    },
    typography: {
        fontFamily: '"Inter", "Poppins", sans-serif',
        h1: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 800,
            fontSize: '4rem',
            lineHeight: 1.1,
            '@media (max-width:600px)': { fontSize: '2.5rem' },
        },
        h2: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: '2.8rem',
            '@media (max-width:600px)': { fontSize: '2rem' },
        },
        h3: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '2rem',
        },
        h5: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
        },
        h6: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
        },
        body1: {
            fontFamily: '"Inter", sans-serif',
            lineHeight: 1.8,
        },
        button: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            letterSpacing: '0.02em',
        },
    },
    shape: { borderRadius: 16 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none',
                    padding: '10px 24px',
                },
                contained: {
                    background: 'linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)',
                    boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #5A52E0 0%, #00B8D9 100%)',
                        boxShadow: '0 6px 30px rgba(108, 99, 255, 0.5)',
                    },
                },
                outlined: {
                    borderColor: '#6C63FF',
                    '&:hover': {
                        borderColor: '#00D9FF',
                        background: 'rgba(108, 99, 255, 0.08)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    background: 'rgba(20, 27, 45, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(108, 99, 255, 0.15)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    background: 'rgba(20, 27, 45, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(108, 99, 255, 0.1)',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
    },
});

export default theme;
