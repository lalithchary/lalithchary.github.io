
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 10, bgcolor: '#0a1929' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
                    Key Projects
                    <Box component="span" sx={{ display: 'block', height: 4, width: 60, bgcolor: 'secondary.main', mx: 'auto', mt: 1 }} />
                </Typography>

                <Grid container spacing={3}>
                    {resumeData.projects.map((project, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                style={{ height: '100%' }}
                            >
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" gutterBottom color="primary">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" endIcon={<ArrowForwardIcon />} color="secondary">
                                            Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
