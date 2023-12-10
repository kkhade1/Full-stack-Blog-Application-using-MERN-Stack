
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://st2.depositphotos.com/1006899/8495/i/600/depositphotos_84953610-stock-photo-chat-bubbles-with-blog-words.jpg);
        display: flex;
`;

// const Heading = styled(Typography)`
//     font-size: 70px;
//     color: #FFFFFF;
//     line-height: 1
// `;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>BLOG</Heading> */}
           {/* // <SubHeading>Code for Interview</SubHeading> */}
        </Image>
    )
}

export default Banner;