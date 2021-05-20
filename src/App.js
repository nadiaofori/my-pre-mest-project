

import { ChakraProvider } from "@chakra-ui/react"
import AppRoutes from "./pages/approutes"
function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <AppRoutes/>
      </ChakraProvider>
    </div>
  );
}

export default App;
