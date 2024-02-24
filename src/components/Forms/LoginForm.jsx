import { useRef } from "react";

function LoginForm({handleSumbit}) {

    const userRef = useRef("");
    const passwordRef = useRef("");

    return (
        <form action="" method="POST" className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-10 flex flex-col items-center gap-8 border-[1px] rounded-md" id="login-form" onSubmit={(e) => handleSumbit(e, userRef, passwordRef)}>
                <h2 className="text-xl font-medium">Welcome!</h2>
                <label htmlFor="user" className="">
                    <p>User</p>
                    <input type="text" className="px-2 py-[3px] border-[1px] rounded-md" id="user" ref={userRef} required={true}/>
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input type="password" className="px-2 py-[3px] border-[1px] rounded-md" id="password" ref={passwordRef} required={true}/>
                </label>
                <button type="submit" className="px-5 py-[6px] bg-black rounded-md hover:bg-black/80 text-white duration-300 ease-in-out">
                    Send
                </button>
            </form>
    );
}

export default LoginForm