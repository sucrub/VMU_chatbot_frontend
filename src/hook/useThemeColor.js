// hooks/useThemeColor.js
import { useSelector } from 'react-redux';
import { selectTheme } from '../store/slices/themeSlice';
import {
    COLOR_LIGHT,
    COLOR_DARK,
    LOGIN_COLOR_LIGHT,
    LOGIN_COLOR_DARK
} from '../configs/color';

export const useThemeColor = () => {
    const theme = useSelector(selectTheme);
    const isDark = theme === 'dark';

    return {
        COLOR: theme === 'dark' ? COLOR_DARK : COLOR_LIGHT,
        LOGIN_COLOR: theme === 'dark' ? LOGIN_COLOR_DARK : LOGIN_COLOR_LIGHT,
        theme,
        GRID_LINE: isDark
            ? 'rgba(31,111,235,0.05)'
            : 'rgba(31,111,235,0.12)',

        GRID_GLOW: isDark
            ? 'rgba(31,111,235,0.12)'
            : 'rgba(31,111,235,0.18)',

        GRID_FADE: isDark
            ? 'rgba(31,111,235,0.05)'
            : 'rgba(31,111,235,0.08)',
    };
};