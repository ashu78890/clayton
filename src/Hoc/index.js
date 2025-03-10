
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthState } from "Store/selector";

const WithAuth = ({children}) => {
        const navigate= useNavigate();
        const { isAuthenticated } = useSelector(getAuthState);

        useEffect(() => {
            if(!isAuthenticated) {
                navigate("/auth/login")
            }
        }, [isAuthenticated])

        return (
        <div>
            {isAuthenticated && children}
        </div>
        )
}


export default WithAuth;