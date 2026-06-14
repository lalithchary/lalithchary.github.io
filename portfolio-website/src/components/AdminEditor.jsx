import { useState, useEffect } from 'react';
import { Box, Drawer, IconButton, Typography, TextField, Button, Tabs, Tab, Paper, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { resumeData } from '../data/resume';

const AdminEditor = () => {
    const [open, setOpen] = useState(false);
    const [showFab, setShowFab] = useState(false);
    const [tab, setTab] = useState(0);
    const [data, setData] = useState(JSON.parse(JSON.stringify(resumeData)));
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('admin') === 'true') setShowFab(true);

        const handler = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'E') {
                e.preventDefault();
                setShowFab(true);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const updateField = (path, value) => {
        setData((prev) => {
            const next = JSON.parse(JSON.stringify(prev));
            const keys = path.split('.');
            let obj = next;
            keys.slice(0, -1).forEach((k) => { obj = obj[k]; });
            obj[keys[keys.length - 1]] = value;
            return next;
        });
    };

    const exportCode = () => {
        const code = `export const resumeData = ${JSON.stringify(data, null, 2)};\n`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!showFab) return null;

    return (
        <>
            <Fab color="primary" onClick={() => setOpen(true)} sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, background: 'linear-gradient(135deg, #6C63FF, #00D9FF)' }}>
                <EditIcon />
            </Fab>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: { xs: '100%', md: 450 }, background: '#0B0F1A', p: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" fontWeight={700}>✏️ Edit Portfolio</Typography>
                    <IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton>
                </Box>

                <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" scrollButtons="auto" sx={{ mb: 2, '& .MuiTab-root': { fontSize: '0.75rem', minWidth: 60 } }}>
                    <Tab label="Info" />
                    <Tab label="About" />
                    <Tab label="Skills" />
                    <Tab label="Experience" />
                    <Tab label="Projects" />
                </Tabs>

                <Box sx={{ flex: 1, overflow: 'auto', pb: 10 }}>
                    {tab === 0 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField size="small" label="Display Name" value={data.personalInfo.name} onChange={(e) => updateField('personalInfo.name', e.target.value)} />
                            <TextField size="small" label="Email" value={data.personalInfo.email} onChange={(e) => updateField('personalInfo.email', e.target.value)} />
                            <TextField size="small" label="Phone" value={data.personalInfo.phone} onChange={(e) => updateField('personalInfo.phone', e.target.value)} />
                            <TextField size="small" label="Location" value={data.personalInfo.location} onChange={(e) => updateField('personalInfo.location', e.target.value)} />
                            <TextField size="small" label="LinkedIn" value={data.personalInfo.linkedin} onChange={(e) => updateField('personalInfo.linkedin', e.target.value)} />
                            <Typography variant="caption" color="text.secondary">Roles (one per line)</Typography>
                            <TextField size="small" multiline rows={4} value={data.personalInfo.roles.join('\n')} onChange={(e) => updateField('personalInfo.roles', e.target.value.split('\n').filter(Boolean))} />
                        </Box>
                    )}

                    {tab === 1 && (
                        <TextField size="small" label="About Text" multiline rows={6} fullWidth value={data.personalInfo.about} onChange={(e) => updateField('personalInfo.about', e.target.value)} />
                    )}

                    {tab === 2 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {data.skills.map((cat, ci) => (
                                <Paper key={ci} sx={{ p: 2 }}>
                                    <TextField size="small" fullWidth label="Category" value={cat.category} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.skills[ci].category = e.target.value; setData(d); }} sx={{ mb: 1 }} />
                                    {cat.items.map((skill, si) => (
                                        <Box key={si} sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                                            <TextField size="small" label="Skill" value={skill.name} sx={{ flex: 1 }} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.skills[ci].items[si].name = e.target.value; setData(d); }} />
                                            <TextField size="small" label="%" type="number" value={skill.level} sx={{ width: 70 }} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.skills[ci].items[si].level = Number(e.target.value); setData(d); }} />
                                            <IconButton size="small" onClick={() => { const d = JSON.parse(JSON.stringify(data)); d.skills[ci].items.splice(si, 1); setData(d); }} sx={{ color: 'error.main' }}>✕</IconButton>
                                        </Box>
                                    ))}
                                    <Button size="small" onClick={() => { const d = JSON.parse(JSON.stringify(data)); d.skills[ci].items.push({ name: 'New Skill', level: 70 }); setData(d); }}>+ Add Skill</Button>
                                </Paper>
                            ))}
                        </Box>
                    )}

                    {tab === 3 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {data.experience.map((exp, ei) => (
                                <Paper key={ei} sx={{ p: 2 }}>
                                    <TextField size="small" fullWidth label="Role" value={exp.role} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.experience[ei].role = e.target.value; setData(d); }} sx={{ mb: 1 }} />
                                    <TextField size="small" fullWidth label="Period" value={exp.period} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.experience[ei].period = e.target.value; setData(d); }} sx={{ mb: 1 }} />
                                    <Typography variant="caption" color="text.secondary">Highlights (one per line)</Typography>
                                    <TextField size="small" fullWidth multiline rows={4} value={exp.highlights.join('\n')} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.experience[ei].highlights = e.target.value.split('\n').filter(Boolean); setData(d); }} />
                                </Paper>
                            ))}
                        </Box>
                    )}

                    {tab === 4 && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {data.projects.map((proj, pi) => (
                                <Paper key={pi} sx={{ p: 2 }}>
                                    <TextField size="small" fullWidth label="Title" value={proj.title} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.projects[pi].title = e.target.value; setData(d); }} sx={{ mb: 1 }} />
                                    <TextField size="small" fullWidth multiline rows={2} label="Description" value={proj.description} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.projects[pi].description = e.target.value; setData(d); }} sx={{ mb: 1 }} />
                                    <TextField size="small" fullWidth label="Tags (comma separated)" value={proj.tags.join(', ')} onChange={(e) => { const d = JSON.parse(JSON.stringify(data)); d.projects[pi].tags = e.target.value.split(',').map(t => t.trim()).filter(Boolean); setData(d); }} />
                                </Paper>
                            ))}
                            <Button size="small" onClick={() => { const d = JSON.parse(JSON.stringify(data)); d.projects.push({ title: 'New Project', description: '', tags: [], icon: '🆕' }); setData(d); }}>+ Add Project</Button>
                        </Box>
                    )}
                </Box>

                <Box sx={{ position: 'sticky', bottom: 0, pt: 2, background: '#0B0F1A' }}>
                    <Button variant="contained" fullWidth startIcon={<ContentCopyIcon />} onClick={exportCode}>
                        {copied ? '✓ Copied to clipboard!' : 'Copy resume.js to clipboard'}
                    </Button>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
                        Paste into src/data/resume.js and commit
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};

export default AdminEditor;
