import { useEffect, useState } from "react"

function usePost(body, param) {
    
    const [ response, setResponse ] = useState();

    const postData = async (body, param) => {
        try {
            // For a localhost server
            // const response = await fetch(`http://localhost:4000/${param}`, {
            //     method: "POST",
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(body),
            //     credentials: "omit"
            // })

            const response = await fetch(`https://mongoecommerceapi.onrender.com/${param}`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
                credentials: "omit"
            })

            const data = await response.json()
            alert(data.message)
            setResponse(data.message)

            
        } catch (error) {
            console.log("Posting modified data error - ", error)
        }
    }

    useEffect(() => {postData(body, param)}, [])

    return response
}

export default usePost