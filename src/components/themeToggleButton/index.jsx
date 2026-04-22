import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../../store/slices/themeSlice";

const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const MoonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const ThemeToggleButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    return (
        <>
            <style>{`
                @keyframes spin-in {
                    from { transform: rotate(-90deg) scale(0.5); opacity: 0; }
                    to   { transform: rotate(0deg)  scale(1);   opacity: 1; }
                }
                .theme-toggle-btn {
                    position: fixed;
                    top: 16px;
                    right: 16px;
                    z-index: 9999;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.25s, box-shadow 0.25s, transform 0.15s;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.25);
                }
                .theme-toggle-btn:hover {
                    transform: scale(1.1);
                }
                .theme-toggle-btn:active {
                    transform: scale(0.95);
                }
                .theme-toggle-btn .icon-wrap {
                    display: flex;
                    animation: spin-in 0.3s ease;
                }
                .theme-toggle-btn.dark-mode {
                    background: #21262d;
                    color: #e2b340;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.5), 0 0 0 1px #30363d;
                }
                .theme-toggle-btn.light-mode {
                    background: #ffffff;
                    color: #4f46e5;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.12), 0 0 0 1px #e5e7eb;
                }
            `}</style>
            <button
                className={`theme-toggle-btn ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle theme"
                onClick={() => dispatch(toggleTheme())}
            >
                <span className="icon-wrap" key={theme}>
                    {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                </span>
            </button>
        </>
    );
};

export default ThemeToggleButton;