
import { Box, styled, Typography, Link } from '@mui/material';
//import { GitHub, Instagram, Email } from '@mui/icons-material';

// const Banner = styled(Box)`
//     background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
//     width: 100%;
//     height: 70vh;
//     background-position: left 0px bottom 0px;
//     background-size: cover;
// `;

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
            <Image src={"https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=826&t=st=1702267278~exp=1702267878~hmac=d9724a5c497e99226925a109b1004debc6f8c0caafa6fb09ac02d1698b039823"}/>
            <Wrapper>
                <Typography variant="h3">Welcome to Blogword!</Typography>
                <Typography variant="h4">Our Story</Typography> 
                <Text variant="h5">I am a Software Engineer.At Blogword, we believe in the power of words to inspire, inform, and connect people from all walks of life. Our blog is more than just a collection of articles; it's a platform where ideas come to life, and stories find their voice.
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                </Text>
                <p></p>
                <Typography variant="h4">Our Mission</Typography>
                <Text variant="h5">
                Our mission is simple: to create a space where diverse perspectives converge, fostering a community that celebrates knowledge, creativity, and collaboration. We aim to provide our readers with engaging, insightful, and thought-provoking content that sparks conversations and encourages personal and intellectual growth.
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>. */}
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;