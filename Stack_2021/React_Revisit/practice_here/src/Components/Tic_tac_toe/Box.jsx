import './Ticktacktoe.css';

    
const Box = ({Value, chooseBox}) => {

    return (
        <div className='box' onClick={chooseBox}>
           {Value}
        </div>
    )
}

export default Box