import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Button } from 'antd';
import { store } from './store';
import { CLIENT_ID } from './configs';
import AppRoutes from './routes/AppRoutes';
import ThemeToggleButton from './components/themeToggleButton';

const App = () => {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <BrowserRouter>
                    {/* Global button */}
                    <ThemeToggleButton
                        type="default"
                        style={{
                            position: 'fixed',
                            top: 16,
                            right: 16,
                            zIndex: 1000,
                        }}
                    />

                    <AppRoutes />
                </BrowserRouter>
            </GoogleOAuthProvider>
        </Provider>
    );
};

export default App;