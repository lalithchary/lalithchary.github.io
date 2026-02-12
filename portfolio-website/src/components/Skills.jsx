
import { Box, Container, Typography, Grid, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    return (
        <Box id="skills" sx={{ py: 10, bgcolor: '#0d2137' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
                    Skills & Expertise
                    <Box component="span" sx={{ display: 'block', height: 4, width: 60, bgcolor: 'primary.main', mx: 'auto', mt: 1 }} />
                </Typography>

                <Grid container spacing={4}>
                    {resumeData.skills.map((category, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                style={{ height: '100%' }}
                            >
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        background: 'linear-gradient(145deg, #132f4c 0%, #0a1929 100%)',
                                        borderTop: `4px solid ${index === 0 ? '#00e5ff' : index === 1 ? '#ff3d00' : '#76ff03'}`
                                    }}
                                >
                                    <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                                        {category.category}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {category.items.map((item, i) => (
                                            <Chip
                                                key={i}
                                                label={item}
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                                    color: 'text.primary',
                                                    '&:hover': {
                                                        borderColor: 'primary.main',
                                                        bgcolor: 'rgba(0, 229, 255, 0.05)',
                                                    }
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills;
