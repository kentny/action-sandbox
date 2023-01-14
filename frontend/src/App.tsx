import React, { useEffect, useState } from 'react';

function App() {
    const [hello, setHello] = useState()

    return <>
        <h1>
            Hello App
        </h1>
        <button onClick={async () => {
            const response = await fetch(`${process.env.REACT_APP_API_SERVER}/hello`, { mode: 'cors' })
            const text = (await response.json()).text
            setHello(text)
        }}>
            Call API
        </button>
        <div>
            {hello}
        </div>
    </>
}

export default App;
