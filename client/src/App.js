import {BrowserRouter} from "react-router-dom"
import AppRouter from "./links/AppRouter"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
