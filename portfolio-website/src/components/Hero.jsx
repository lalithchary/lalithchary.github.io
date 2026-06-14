import { Box, Typography, Button, Container } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '../data/resume';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState, useEffect } from 'react';

const TypeWriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index];
        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(word.substring(0, text.length + 1));
                if (text === word) setTimeout(() => setDeleting(true), 1500);
            } else {
                setText(word.substring(0, text.length - 1));
                if (text === '') {
                    setDeleting(false);
                    setIndex((i) => (i + 1) % words.length);
                }
            }
        }, deleting ? 40 : 80);
        return () => clearTimeout(timeout);
    }, [text, deleting, index, words]);

    return (
        <span>
            {text}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ borderRight: '3px solid #6C63FF', marginLeft: 2 }}
            />
        </span>
    );
};

const FloatingOrb = ({ size, x, y, delay, color }) => (
    <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
        style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            background: color,
            filter: 'blur(40px)',
            left: x,
            top: y,
            opacity: 0.4,
        }}
    />
);

const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const y = useTransform(scrollY, [0, 400], [0, 100]);

    return (
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Gradient mesh background */}
            <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(108,99,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,217,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(108,99,255,0.08) 0%, transparent 50%)' }} />

            <FloatingOrb size={300} x="10%" y="20%" delay={0} color="rgba(108,99,255,0.3)" />
            <FloatingOrb size={200} x="70%" y="60%" delay={2} color="rgba(0,217,255,0.25)" />
            <FloatingOrb size={150} x="80%" y="10%" delay={4} color="rgba(108,99,255,0.2)" />
            <FloatingOrb size={100} x="20%" y="70%" delay={1} color="rgba(0,217,255,0.2)" />

            {/* Grid pattern overlay */}
            <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(108,99,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.5 }} />

            <motion.div style={{ opacity, y, position: 'relative', zIndex: 1, width: '100%' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Typography variant="body1" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 3, mb: 2, textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            Welcome to my portfolio
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Typography variant="h1" sx={{ mb: 3, background: 'linear-gradient(135deg, #F0F0F5 0%, #A0A8C0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {resumeData.personalInfo.name}
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                        <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: 400, mb: 4, minHeight: '2.5em', fontSize: { xs: '1.2rem', md: '1.6rem' } }}>
                            <TypeWriter words={resumeData.personalInfo.roles} />
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button variant="contained" size="large" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                                Explore My Work
                            </Button>
                            <Button variant="outlined" size="large" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                Get In Touch
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
            >
                <ArrowDownwardIcon sx={{ color: 'text.secondary', fontSize: 28 }} />
            </motion.div>
        </Box>
    );
};

export default Hero;
