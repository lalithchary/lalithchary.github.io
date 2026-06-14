import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const TimelineItem = ({ exp, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
    >
        <Box sx={{ display: 'flex', mb: 4, position: 'relative', flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }, alignItems: { md: 'center' }, gap: 3 }}>
            {/* Timeline dot */}
            <Box sx={{ position: 'absolute', left: { xs: 0, md: '50%' }, transform: { md: 'translateX(-50%)' }, width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', boxShadow: '0 0 20px rgba(108,99,255,0.5)', zIndex: 2, display: { xs: 'none', md: 'block' } }} />

            {/* Period */}
            <Box sx={{ flex: 1, textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' }, display: { xs: 'none', md: 'block' } }}>
                <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600 }}>{exp.period}</Typography>
                <Chip label={exp.type} size="small" sx={{ mt: 1, background: exp.type === 'IT' ? 'rgba(108,99,255,0.15)' : 'rgba(0,217,255,0.15)', color: exp.type === 'IT' ? '#6C63FF' : '#00D9FF', fontWeight: 600 }} />
            </Box>

            {/* Card */}
            <Box sx={{ flex: 1, pl: { xs: 3, md: 0 } }}>
                <Paper sx={{ p: 3, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 10px 40px rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.3)' } }}>
                    <Typography variant="body2" color="secondary.main" sx={{ display: { md: 'none' }, mb: 1 }}>{exp.period}</Typography>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>{exp.role}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{exp.company}</Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {exp.highlights.map((h, i) => (
                            <Typography component="li" variant="body2" key={i} sx={{ mb: 0.8, color: 'text.secondary', lineHeight: 1.7, '&::marker': { color: '#6C63FF' } }}>
                                {h}
                            </Typography>
                        ))}
                    </Box>
                </Paper>
            </Box>
        </Box>
    </motion.div>
);

const Experience = () => (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 30%, rgba(108,99,255,0.05) 0%, transparent 50%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                    Professional <Box component="span" sx={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experience</Box>
                </Typography>
                <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #6C63FF, #00D9FF)', mx: 'auto', borderRadius: 2, mb: 8 }} />
            </motion.div>

            {/* Timeline line */}
            <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', left: { xs: 0, md: '50%' }, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, #6C63FF, #00D9FF, transparent)', transform: { md: 'translateX(-50%)' }, display: { xs: 'none', md: 'block' } }} />
                {resumeData.experience.map((exp, i) => (
                    <TimelineItem key={i} exp={exp} index={i} />
                ))}
            </Box>
        </Container>
    </Box>
);

export default Experience;
