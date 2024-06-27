import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/home')
    }
    return (
        <>
            <h1 className = 'align-item content-center'>Page Not Found</h1>
            <button onClick={handleNavigate}>Home</button>
        </>
    )
}

export default PageNotFound;