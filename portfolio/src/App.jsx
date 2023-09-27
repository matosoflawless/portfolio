import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";



import "./App.scss"

function App() {


  return (
    <div className='main-div'>
<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="work" element={<Projects />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="*" element={<NotFound />} /> */}
				</Routes>
				{/* <Footer /> */}
		</BrowserRouter>

    </div>
  
  )
}

export default App
