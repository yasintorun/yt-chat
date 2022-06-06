import { Box, Button, Dialog, DialogTitle, Divider, Grid, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface modalProps {
    anchors: [boolean, Function],
}

const CreateRoomModal: React.FC<modalProps> = ({ anchors }) => {
    const [open, setOpen] = anchors

    return (
        <Dialog onClose={() => setOpen(false)} open={open} fullWidth>
            <DialogTitle sx={{ textAlign: "center" }}>Oda Oluştur</DialogTitle>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ p: 2 }}
            >
                <Stack spacing={3}>
                    <TextField fullWidth id="username" label="Kullanıcı Adı" variant="outlined" color='info' />
                    <TextField fullWidth id="roomName" label="Oda Adı" variant="outlined" color='info' />
                    <TextField type="number" fullWidth id="maxMember" label="En fazla kaç kişi katılabilir?" variant="outlined" color='info' />

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Oda Türü</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="private" control={<Radio />} label="Gizli" />
                            <FormControlLabel value="public" control={<Radio />} label="Açık" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" fullWidth color="success">Oda Oluştur</Button>
                </Stack>
            </Box>
        </Dialog>
    )
}

export default CreateRoomModal