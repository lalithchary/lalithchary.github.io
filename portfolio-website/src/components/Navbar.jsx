import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { motion } from 'framer-motion';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Contact', id: 'contact' },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setDrawerOpen(false);
        }
    };

    return (
        <>
            <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(10, 25, 41, 0.8)', backdropFilter: 'blur(8px)' }}>
                <Toolbar>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer' }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <EngineeringIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                        <Typography variant="h6" component="div" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                            LNM
                        </Typography>
                    </motion.div>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{ display: 'inline-block' }}
                                >
                                    <Button
                                        color="inherit"
                                        onClick={() => handleScroll(item.id)}
                                        sx={{ ml: 2, '&:hover': { color: theme.palette.primary.main } }}
                                    >
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: { width: 250, background: theme.palette.background.paper }
                }}
            >
                <List>
                    {navItems.map((item) => (
                        <ListItem button key={item.id} onClick={() => handleScroll(item.id)}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
