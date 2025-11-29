import { Route, Routes } from "react-router-dom";
import AppBar from "./components/appBar";
import "./App.scss"
import Home from "./pages/index/home";
import Works from "./pages/index/works";
import About from "./pages/index/about";
import Footer from "./components/footer";
import Detail from "./pages/index/detail";
import Contact from "./pages/index/contact";
import Page404 from "./pages/index/page404"


function App() {

  
  return (
    <html lang="fr" translate="no">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>

        <div id="app">
          <AppBar />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/work' element={<Works />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/work/:id' element={<Detail />} />
            <Route path='/*' element={<Page404 />}></Route>
          </Routes>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App