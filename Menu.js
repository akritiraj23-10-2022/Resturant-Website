import React from 'react';
import { MenuList } from '../../data/data';
import Layout from '../Layout/Layout';
import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
    <Box sx={{display:"flex", flexWrap: "wrap", justifyContent:"center",m:2}}>
      {
        MenuList.map(menu => (
          <Card sx={{maxWidth:'390px', display: "flex", m:2}}>
            <CardActionArea>
              <CardMedia 
              sx={{minHeight:"400px" , m:4}}  
              component={'img'}
             src={menu.image} 
             alt={menu.name}
             />
             <CardActionArea>
              <Typography variant="h5" gutterBottom component={"div"}>
                {menu.name}
              </Typography>
              <Typography variant="body2">
                {menu.descripton}
              </Typography>
             </CardActionArea>
            </CardActionArea>
          </Card>
        ))
      }
    </Box>
    </Layout>
  );
};

export default Menu;