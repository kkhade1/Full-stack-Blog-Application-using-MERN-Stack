
import { styled, Box} from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=826&t=st=1702267278~exp=1702267878~hmac=d9724a5c497e99226925a109b1004debc6f8c0caafa6fb09ac02d1698b039823);
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