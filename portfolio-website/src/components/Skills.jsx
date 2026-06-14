import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const SkillBar = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
    >
        <Box sx={{ mb: 2.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" fontWeight={500}>{skill.name}</Typography>
                <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
            </Box>
            <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: 'rgba(108,99,255,0.1)',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        background: 'linear-gradient(90deg, #6C63FF, #00D9FF)',
                    },
                }}
            />
        </Box>
    </motion.div>
);

const Skills = () => (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(0,217,255,0.05) 0%, transparent 50%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                    Skills & <Box component="span" sx={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Expertise</Box>
                </Typography>
                <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #6C63FF, #00D9FF)', mx: 'auto', borderRadius: 2, mb: 8 }} />
            </motion.div>

            <Grid container spacing={4}>
                {resumeData.skills.map((category, idx) => (
                    <Grid item xs={12} md={4} key={idx}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            style={{ height: '100%' }}
                        >
                            <Paper sx={{ p: 4, height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 15px 50px rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)' } }}>
                                <Typography variant="h4" sx={{ mb: 0.5 }}>{category.icon}</Typography>
                                <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>{category.category}</Typography>
                                {category.items.map((skill, i) => (
                                    <SkillBar key={i} skill={skill} index={i} />
                                ))}
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box>
);

export default Skills;
