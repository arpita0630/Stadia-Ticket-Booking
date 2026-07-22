import React, { useRef,useEffect, useState } from 'react'

const Ref = () => {
    const [text,setText] = useState("");
    const [timer,setTimer] = useState(5);

    const inputRef = useRef();
    const bgRef = useRef();
    const timerRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function changeBg(){
        bgRef.current.style.backgroundColor = "red"
    }
    function startTimer(){
        timerRef.current = setInterval(()=>{
            setTimer((prev)=>{
                if(prev > 0){
                    return prev-1
                }else{
                    clearInterval(timer.current)
                    return prev
                }
            })
        },1000)
    }
    function stopTimer(){
        clearInterval(timerRef.current)
    }
  return (
    <>
        {/* Focus on page load when component mounts them for the first time */}
        <div className='flex items-center justify-center'>
            <form action="">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='Enter your text here'
                    className='p-10 w-90 h-10 border-2 border-amber-500'
                    value={text}
                    onChange={(event)=>setText(event.target.value)}
                    />
            </form>
        </div>
        {/* Bg changer on click */}
        <div>
            <div
                ref={bgRef}
                className='w-40 h-40 bg-blue-600 rounded'
            />
            <button
                onClick={changeBg}
                className='mt-5 bg-black text-white px-4 py-2 rounded-xl cursor-pointer'
            >
                Change color
            </button>
        </div>
        {/* Counter */}
        <div>
            <h1
                className='mt-7 text-black font-extrabold'
                ref={timerRef}
            >
                {timer}
            </h1>
            <button
                className='mt-5 bg-black text-white px-4 py-2 rounded-xl cursor-pointer'
                onClick={startTimer}
            >
                Start the timer
            </button>
            <button
                className='mt-5 bg-black text-white px-4 py-2 rounded-xl cursor-pointer'
                onClick={stopTimer}
            >
                Stop the time
            </button>
        </div>
    </>
  )
}

export default Ref