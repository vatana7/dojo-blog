import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);

    const [isPending, setisPending] = useState(true);

    const [isError, setisError] = useState(null)
    
    useEffect(() => {

        const AbortCont = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: AbortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Error 404 Message');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
                setisError(null)
            })
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log('Fetch Deleted')
                } else{
                    setisError(err.message);
                    setisPending(false);
                }
            })
        }, 1000);
        return () => AbortCont.abort();

    }, [url])

    return { data, isError, isPending };
}

export default useFetch;