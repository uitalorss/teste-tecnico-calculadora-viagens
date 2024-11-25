import { RideContextProvider } from "./contexts/RideContext"
import { Main } from "./pages/main/main"
import { GlobalStyled } from "./styles/global"

function App() {

  return (
    <RideContextProvider>
      <Main />
      <GlobalStyled />
    </RideContextProvider>
  )
}

export default App
