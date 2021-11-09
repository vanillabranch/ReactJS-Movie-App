import {useEffect, useState} from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./routes/Detail";

/*
* React JS에서 중요한 요소들을 전부다 배웠음.
* useState, props, map, useEffect, Route, Link, propTypes, fetch, JSX, useParams
* */

function App() {
    return (
        <Router>
            <Routes>
                {/*이렇게 라우츠안에 라우트들을 만들어서 가능, 물론 html도..(jsx)*/}
                <Route path="/hello" element={
                    <h1>Hello</h1>
                }/>

                <Route path="/movie/:id" element={<Detail/>}/>

                <Route path="/" element={<Home/>}/>


            </Routes>
        </Router>
    )
}

export default App;
