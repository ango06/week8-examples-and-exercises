import { Link } from "react-router";

const Home = () => {

    return (
        <>
            <h1>Home</h1>
            <p>Blog description ssssssssssssssssssssssssssssssssssssssssss</p>
            <Link to="/about">About</Link>
            <Link to="/destinations">Destinations</Link>
        </>
    );
};

export default Home;