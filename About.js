import React from 'react';
import Layout from '../Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
   <Layout>
    <Box 
    sx={{
      my: 15,
      textAlign: "center",
      p:2,
      "& h4": {
        fontWeight: 'bold',
        my :2,
        fontSize: "2rem",

      },
      "& p": {
        textAlign: "justify",
      },
      "@media (max-width:600px)": {
        mt: 0,
        "& h4": {
          fontSize: "1.5rem",
        },
      },
    }}
    >
      <Typography variant="h4">
        Welcome To My Resturant
      </Typography>
      <p>
      My Favorite Restaurant
    I always enjoy eating at a restaurant, probably because it means I do not have to cook! My mother always told me that it is much more healthier for me to have a meal at home. I actually like cooking, but sometimes it wastes a lot of time, because of my busy study. When the wonderful time comes to go , my first favorite place is the Teriyaki Restaurant. It is undeniable that Teriyaki is the best restaurant. I am so happy to introduce it. It is located in the campus near my class, I visit this restaurant 5 to 6 times per week. The first time when I visited, I instantly felt the great welcome and smelled the delicious food. It has beautiful decor and looks very fashionable. It has a whole wall made by glass so that sunlight could stream in the room. In addition, sofas replaced chairs so that we can sit very comfortable. To our satisfaction, they have a lot kinds of food supplied to us. Everyone can find the favorite food here. It also provides good services and waiters are kind hearted, they always keep smiling and ask me whether everything is ok when I am eating. Each time when I go to this restaurant, I would like to take pictures of the food, It looks silly, but I just love how the food looks like. As an added bonus, it provides carryout service,and the order always arrive in a short time.
I do like this restaurant,Do you want to have a try?
      </p>
      <br/>
      <p>
      My favorite restaurant for sure is one that specializes in chicken meals. The name of my favorite restaurant is “…?…”.
It contains in the menu many recipes of chicken. I would prefer to order the Portuguese style chicken.
So it contains a lot of hot spices. I prefer to choose the shape of the chicken and how to present it, whether it is with bones or boneless. Like a chicken burger or grilled chicken. Or other delicious recipes that I find very nice.
I love to serve salads and appetizers first. Then serve the main meal in addition to some of the side dishes that I can add to the meal. All this is very nice to me.
      </p>
    </Box>
   </Layout>
  )
}

export default About;