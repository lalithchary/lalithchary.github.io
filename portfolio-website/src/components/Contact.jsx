import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { resumeData } from '../data/resume';

const Contact = () => {
    // Replace with your Formspree ID or use a generic one for testing
    // For now, we simulate submission or use a placeholder form
    const [state, handleSubmit] = useForm("PLACEHOLDER_FORMSPREE_ID");
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Since we don't have a real ID, we'll manually handle submission for the demo
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const onSubmit = (e) => {
        e.preventDefault();
        // Simulate sending
        console.log("Form Data:", formData);
        setOpenSnackbar(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Box id="contact" sx={{ py: 10, bgcolor: '#0a1929' }}>
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
                    Get In Touch
                    <Box component="span" sx={{ display: 'block', height: 4, width: 60, bgcolor: 'secondary.main', mx: 'auto', mt: 1 }} />
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h5" color="primary" gutterBottom>
                                Contact Information
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Feel free to reach out for collaborations or just to say hi!
                            </Typography>

                            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', mb: 2 }}>
                                <EmailIcon sx={{ mr: 2, color: 'secondary.main' }} />
                                <Typography variant="body1">{resumeData.personalInfo.email}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PhoneIcon sx={{ mr: 2, color: 'secondary.main' }} />
                                <Typography variant="body1">{resumeData.personalInfo.phone}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LinkedInIcon sx={{ mr: 2, color: 'secondary.main' }} />
                                <Typography variant="body1" component="a" href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                                    LinkedIn Profile
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Paper component="form" onSubmit={onSubmit} sx={{ p: 4, bgcolor: '#132f4c' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        size="large"
                                        endIcon={<SendIcon />}
                                        sx={{ mt: 2 }}
                                    >
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully! (Demo Mode)
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
