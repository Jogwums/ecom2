import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './styles.css'


const Card = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('https://5fcf88c51f2374001663091f.mockapi.io/shop')
        .then(res => setUsers(res.data))
        .catch(error => console.log(error))
        setLoading(false)
        console.log(users)

    },[])
    return (
        <div className="card">
            <div className="card-wrapper">
            {loading ? <h2>Loading...</h2> : <> 
                {users.map(user => (
                    <> 
                    <div className="card-content">
                        <h2 className="card-title" key={user.id}>{user.name}</h2>
                        <p className="card-username"><a>{user.username}</a></p>
                        <span className="card-image-wrapper">
                            <img className="card-image" src={user.images} alt={user.id} />
                            <p className="card-desc">{user.description}</p>
                            <p className="card-price">{user.price}</p>
                        </span>
                        
                        <button className="btn btn-primary">Buy</button>
                    </div>
                    </>
                ))}
                </>}
            </div> 
        </div>
    )
}

export default Card
