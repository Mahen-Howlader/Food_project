import { createContext, useState } from "react";
export const UserContext = createContext(null)
const Provider = ({ children }) => {
    const [cartOper, setCartOper] = useState(false);
    const [filterProduct, setFilterProduct] = useState("All");
    function handelAddCart() {
        setCartOper(true)
    }
    function handelACrossCart() {
        setCartOper(false)
    }

    const authInfo = {
        handelAddCart,
        cartOper,
        handelACrossCart,
        setFilterProduct,
        filterProduct
    }
    return <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
}

export default Provider;