import { ref, onMounted } from 'vue';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
    const theme = ref<Theme>((localStorage.getItem('theme') as Theme) || 'system');

    const getSystemTheme = (): 'light' | 'dark' => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (newTheme: Theme): void => {
        const effectiveTheme = newTheme === 'system' ? getSystemTheme() : newTheme;
        
        if (effectiveTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } 
        else document.documentElement.classList.remove('dark');
    };

    const setTheme = (newTheme: Theme): void => {
        theme.value = newTheme;
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const toggleTheme = (): void => {
        const currentEffective = theme.value === 'system' ? getSystemTheme() : theme.value;
        setTheme(currentEffective === 'dark' ? 'light' : 'dark');
    };

    onMounted(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme.value === 'system') {
                applyTheme('system');
            }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        applyTheme(theme.value);
    });

    return {
        theme,
        setTheme,
        toggleTheme,
    };
}