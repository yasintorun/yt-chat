import { Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

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
          <Grid item sm={8}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime totam eum suscipit obcaecati voluptatum reprehenderit sit architecto eligendi aperiam cumque, labore accusamus, unde accusantium ducimus iure nostrum, repellat nisi doloribus. Porro tempore quidem assumenda quisquam vero officiis error totam? Eius reprehenderit repellat aliquam magni pariatur voluptatum officia quam corporis, nihil ratione velit alias quaerat molestiae nesciunt, ab hic fuga temporibus! Dolore eius harum ratione reprehenderit non, qui officia, amet doloribus quae vero voluptates eos velit ab perferendis exercitationem sequi rerum explicabo earum voluptate. Pariatur voluptatum laudantium esse possimus beatae suscipit, dolores, excepturi doloremque repellendus nulla rem quam ut accusantium totam!
          </Grid>
          <Grid item sm={2}>
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
              <Typography component="p" variant="p" color="teal">
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