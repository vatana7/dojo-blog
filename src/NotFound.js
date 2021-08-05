import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry Page doesn't exist</h2>
            <br/>
            <Link to='/'>Bcak to Homepage</Link>
        </div>
    );
}
 
export default NotFound;