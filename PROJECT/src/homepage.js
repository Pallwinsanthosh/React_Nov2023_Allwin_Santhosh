import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, CardMedia, Grid, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

const MainContent = styled('div')({
  padding: '40px 0',
});

const backgroundImage = 'url("path/to/your/image.jpg")'; // Replace with the path to your background image

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundImage: backgroundImage,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Content = styled('div')({
  flexGrow: 1,
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const destinations = [
  {
    id: 1,
    name: 'Modular Kitchen',
    image:'https://super.homelane.com/designGallery/kitchen-165709021533316c963ff2ea7_stage.png',
  },
  {
    id: 2,
    name: 'Bedroom',
    image: 'https://super.homelane.com/designGallery/bedroom-1657090215333fee0d8ac4e74_stage.png',
  },
  {
    id: 3,
    name: 'Living Room',
    image: 'https://super.homelane.com/designGallery/livingroom-1657090215333b65475fdadb0_stage.png', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Bathroom',
    image: 'https://super.homelane.com/designGallery/bathroom-1657090215333c6ae2efbaf40_stage.png',
  },
  {
    id: 5,
    name: 'Space Saving Furniture',
    image: 'https://super.homelane.com/designGallery/space_saving-1657090215333a1e77e734bdf_stage.png',
  },
  {
    id: 6,
    name: 'Home Office',
    image: 'https://super.homelane.com/designGallery/livingroom2-1657090215333f5f842dfde81_stage.png',
  },
];
const destination1 = [
  {
    id: 1,
    image:'https://super.homelane.com/Kitchens%20and%20Wardrobes/16812820309300455836f9f1a-HLKT00000834_batch-2-800x600_22-main.jpg',
  },
  {
    id: 2,
    image: 'https://super.homelane.com/Kitchens%20and%20Wardrobes/16812816291234e8fcaffc036-HLKT00000833_batch-2-800x600_10-main.jpg',
  },
  {
    id: 3,
    image: 'https://super.homelane.com/Kitchens%20and%20Wardrobes/1681281429197c2d5e393d345-HLKT00000832_batch-2-800x600_4-main.jpg', // Replace with the actual image URL
  },
  {
    id: 4,
    image: 'https://super.homelane.com/Kitchens%20and%20Wardrobes/1681281087611e01b297c775a-HLKT00000831_batch-2-800x600_3-main.jpg',
  },
];
const destination2 = [
  {
    id: 1,
    image:'https://super.homelane.com/wardrobes/16812826479900de199faa8ef-HLKT00000836_batch-2-800x600_23-main.jpg',
  },
  {
    id: 2,
    image: 'https://super.homelane.com/wardrobes/16812825187988aa51774f366-HLKT00000835_batch-2-800x600_30-main.jpg',
  },
  {
    id: 3,
    image: 'https://super.homelane.com/wardrobes/1680592144790b7c006ce218e-HLKT00000784_Resized-800x600_17-main.jpg', // Replace with the actual image URL
  },
  {
    id: 4,
    image: 'https://super.homelane.com/wardrobes/1642061646574eca227300dc1-HLKT00000765_new-size-800x600_1-main.jpg',
  },
];
const SocialIcons = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

export default function App() {
  return (
    
    <Root>
      
      <AppBar style={{ background: 'transparent', boxShadow: 'none',backgroundColor:'white' }}>

        <Toolbar>
  <IconButton edge="start" color="black" aria-label="open drawer">
    <MenuIcon />
  </IconButton>
  <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
    <h4 style={{color:"Red"}}>Home Renovation and Design</h4>
  </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
  <Button color="inherit" component={Link} to="/gallery" style={{color:"red"}}>
    Gallery
  </Button>
  <Button color="inherit" component={Link} to="/modular-kitchen" style={{color:"red"}}>
    Modular Kitchen
  </Button>
  <Button color="inherit" component={Link} to="/bedroom" style={{color:"red"}}>
    Bedroom
  </Button>
  <Button color="inherit" component={Link} to="/living-room" style={{color:"red"}}>
    Living Room
  </Button>
  <Search>
    {/* ... (your search component) */}
  </Search>
  <Button color='inherit' component={Link} to="/signin" style={{color:"red"}}>
    Sign In
  </Button>
  <Button color="inherit" component={Link} to="/register" style={{color:"red"}}>
    Register
  </Button>
  <Button color="inherit" component={Link} to="/register" style={{color:"white",backgroundColor:"Red"}}>
    Get Free Estimates
  </Button>
  
</Toolbar>

      </AppBar>

      <Content>
        {/* Your main content goes here */}
        <MainContent>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom> 
            <h4 style={{color:"white"}}>Dream Homes</h4>
            <h4 style={{color:"white"}}>Begin With</h4>
            <h4 style={{color:"white"}}>Dream Design</h4>
        </Typography>

        <Typography>
          <button style={{width:"300px",height:"40px",marginLeft:"930px",backgroundColor:"red"}}>
            <h2>Book 3D Design Free</h2></button>
        </Typography>
        
       <Typography>
        <h3 style={{color:"white"}}>Design Gallery</h3>
        <h3 style={{color:"white"}}>If you’re on the lookout for simple home interior designs, look no further than HomeLane for end- to-end interior design services.</h3>
       </Typography>
      </Container>
    </MainContent>
      </Content>
      <Container>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Typography>
      <h3 style={{color:"white"}}>Modular Kitchen Designs</h3>
      <h3 style={{color:"white"}}>Stylish kitchens for the modern home interior design that’s just right for you.</h3>
    </Typography>
    <Container>
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destination1.map((destination1) => (
          <Grid item key={destination1.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination1.image}
                alt={destination1.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination1.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    <Typography>
      <h3 style={{color:"white"}}>BedRoom Designs</h3>
      <h3 style={{color:"white"}}>The simple home interior designs for ergonomic and stylish wardrobes.</h3>
    </Typography>
    <Container>
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destination2.map((destination2) => (
          <Grid item key={destination2.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination2.image}
                alt={destination2.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination2.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

      <Footer style={{ background: 'transparent', boxShadow: 'none',backgroundColor:'black',width:"100%",height:"50px" }}>
        <SocialIcons>
          <a href="#" className="text-white">
            <InstagramIcon style={{ height: '30px', width: '30px', margin: '0 8px' }} />
          </a>
          <a href="#" className="text-white1">
            <FacebookIcon style={{ height: '30px', width: '30px', margin: '0 8px' }} />
          </a>
          <a href="#" className="text-white1">
            <LinkedInIcon style={{ height: '30px', width: '30px', margin: '0 8px' }} />
          </a>
          <a href="#" className="text-white1">
            <TwitterIcon style={{ height: '30px', width: '30px', margin: '0 8px' }} />
          </a>
          <a href="#" className="text-white2">
            <YouTubeIcon style={{ height: '30px', width: '30px', margin: '0 8px' }} />
          </a>
          <a href="#" className="text-white3">
            <WhatsAppIcon style={{ height: '30px', width: '30px', margin: '0 8px' }} />
          </a>
        </SocialIcons>
        <Typography variant="body2">
        </Typography>
      </Footer>
    </Root>
  );
}
