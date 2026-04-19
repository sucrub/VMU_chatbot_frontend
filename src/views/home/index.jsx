import { useDispatch, useSelector } from 'react-redux';
import { clearAuth, selectUser } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(clearAuth());
        navigate('/login');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Example Protected Page</h1>
            <p>Welcome, {user?.name || user?.email || 'User'}!</p>
            <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px' }}>
                {JSON.stringify(user, null, 2)}
            </pre>
            <button onClick={handleLogout} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
                Logout
            </button>
        </div>
    );
};

export default Home;