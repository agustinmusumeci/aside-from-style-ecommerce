import LoginForm from "../components/Forms/LoginForm";
import usePost from "../hooks/usePost";

function Login() {

    const { response, postData } = usePost();

    const handleSumbit = (e, userRef, passwordRef) => {
        e.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        
        postData({user: user, password: password}, "login-api", true)
    }

    return (

    <main>
        <section className="fluid-container">
            <LoginForm handleSumbit={handleSumbit}/>

            {response?.status != undefined && 
            (
                response?.status == "200" ? <p className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-[6px] border-[1px] text-center rounded-md">Authorized!</p> : <p className="w-[65dvw] md:w-[17.5rem] m-auto mt-5 py-[6px] border-[1px] text-center rounded-md">User or password incorrect!</p>
            ) }
        </section>
    </main>
    );
}

export default Login;