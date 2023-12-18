import React from 'react'
import Layout from '../Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { 
  Box,
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography
 } from '@mui/material';
import { red } from '@mui/material/colors';

const Contact = () => {
  return(
   <Layout>
  <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
    <Typography variant="h4">
      Contact My Resturant
    </Typography>
    <p>
     My restaurant slogans and taglines for many different restaurant types from fast food to fine dining, and more. These examples are packed with restaurant slogan ideas that you can use to help your venue attract new guests, and make them remember whats unique about your specific restaurant!
    </p>
  </Box>
  <Box sx={{ 
    m: 3,
    width: "600px",
    ml: 10,
    "@media (max-width:600px)": {
      width: "300px",
    },
   }}>
  <TableContainer component={Paper}>
      <Table aria-label="contact table">
        <TableHead>
          <TableRow>
          <TableCell sx={{bgcolor:'black' , color:'white',}} align="center">
            Contact Details
          </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{ color : "blue", pt:1 }}/> 1800-00-0000(Tollfree)
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
              <EmailIcon sx={{ color: "Skyblue", pt:1}}/> help@myrest gmail.com
            </TableCell>
          </TableRow>
          <TableCell>
              <CallIcon sx={{ color: "green", pt:1}}/> 7458489658
            </TableCell>
        </TableBody>
      </Table>
  </TableContainer>
  </Box>
   </Layout>
  )
}

export default Contact;