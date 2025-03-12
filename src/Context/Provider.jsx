import { createContext, useState } from "react";

export const UserContext = createContext(null)


const Provider = ({ children }) => {
    const [cartOper,setCartOper] = useState(false);
    function handelAddCart(){
        console.log("Handel cart")
        setCartOper(true)
    }
    function handelACrossCart(){
        console.log("Handel cart")
        setCartOper(false)
    }

    const authInfo = {
        handelAddCart,
        cartOper,
        handelACrossCart
    }
    return <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
}

export default Provider;