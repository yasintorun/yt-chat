import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, Chip, Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary,
    width: "100%",
}));

interface RoomStackItemProps {
    title: string,
    totalMember: number | string,
    isPrivate: boolean
}

const RoomStackItem: React.FC<RoomStackItemProps> = ({ ...props }) => {
    return (
        <Item>
            <div>
                <p>{props.title}</p>
                <div style={{ display: "flex", justifyContent: "start" }}>
                    <Chip label={"Kişi Sayısı: " + props.totalMember} color="primary" sx={{ mr: 3 }} />
                    {props.isPrivate && (
                        <Chip label="Gizli" color="warning" />
                    )}
                </div>
            </div>
            <div>
                {props.isPrivate ? (
                    <Button disabled>Bu odaya katılamazsınız.</Button>
                ) : (
                    <Button variant="contained" size='large' color="success">Katıl</Button>
                )}
            </div>
        </Item>
    )
}

export default RoomStackItem