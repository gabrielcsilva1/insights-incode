import { ThemeProvider } from "styled-components"
import { theme } from "@/theme"
import { GlobalStyle } from "@/styles/global"
import LandingPage from "@/pages/LandingPage"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <LandingPage/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
