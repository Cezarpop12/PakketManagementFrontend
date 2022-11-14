import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="section">
            <h2>404</h2>
            <p>
                Pagina bestaat niet
            </p>
            <Link to='/'>Terug naar home</Link>
        </section>
    );
};

export default Error;