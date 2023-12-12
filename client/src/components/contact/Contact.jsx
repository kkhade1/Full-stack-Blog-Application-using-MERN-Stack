
import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';

// const Banner = styled(Box)`
//     background-image: url(https://previews.123rf.com/images/peshkov/peshkov1910/peshkov191000662/133391293-creative-blogging-sketch-on-white-brick-wall-background-blog-and-media-concept-3d-rendering.jpg);
//     width: 100%;
//     height: 80vh;
//     background-position: left 0px top -100px;
//     background-size: contain;
//     background-repeat: no-repeat;
// `;
const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'inherit'
    
});

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Image src='https://previews.123rf.com/images/peshkov/peshkov1910/peshkov191000662/133391293-creative-blogging-sketch-on-white-brick-wall-background-blog-and-media-concept-3d-rendering.jpg'/>
            <Wrapper>
            <Typography variant="h3">Connect with Us!</Typography>  
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    We did love to hear from you! Whether you have feedback, suggestions, or just want to say hello, feel free to reach out to us on</Text>
                    <Text variant='h6'>Instagram</Text>
                    <Link href="https://www.instagram.com/ketaki.m.khade/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    <Text variant='h6'>send me an Email</Text>
                    <Link href="mailto:kkhade1@binghamton.edu?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    <Text variant="h5">Thank you for being a part of the Blogword community. Together, let's embark on a journey of discovery, enlightenment, and inspiration!
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;