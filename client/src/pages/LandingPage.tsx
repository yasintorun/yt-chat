import { Box, Button, Container, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import RoomStackItem from '../components/RoomStackItem';
import CreateRoomModal from '../components/CreateRoomModal';

const LandingPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <Container sx={{ marginTop: 10 }}>
      <Button
        variant="contained"
        sx={{ marginRight: 4 }}
        onClick={() => setOpen(true)}
      >
        Oda Oluştur
      </Button>
      <Button variant="contained" color="secondary">Rastgele bir Odaya Katıl</Button>

      <Box sx={{ padding: "50px 0px" }}>
        <Stack spacing={2}>
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />


          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />



          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
          <RoomStackItem
            isPrivate
            title='Herkes katılabilir. Sohbet & Muhabbet'
            totalMember={12}
          />
        </Stack>
      </Box>

      <CreateRoomModal anchors={[open, setOpen]} />
    </Container>
  )
}

export default LandingPage