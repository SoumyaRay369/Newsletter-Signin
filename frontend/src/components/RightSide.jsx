import { useState } from "react";


export const RightSide = ({page}) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const response = await fetch('https://newsletter-signin.onrender.com//signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, password })
        });

        const data = await response.json();
        if(data.msg){
            alert(data.msg)
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('https://newsletter-signin.onrender.com//login', {
            method: 'POST', 
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({userId, password})
        });

        const data = await response.json();
        
        if(data.msg){
            alert(data.msg)
        }
    }

    return (
        <>
            <div className="flex flex-col md:ml-40 md:mt-28 mt-6 ">
                {page == 'login' ? (
                    <>
                        <form onSubmit={handleLogin} className="flex flex-col md:ml-28 md:mt-1 mt-6 ">
                            <input type="text" placeholder="User Id" value={userId} onChange={(e) => setUserId(e.target.value)} className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2" />

                            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2 mt-2" />

                            <button type="submit" className="mt-1 md:mt-6 bg-green-900 rounded-xl text-white text-md px-3 py-2 ">Login</button>
                        </form>

                        
                    </>
                    
                ) : (
                    <>
                            <form onSubmit={handleSignup} className="flex flex-col md:ml-28 md:mt-8 mt-1 ">
                            <input type="text" placeholder="User Id" value={userId} onChange={(e) => setUserId(e.target.value)}  className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2" />

                            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2 mt-2" />

                            <input type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="outline-none ring-2 ring-green-500 rounded-md py-2 pl-2 mt-2" />

                            <button type="submit" className="mt-1 md:mt-6 bg-green-900 rounded-xl text-white text-md px-3 py-2">Signup</button>
                        </form>
                            
                    </>
                )}
                
            </div>
        </>
    )
}