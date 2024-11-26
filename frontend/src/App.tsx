import { RideContextProvider } from "./contexts/RideContext"
import { Router } from "./Router"
import { GlobalStyled } from "./styles/global"

function App() {

  return (
    <RideContextProvider>
      <Router />
      <GlobalStyled />
    </RideContextProvider>
  )
}

export default App
