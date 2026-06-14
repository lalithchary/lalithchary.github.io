import { Box, Container, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { resumeData } from '../data/resume';

const Footer = () => (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid rgba(108,99,255,0.1)' }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
                <IconButton href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton href={`mailto:${resumeData.personalInfo.email}`} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                    <EmailIcon />
                </IconButton>
                <IconButton href="https://github.com/lalithchary" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                    <GitHubIcon />
                </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} {resumeData.personalInfo.name}. Built with React & ❤️
            </Typography>
        </Container>
    </Box>
);

export default Footer;
