import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cakeAction';
    
const CakeContainer = () => {

    const {number_of_cake} = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Cakes :{number_of_cake }</h1>
            <button onClick={()=>{ dispatch( buyCake() ) }}>Buy Cake</button>
        </div>
    )
}

export default CakeContainer
