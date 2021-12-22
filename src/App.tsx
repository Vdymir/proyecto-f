import Loading from "./components/Loading"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./router/Router"
import './app.css'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>

  )
}

export default App
