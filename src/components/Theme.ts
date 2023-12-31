import { useState, useEffect } from "react";

const Theme = () => {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-slate-200','dark:bg-[#424549]');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  
  return {theme, handleThemeSwitch };
}

export default Theme;