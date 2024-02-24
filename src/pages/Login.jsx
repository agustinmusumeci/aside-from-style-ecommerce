import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSingIn from "react-auth-kit/hooks/useSignIn";
import LoginForm from "../components/Forms/LoginForm";

function Login() {

    const [response, setResponse] = useState({})

    const navigate = useNavigate();

    // funcion encargada de almacenar la cookie con el token y user
    const signIn = useSingIn();

    const handleSumbit = (e, userRef, passwordRef) => {
        e.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        
        postData({user: user, password: password}, "login-api")
    }

    const postData = async(body, param) => {
        try {
            
            // envio user y password al back para verificar sesion
            const response = await fetch(`http://localhost:4000/${param}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
                credentials: "omit"
            })

            
            
            // guardamos la respuesta
            await setResponse(response)

            // des-estructuramos la respuesta
            const { json } = response;
            // guardamos la informacion enviada por el back
            const data = await json.call(response)

            if(signIn({
                auth: {
                    token: data.token,
                    type: 'Bearer'
                },
                userState: {
                    user: body.user
                }
            })) {
                // en caso de autenticarse, navegamos al panel de control
                navigate("/control-panel")
            } 
            
        } catch (error) {}
    }

    return (
    <main>
        <section className="fluid-container">
            <LoginForm handleSumbit={handleSumbit}/>
            {/* <form action="" method="POST" className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-10 flex flex-col items-center gap-8 border-[1px] rounded-md" onSubmit={(e) => handleSumbit(e)}>
                <h2 className="text-xl font-medium">Welcome!</h2>
                <label htmlFor="" className="">
                    <p>User</p>
                    <input type="text" className="px-2 py-[3px] border-[1px] rounded-md" id="user" ref={userRef} required={true}/>
                </label>
                <label htmlFor="">
                    <p>Password</p>
                    <input type="password" className="px-2 py-[3px] border-[1px] rounded-md" id="password" ref={passwordRef} required={true}/>
                </label>
                <button type="submit" className="px-5 py-[6px] bg-black rounded-md hover:bg-black/80 text-white duration-300 ease-in-out">
                    Send
                </button>
            </form> */}
            {response.status != undefined && 
            (
                response.status == "200" ? <p className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-[6px] border-[1px] text-center rounded-md">Authorized!</p> : <p className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-[6px] border-[1px] text-center rounded-md">User or password incorrect!</p>
            ) }
        </section>
    </main>
    );
}

export default Login;