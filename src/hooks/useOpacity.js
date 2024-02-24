import { useState, useEffect } from "react";

function useOpacity() {

    const animation = "transition-all duration-200 ease-in-out"

    const [opacity, setOpacity] = useState(`opacity-0 ${animation}`);

    const handleOpacity = async() => {
        setTimeout(() => { setOpacity(`opacity-100 ${animation}`)}, "750")
    }

    useEffect(() => {
        handleOpacity()
    }, [])
    
    return opacity
}

export default useOpacity