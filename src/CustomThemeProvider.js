'use client';
// import ThemeProvider from next-themes/theme-provider
import { ThemeProvider } from 'next-themes';
//create a ThemeProvider component that wraps the children with the ThemeProvider from next-themes  
export const CustomThemeProvider = ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
        >
            {children}
        </ThemeProvider>
    );
};