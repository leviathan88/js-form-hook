import { Link } from 'react-router-dom'
import '../style/pages/found.css'

export const Found = () => {
    return (
        <section id="body">
            <h1> &lt; I think you have lost &gt; </h1>
            <hr />
            <button><Link to='/'> Go to Home </Link></button>
        </section>
    )
}