
import { Box, styled, Typography } from '@mui/material';

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const Image = styled('img')({
    marginTop: '10px',
    marginLeft: '20px',
    marginRight: '20px',
    width: '100%',
    height: '60vh',
    objectFit: 'inherit'
});

const About = () => {

    return (
        <Box>
            <Image src={"https://www.farmgirlmarketingsolutions.com/wp-content/uploads/2015/12/blog-pic-b2c.jpg"}/>
            <Wrapper>
                <Typography variant="h3">Welcome to Blogword!</Typography>
                <Typography variant="h4">Our Story</Typography> 
                <Text variant="h5">I am a Software Engineer.At Blogword, we believe in the power of words to inspire, inform, and connect people from all walks of life. Our blog is more than just a collection of articles; it's a platform where ideas come to life, and stories find their voice.
                   
                </Text>
                <p></p>
                <Typography variant="h4">Our Mission</Typography>
                <Text variant="h5">
                Our mission is simple: to create a space where diverse perspectives converge, fostering a community that celebrates knowledge, creativity, and collaboration. We aim to provide our readers with engaging, insightful, and thought-provoking content that sparks conversations and encourages personal and intellectual growth.
                    
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;