import {useEffect, useState} from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./routes/Detail";

//라우터를 이용하여, 사용자의 패스가 / 면 라우트한다, Home컴포넌트를.
//라우터-라우츠(들), 라우터 별로 패스에 따른 컴포넌트를 구현.
function App() {
    return (
        <Router>
            <Routes>
                {/*이렇게 라우츠안에 라우트들을 만들어서 가능, 물론 html도..(jsx)*/}
                <Route path="/hello" element={
                    <h1>Hello</h1>
                }/>

                <Route path="/movie" element={<Detail/>}/>

                <Route path="/" element={<Home/>}/>


            </Routes>
        </Router>
    )
}

export default App;
