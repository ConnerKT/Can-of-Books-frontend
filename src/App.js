import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from './About';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {

        return (
            <>
                <Router>
                    <Header  style={{ boxShadow: '0 0 13px rgb(0, 0, 0)' }} />
                    <Routes>
                        <Route
                            exact path="/"
                            element={<BestBooks />}
                        >
                        </Route>
                        {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
                        <Route
                            exact path="/about"
                            element={<About />}
                        >
                        </Route>
                    </Routes>
                    <br></br>
                    <Footer/>
                </Router>
            </>
        )
    
}

export default App;
