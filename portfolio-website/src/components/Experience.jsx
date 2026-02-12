import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
    return (
        <Box id="experience" sx={{ py: 10, bgcolor: '#0d2137' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
                        Professional Experience
                        <Box component="span" sx={{ display: 'block', height: 4, width: 60, bgcolor: 'primary.main', mx: 'auto', mt: 1 }} />
                    </Typography>

                    <Box sx={{ position: 'relative' }}>
                        {/* Vertical Line */}
                        <Box sx={{
                            position: 'absolute',
                            left: { xs: 20, md: '50%' },
                            top: 0,
                            bottom: 0,
                            width: 2,
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            transform: { md: 'translateX(-50%)' }
                        }} />

                        {resumeData.experience.map((exp, index) => (
                            <Box key={index} sx={{ mb: 6, position: 'relative' }}>
                                <Grid container spacing={4} direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                                    {/* Timeline Dot */}
                                    <Box sx={{
                                        position: 'absolute',
                                        left: { xs: 20, md: '50%' },
                                        transform: 'translateX(-50%)',
                                        width: 40,
                                        height: 40,
                                        bgcolor: 'secondary.main',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1,
                                        top: 0
                                    }}>
                                        <WorkIcon sx={{ color: 'white', fontSize: 20 }} />
                                    </Box>

                                    {/* Date (for desktop) - Left side for even, Right side for odd */}
                                    <Grid item xs={12} md={6} sx={{
                                        textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
                                        pt: { xs: 0 },
                                        display: { xs: 'none', md: 'block' }
                                    }}>
                                        <Typography variant="h5" color="primary" sx={{ mt: 1 }}>{exp.period}</Typography>
                                    </Grid>

                                    {/* Content Card */}
                                    <Grid item xs={12} md={6} sx={{ pl: { xs: 8, md: 4 }, pr: { xs: 0, md: 4 } }}>
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <Paper sx={{ p: 3, position: 'relative' }}>
                                                {/* Date for mobile */}
                                                <Typography variant="h6" color="primary" sx={{ display: { md: 'none' }, mb: 1 }}>{exp.period}</Typography>

                                                <Typography variant="h5" gutterBottom>{exp.role}</Typography>
                                                <Typography variant="h6" color="text.secondary" gutterBottom>{exp.company}</Typography>
                                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                    {exp.description.map((desc, i) => (
                                                        <Typography component="li" key={i} variant="body2" sx={{ mb: 1 }}>
                                                            {desc}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Paper>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Experience;
