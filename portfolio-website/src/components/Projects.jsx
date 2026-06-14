import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const ProjectCard = ({ project, index }) => (
    <Grid item xs={12} md={6} lg={4}>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ height: '100%' }}
        >
            <Paper sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s', cursor: 'default', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 60px rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.4)' } }}>
                <Typography variant="h4" sx={{ mb: 2 }}>{project.icon}</Typography>
                <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                    {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {project.tags.map((tag, i) => (
                        <Chip key={i} label={tag} size="small" sx={{ background: 'rgba(108,99,255,0.1)', color: '#A0A8C0', fontSize: '0.7rem', fontWeight: 600 }} />
                    ))}
                </Box>
            </Paper>
        </motion.div>
    </Grid>
);

const Projects = () => (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(108,99,255,0.05) 0%, transparent 50%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                    Key <Box component="span" sx={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</Box>
                </Typography>
                <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #6C63FF, #00D9FF)', mx: 'auto', borderRadius: 2, mb: 8 }} />
            </motion.div>

            <Grid container spacing={3}>
                {resumeData.projects.map((project, i) => (
                    <ProjectCard key={i} project={project} index={i} />
                ))}
            </Grid>
        </Container>
    </Box>
);

export default Projects;
