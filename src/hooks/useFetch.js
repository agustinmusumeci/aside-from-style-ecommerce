import { useEffect, useState } from "react";

function useFetch(param) {

        const [ data, setData ] = useState([]);

        const getData = async () => {
                try {
                        // For a localhost server
                        // const response = await fetch(`http://localhost:4000/${param}`);

                        // For an online API
                        const response = await fetch(`https://mongoecommerceapi.onrender.com/${param}`);

                        const json = await response.json();
                        await setData(json);
                } catch (error) {
                        console.log("Fetching data error - ", error)
                }
        }

        useEffect( () => {
                getData()
        }, [])

        return data;
}

export default useFetch;