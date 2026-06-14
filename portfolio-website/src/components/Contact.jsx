import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { resumeData } from '../data/resume';

const ContactInfo = ({ icon: Icon, label, value, href }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
        <Box sx={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(108,99,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon sx={{ color: 'primary.main', fontSize: 20 }} />
        </Box>
        <Box>
            <Typography variant="caption" color="text.secondary">{label}</Typography>
            {href ? (
                <Typography variant="body2" component="a" href={href} target="_blank" rel="noopener" sx={{ display: 'block', color: 'text.primary', textDecoration: 'none', fontWeight: 500, '&:hover': { color: 'primary.main' } }}>
                    {value}
                </Typography>
            ) : (
                <Typography variant="body2" fontWeight={500}>{value}</Typography>
            )}
        </Box>
    </Box>
);

const Contact = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('https://formspree.io/f/mlgkaovl', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setOpenSnackbar(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (err) { /* silent */ }
        setSubmitting(false);
    };

    return (
        <Box id="contact" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
            <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(108,99,255,0.06) 0%, transparent 50%)' }} />
            <Container maxWidth="lg" sx={{ position: 'relative' }}>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                        Get In <Box component="span" sx={{ background: 'linear-gradient(135deg, #6C63FF, #00D9FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</Box>
                    </Typography>
                    <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #6C63FF, #00D9FF)', mx: 'auto', borderRadius: 2, mb: 2 }} />
                    <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 500, mx: 'auto' }}>
                        Open to opportunities in IT Infrastructure, Manufacturing Systems, and Process Automation roles.
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <ContactInfo icon={EmailIcon} label="Email" value={resumeData.personalInfo.email} href={`mailto:${resumeData.personalInfo.email}`} />
                            <ContactInfo icon={PhoneIcon} label="Phone" value={resumeData.personalInfo.phone} href={`tel:${resumeData.personalInfo.phone}`} />
                            <ContactInfo icon={LinkedInIcon} label="LinkedIn" value="linkedin.com/in/lalithchary" href={`https://${resumeData.personalInfo.linkedin}`} />
                            <ContactInfo icon={LocationOnIcon} label="Location" value={resumeData.personalInfo.location} />
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <Paper component="form" onSubmit={onSubmit} sx={{ p: 4 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '& fieldset': { borderColor: 'rgba(108,99,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth label="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '& fieldset': { borderColor: 'rgba(108,99,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Message" multiline rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2, '& fieldset': { borderColor: 'rgba(108,99,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" size="large" fullWidth endIcon={<SendIcon />} disabled={submitting} sx={{ py: 1.5, mt: 1 }}>
                                            {submitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
                <Alert severity="success" onClose={() => setOpenSnackbar(false)}>Message sent successfully!</Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
