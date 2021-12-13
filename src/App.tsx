import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import Loading from "./components/Loading"
import Router from "./Router/router"
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
