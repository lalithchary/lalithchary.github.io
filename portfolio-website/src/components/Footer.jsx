
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#050f1a', py: 3, borderTop: '1px solid rgba(0, 229, 255, 0.1)' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    {'© '}
                    {new Date().getFullYear()}
                    {' Lakshmi Narayanachary Modepalli. All rights reserved.'}
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary" align="center" sx={{ mt: 1 }}>
                    Designed with Materialistic Movement Theme
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
