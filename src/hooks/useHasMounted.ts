import React from "react";
import { useEffect } from "react";

function useHasMounted() {
    const [hasMounted,setHasMounted] = React.useState(false);
    useEffect(() => {
        setHasMounted(true);
    },[]);
    return hasMounted;
}
export default useHasMounted;