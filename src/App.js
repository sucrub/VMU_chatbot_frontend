import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from './store';
import { CLIENT_ID } from './configs';
import AppRoutes from './routes/AppRoutes';

const App = () => {
    return (
        <Provider store={store}>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </GoogleOAuthProvider>
        </Provider>
    );
};

export default App;