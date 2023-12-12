import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'inherit'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [newpost, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState("");

    const { account } = useContext(DataContext);
    //post.picture ? post.picture: 
    const url = "https://st2.depositphotos.com/1006899/8495/i/600/depositphotos_84953610-stock-photo-chat-bubbles-with-blog-words.jpg";
    console.log("url",url);
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                if (response.isSuccess) {
                    newpost.picture = response.data;
                    setImageURL(response.data);    
                }
            }
        }
        getImage();
        newpost.categories = location.search?.split('=')[1] || 'All';
        newpost.username = account.username;
    }, [file])
    // useEffect(() => {
    //     const getImage = async () => { 
    //         if(file) {
    //             const data = new FormData();
    //             data.append("name", file.name);
    //             data.append("file", file);
                
    //             const response = await API.uploadFile(data);
    //             newpost.picture = response.data;
    //         }
    //     }
    //     getImage();
    //     console.log("location search", location.search)
    //     newpost.categories = location.search?.split('=')[1] || 'All';
    //     newpost.username = account.username;
    // }, [file])

    const savePost = async () => {
        console.log("post",newpost)
        await API.createPost(newpost);
        navigate('/');
    }

    const handleChange = (e) => {
        console.log("handle change called",newpost);
        setPost({ ...newpost, [e.target.name]: e.target.value });
        console.log("handle change after called",newpost);
    }

    return (
        <Container>
            <Image src={ imageURL ? imageURL : url} />

            <StyledFormControl>
                <label htmlFor="fileInput" textalign="center" style={{ display: "flex",border: "none",fontSize:"large"}}>Add Image
                    <Add fontSize="large" color="action"/>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0]) && handleChange(e)}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>
            {/* <Textarea
                placeholder="Category"
                name='categories'
                onChange={(e) => handleChange(e)} 
            /> */}
            <p></p>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name ="categories"
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Movies">Movies</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Tech">Tech</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                
            </Select>
            </FormControl>
            <Textarea
                rowsMin={5}
                placeholder="Blog Description ..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;