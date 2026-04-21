import { Card, Button } from "antd";
import { useGoogleLogin } from '@react-oauth/google';
import { useLoginStyles } from "./index.styles";
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, selectUser } from '../../store/slices/authSlice';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../api";
import { useThemeColor } from "../../hook/useThemeColor";

const Login = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const styles = useLoginStyles();
    const { LOGIN_COLOR } = useThemeColor();

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
            <div style={styles.bgGrid} />
            <div style={styles.bgGlow} />

            <Card style={styles.card} bordered={false}>
                <div style={styles.logoRing}>
                    <img src="/logo.svg" alt="Logo" style={styles.logo} />
                </div>

                <h1 style={styles.title}>TRƯỜNG ĐẠI HỌC HÀNG HẢI VIỆT NAM</h1>
                <h3 style={styles.title2}>Hệ thống Chat Bot</h3>

                <div style={styles.divider} />

                <Button size="large" block style={styles.googleButton} onClick={() => login()}>
                    <img src="/google-icon.webp" alt="google" style={styles.googleIcon} />
                    Đăng nhập với Google
                </Button>

                <p style={styles.footerText}>
                    Chỉ dành cho tài khoản <strong style={{ color: LOGIN_COLOR.textMuted }}>@vimaru.edu.vn</strong>
                </p>
            </Card>
        </div>
    );
};

export default Login;