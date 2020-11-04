import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Planet from './Planet'

const fetchPlanets = async (key, greeting, page) => {
    console.log(greeting);
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    // First Item in useQuery array is the key, the subsequent items are parameters for the function
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['planets', 'Hello there!', page], fetchPlanets, {
        staleTime: 2000,
        // onSuccess: () => { console.log(`Data retrieved `) }
    });
    console.log(data)
    return (
        <div>
            <h2>Planets</h2>

            <button onClick={() => { (page >= 2) ? setPage(page - 1) : setPage(page) }}>Prev Page</button>
            <button disabled={true}>Page {page}</button>
            <button onClick={() => { (page < 6) ? setPage(page + 1) : setPage(page) }}>Next Page</button>

            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            {status === 'loading' && (
                <div>Loading data</div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map(planet => (<Planet key={planet.name} planet={planet} />))}
                </div>
            )}
        </div>
    )
}

export default Planets
