// create a ThemeSwitch client component that toggles the theme between light and dark modes
"use client";
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from 'react';
// import { useMounted } from "@/hooks/use-mounted";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Button
            variant="outline"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <Sun className="h-4 w-4 stroke-orange-500 dark:stroke-orange-500" /> : <Moon className="h-4 w-4 stroke-orange-500 dark:stroke-orange-500" />}
        </Button>
    );
};

export default ThemeSwitch;
// This component uses the next-themes package to toggle between light and dark themes.
// It uses the useTheme hook to access the current theme and the setTheme function to change it.