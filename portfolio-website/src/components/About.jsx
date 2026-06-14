import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const StatCard = ({ stat, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Paper sx={{ p: 3, textAlign: 'center', background: 'rgba(108,99,255,0.05)', border: '1px solid rgba(108,99,255,0.15)', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', border: '1px solid rgba(108,99,255,0.4)', boxShadow: '0 10px 40px rgba(108,99,255,0.15)' } }}>
            <Typography variant="h3" sx={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800, mb: 0.5 }}>
                {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
        </Paper>
    </motion.div>
);

const About = () => (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(0,217,255,0.05) 0%, transparent 50%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                    About <Box component="span" sx={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Me</Box>
                </Typography>
                <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #6C63FF, #00D9FF)', mx: 'auto', borderRadius: 2, mb: 6 }} />
            </motion.div>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <Paper sx={{ p: 4, borderLeft: '4px solid', borderImage: 'linear-gradient(180deg, #6C63FF, #00D9FF) 1' }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'text.secondary' }}>
                                {resumeData.personalInfo.about}
                            </Typography>
                            <Box sx={{ mt: 3, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">📍 Location</Typography>
                                    <Typography variant="body2" fontWeight={600}>{resumeData.personalInfo.location}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">📧 Email</Typography>
                                    <Typography variant="body2" fontWeight={600}>{resumeData.personalInfo.email}</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container spacing={2}>
                        {resumeData.personalInfo.stats.map((stat, i) => (
                            <Grid item xs={6} key={i}>
                                <StatCard stat={stat} index={i} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Box>
);

export default About;
