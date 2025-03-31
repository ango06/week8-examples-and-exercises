import { useNavigate } from "react-router";

const Destinations = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
    };

    return (
        <>
            <h1>Destinations</h1>
            <ul>
                <ul>Vietnam</ul>
                <ul>Canada</ul>
            </ul>
            <button onClick={handleClick}>Home</button>
        </>
    );
};

export default Destinations;