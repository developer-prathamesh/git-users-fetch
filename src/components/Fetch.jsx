import React, { useEffect, useState } from 'react'


function Fetch() {
    const [state, setState] = useState([])
    

    async function fetchData() {
        let response = await fetch('https://api.github.com/users')
        let data = await response.json();
        setState(data);
        console.log(data);
                   
    }
    useEffect(() => {
        fetchData()
    }, [])

    


    return (
        <>
            <h2 className='mt-6 text-2xl text-white'>List Of Github Users</h2>
            <div className="container h-full w-full mt-8">
                <div className='grid h-full grid-cols-2  gap-2 text-center'>
                    {
                        state.map(item => {
                            let fetchedUrl = item.avatar_url
                            return (
                                <div className="card h-56 max-w-full mt-8 rounded-lg flex items-center justify-around bg-[image:var(--image-url)] bg-center bg-contain  bg-no-repeat bg-slate-800 relative overflow-hidden" key={item.id} style={{'--image-url':`url(${fetchedUrl})`}} >
                                    
                                    <div className='bg-zinc-300 w-full z-10 absolute bottom-0 translate-y-1/2 hover:translate-y-0 transition-transform ease-in-out   origin-bottom overflow-hidden'>
                                        <h5 className='text-2xl mb-2'>{String(item.login).toUpperCase()}</h5>
                                        <a href="#">{item.url}</a>
                                        <div className='insider mt-4 flex gap-2 item-align-center justify-center bg-zinc-300'>
                                            <div className='flex flex-col'>
                                                <span>Articles</span><span>38</span>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span>Followers</span><span>980</span>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span>Rating</span><span>4.8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Fetch
