import { Divider, Paper, Typography } from '@mui/material';
import React from 'react';

interface MessageProps {
    color: string,
    text: string,
    username: string,
}

const Message = ({ color, text, username }: MessageProps) => {
    return (
        <Paper sx={{p: 2, mt: 2, mb: 2}}>
            <Typography component="p" color={color}>{username}</Typography>
            <div style={{borderLeft: "3px solid gray", borderLeftColor: color, borderRadius: 5, padding: 10}}>
                {text}
            </div>
        </Paper>
    )
}

export default Message