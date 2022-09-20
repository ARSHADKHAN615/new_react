import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}>Home</Route>
                <Route path="/about" element={<About />}>About</Route>
                <Route path="/products" element={<Products />}>About</Route>
                <Route path="/cart" element={<Cart />}>About</Route>
            </Routes>
        </BrowserRouter>
    )
}



















// export function App2(){
//     return (
//         <h1>Hello 2</h1>
//     )
// }

// const App = ()=> {
//     return (
//         <h3>hello 3</h3>
//     )
// }

// export default App;