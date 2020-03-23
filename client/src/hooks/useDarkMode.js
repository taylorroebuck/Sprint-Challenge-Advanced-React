import { useLocalStorage } from './useLocalStorage';
import {  useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');
    useEffect(() => {
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            console.log('darkmode is on');
        } else {
            document.body.classList.remove('dark-mode');
            console.log('darkMode is off');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}