import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    //기존에 .then을 쓰다가 아래와 같이 변경. 훨씬 간단 하고 깔끔.
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    }
    //한번만 실행되는 useEffect, 그리고 .then이 아닌, awaitSync를 사용.
    useEffect(() => {
        getMovies();
    }, []);
    {/*
    map이 잘 이해가 안된다면, 아래의 구문을 콘솔로그에 넣어서 호출해보자.
    [1,2,3,4,5,6].map(x => x**2)
    x는 array다. 각 각 돌면서 해당 item에 **2를 해주면서 표현된다.
    */
    }
    //state값을 보여주기만 했다는것을 잊지말자, API를 시점으로~
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>{movies.map(movie =>
                <div key={movie.id}>
                    <img src ={movie.medium_cover_image}/>
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul> {/*movies 안에 movie안에 genres가 있다, 오타 조심*/}
                        {/*그리고 별다른 key가 없기때문에 그냥 넣어줌, key는 반드시 넣어줘야한다.*/}
                        {movie.genres.map(g=>(
                            <li key={g}>{g}</li>)
                        )}
                    </ul>
                </div>

                )}</div>}
        </div>
    );
}

export default App;
