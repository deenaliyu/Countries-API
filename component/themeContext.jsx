// export const ThemeContext = createContext()
import React, { useState, useEffect } from 'react'
export const ThemeProvider = ({ 
  initialTheme, 
  children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(
    _ => {
      rawSetTheme(theme)
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}