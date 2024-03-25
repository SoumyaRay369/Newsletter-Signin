
export const LeftSide = ({setPage}) => {
    
    return (
        <>
            <div className="flex flex-col mt-10 md:mt-28 ml-0 md:ml-28">
                <div className="text-lg">Welcome to</div>
                <div className="text-lg">Soumya's</div>
                <div className="text-lg">Newsletter</div>
                <div className="flex flex-row gap-8">
                    <button onClick = {() => setPage('login')} className="mt-6 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-xl text-white text-md px-3 py-2 -ml-4">Login</button>
                    <button onClick={() => setPage('signup')} className="mt-6 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-xl text-white text-md px-3 py-2 -ml-4">Signup</button>
                </div>
            </div>
            
        </>
    )
}

