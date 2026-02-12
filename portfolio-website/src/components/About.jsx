import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const About = () => {
    return (
        <Box id="about" sx={{ py: 10, background: '#0a1929' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
                        About Me
                        <Box component="span" sx={{ display: 'block', height: 4, width: 60, bgcolor: 'secondary.main', mx: 'auto', mt: 1 }} />
                    </Typography>

                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%',
                                }}
                            >
                                <PrecisionManufacturingIcon sx={{ fontSize: 200, color: 'rgba(0, 229, 255, 0.2)' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.paper', borderLeft: '4px solid #00e5ff' }}>
                                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    {resumeData.personalInfo.about}
                                </Typography>
                                <Box sx={{ mt: 3, display: 'flex', gap: 4 }}>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Location</Typography>
                                        <Typography variant="body1">{resumeData.personalInfo.location}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Experience</Typography>
                                        <Typography variant="body1">8+ Years</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About;
