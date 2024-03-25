
export const RightSide = ({page}) => {
    
    return (
        <>
            <div className="flex flex-col md:ml-40 md:mt-28 mt-6 ">
                {page == 'login' ? (
                    <>
                        <input type="text" placeholder="User Id" className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2" />
                        <input type="text" placeholder="Password" className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2 mt-2" />
                        <button className="mt-1 md:mt-6 bg-green-900 rounded-xl text-white text-md px-3 py-2 ">Login</button>
                    </>
                    
                ) : (
                    <>
                            <input type="text" placeholder="User Id" className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2" />
                            <input type="text" placeholder="Password" className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2 mt-2" />
                            <input type="text" placeholder="Confirm Password" className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2 mt-2" />
                            <button className="mt-1 md:mt-6 bg-green-900 rounded-xl text-white text-md px-3 py-2">Signup</button>
                    </>
                )}
                
            </div>
        </>
    )
}