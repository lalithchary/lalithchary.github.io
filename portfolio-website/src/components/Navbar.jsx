import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setDrawerOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" elevation={0} sx={{ background: scrolled ? 'rgba(11,15,26,0.85)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(108,99,255,0.1)' : 'none', transition: 'all 0.3s' }}>
                <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, md: 3 } }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Typography variant="h6" sx={{ fontFamily: '"Poppins"', fontWeight: 700, background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            LC.
                        </Typography>
                    </motion.div>

                    {isMobile ? (
                        <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            {navItems.map((item, i) => (
                                <motion.div key={item.id} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                    <Button onClick={() => handleScroll(item.id)} sx={{ color: 'text.secondary', fontWeight: 500, '&:hover': { color: 'primary.main', background: 'rgba(108,99,255,0.08)' } }}>
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navItems.length * 0.1 }}>
                                <Button
                                    component="a"
                                    href="/resume.txt"
                                    download="Lakshmi_Narayanachary_Modepalli_Resume.txt"
                                    variant="outlined"
                                    size="small"
                                    startIcon={<DownloadIcon />}
                                    sx={{
                                        ml: 1,
                                        borderColor: '#6C63FF',
                                        color: '#00D9FF',
                                        fontWeight: 600,
                                        borderRadius: '20px',
                                        px: 2,
                                        '&:hover': {
                                            borderColor: '#00D9FF',
                                            background: 'rgba(108,99,255,0.15)'
                                        }
                                    }}
                                >
                                    Download Resume
                                </Button>
                            </motion.div>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: 280, background: 'rgba(11,15,26,0.95)', backdropFilter: 'blur(20px)' } }}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem button key={item.id} onClick={() => handleScroll(item.id)} sx={{ py: 2, '&:hover': { background: 'rgba(108,99,255,0.08)' } }}>
                            <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'h6', fontWeight: 500 }} />
                        </ListItem>
                    ))}
                    <ListItem
                        button
                        component="a"
                        href="/resume.txt"
                        download="Lakshmi_Narayanachary_Modepalli_Resume.txt"
                        sx={{ py: 2, '&:hover': { background: 'rgba(108,99,255,0.08)' } }}
                    >
                        <DownloadIcon sx={{ color: '#00D9FF', mr: 1.5 }} />
                        <ListItemText primary="Download Resume" primaryTypographyProps={{ variant: 'h6', fontWeight: 600, color: '#00D9FF' }} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
