import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 200,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 15px;
    color: #ff6161;
    line-height: 2;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [loginError, setLoginError] = useState('');
    const [signupError, setSignupError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://www.365technoblog.com/wp-content/uploads/2022/01/blog-blogging.jpeg';

    useEffect(() => {
        //showError(false);
        setLoginError(false);
        setSignupError(false)
    }, [login,signup])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setLoginError("");
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            setLoginError(`${response.msg} please try again later`);
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setSignupError("");
            setSignup(signupInitialValues);
            toggleAccount('login');
            alert("User registration successful, proceed to login");
        } else {
            if (response.msg === "Error while signing up user"){
                setSignupError(`Username already exist, please create different username`);
            }
            else{
                setSignupError(`${response.msg}`);
            }
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <>
        <Typography variant="h2" style={{ textAlign: 'center',fontWeight: 'bold',marginTop:'20px'}} color="#0000FF">Welcome to Blogword</Typography>
        {
            account === 'login' ? <Typography variant="h6" style={{ textAlign: 'center' }} color="#FF7F50">
         Already Have an account then Login or Create an account </Typography>  : <Typography variant="h6" style={{ textAlign: 'center' }} color="#FF7F50">Create an account</Typography>
        }
        
        <Component>
            <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' type="password" label='Enter Password' />
                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            {loginError && <Error>{loginError}</Error>}
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" value={signup.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextField variant="standard" value={signup.username} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={signup.password} onChange={(e) => onInputChange(e)} type="password" name='password' label='Enter Password' />
                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            {signupError && <Error>{signupError}</Error>}
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
        </>
    )
}

export default Login;