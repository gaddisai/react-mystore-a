import {useState} from 'react'
export{App2}

function App2() {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={Decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    )
}