import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at 50% 50%, #132f4c 0%, #0a1929 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated Background Elements - Abstract "Gears" */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '50vw',
                    height: '50vw',
                    border: '1px dashed rgba(0, 229, 255, 0.1)',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '60vw',
                    height: '60vw',
                    border: '1px solid rgba(255, 61, 0, 0.05)',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h5" color="primary" gutterBottom sx={{ letterSpacing: 2 }}>
                        HELLO, I AM
                    </Typography>
                    <Typography variant="h1" gutterBottom sx={{ mb: 2 }}>
                        {resumeData.personalInfo.name}
                    </Typography>
                    <Typography variant="h4" color="text.secondary" gutterBottom sx={{ mb: 4, fontWeight: 300 }}>
                        {resumeData.personalInfo.role}
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Button
                            variant="outlined"
                            size="large"
                            endIcon={<ArrowDownwardIcon />}
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            sx={{ mt: 4, px: 4, py: 1.5, fontSize: '1.1rem' }}
                        >
                            Explore My Work
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;
