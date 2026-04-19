import { Card, Button } from "antd";
import { useGoogleLogin } from '@react-oauth/google';
import styles from "./index.styles";
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, selectUser } from '../../store/slices/authSlice';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../api";

const Login = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    })

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse);
            handleLogin(codeResponse?.code);
        },
        flow: 'auth-code',
    });

    const handleLogin = async (code) => {
        const res = await auth.login(code);
        dispatch(setAuth({
            token: res.data.accessToken,
            refreshToken: res.data.refreshToken,
            user: res.data.user,
        }));
    }

    return (
        <div style={styles.loginContainer}>
            <img
                src="/img.png"
                alt="background"
                style={styles.loginBackground}
            />

            <Card style={styles.card} bordered={false}>
                {/* HEADER */}
                <div style={styles.header}>
                    <img src="/logo.svg" alt="Logo" style={styles.logo} />

                    <h1 style={styles.title}>
                        TRƯỜNG ĐẠI HỌC HÀNG HẢI VIỆT NAM
                    </h1>

                    <h3 style={styles.title2}>
                        HỆ THỐNG CHAT BOT
                    </h3>
                </div>

                {/* FORM */}
                <div style={styles.form}>
                    <Button
                        size="large"
                        block
                        style={styles.googleButton}
                        onClick={() => login()}
                    >
                        <img
                            src="/google-icon.webp"
                            alt="google"
                            style={styles.googleIcon}
                        />
                        Đăng nhập với Google
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Login;