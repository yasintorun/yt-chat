import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Message from '../components/Message';

const EditablePaper = styled(Paper)(({ theme }) => ({
  padding: "5px 10px",
  backgroundColor: theme.palette.background.paper,
}));

const ChatPage = () => {
  return (
    <div>
      <Container
        style={{
          overflow: "hidden",
          minWidth: "100%",
          height: "100vh",
          padding: 0,
        }}
      >
        <Grid container sx={{ height: "100%", marginTop: 0 }}>
          <Grid item sm={8} sx={{height: "100%"}}>
            <div style={{paddingBottom: 10, height: "100%", marginBottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{flex: 1, height: "100%", overflow: "auto", padding: "0px 20px"}}>
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
                <Message
                  username='Yasin Torun'
                  text="Merhaba arkadaşlar"
                  color="red"
                />
              </div>
              <EditablePaper elevation={0}> 
                  <TextField label="Mesaj yazınız.." fullWidth />
              </EditablePaper>
            </div>
          </Grid>
          <Grid item sm={2} sx={{height: "100%", overflow: "auto"}}>
            <Paper sx={{ height: "100%", padding: 2 }}>
              <Typography component="h1" variant="h4" textAlign="center" fontWeight={600} color="tomato">
                Kullanıcılar
              </Typography>

            </Paper>
          </Grid>
          <Grid item sm={2}>
            <Paper sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "end", textAlign: "center", padding: 2 }}>
              <Button variant="contained" color="error">Odayı Sonlandır</Button>
              <br />
              <Typography component="p" color="teal">
                Yasin Torun
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ChatPage