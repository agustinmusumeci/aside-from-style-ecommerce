import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useSingIn from "react-auth-kit/hooks/useSignIn";

function usePost(body, param) {
    
    const [ response, setResponse ] = useState();

    const navigate = useNavigate();

    // Función encargada de almacenar la cookie con el token y user
    const signIn = useSingIn();

    const postData = async (body, param, isLogin) => {
        try {

            const response = await fetch(`https://mongoecommerceapi.onrender.com/${param}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
                credentials: "omit"
            })

            // Guardamos la respuesta
            await setResponse(response)

            // Destructuramos la respuesta
            const { json } = response;

            // Guardamos la información enviada por el backend
            const data = await json.call(response)

            // Firmamos el token
            if (isLogin) {
                if(signIn({
                    auth: {
                        token: data.token,
                        type: 'Bearer'
                    },
                    userState: {
                        user: body.user
                    }
                })) {
                    // En caso de autenticarse, navegamos al panel de control
                    navigate("/aside-from-style-ecommerce/control-panel")
                } 
            }
            
            // Retornamos la información enviada por el backend
            return data
            
        } catch (error) {
            console.error("Posting error - ", error)
        }
    }

    return { response, postData }
}

export default usePost