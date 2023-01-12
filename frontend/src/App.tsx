import React, { useEffect, useState } from 'react';

function App() {
    const [hello, setHello] = useState()

    useEffect(() => {
        (async () => {
            const response = await fetch(`${process.env.REACT_APP_API_SERVER}/hello`, { mode: 'cors' })
            const text = (await response.json()).text
            setHello(text)
        })()
    }, [])

    return <div>
        {hello}
    </div>
}

export default App;
