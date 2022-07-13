import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import "./Main.css"
import Tours from './Tours'


const url = "https://course-api.com/react-tours-project"
const Main = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])
    const removeTour = (id)=>{
      const newTours = tours.filter(tour => tour.id !==id);
      setTours(newTours)
    }

    const fetchTours = async() => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const tours = await response.json()
           setLoading(false)
            setTours(tours)
        }catch(error){
          setLoading(false)
          console.log(error)
        }

       
    }
    useEffect(()=>{
      fetchTours()
    }, [])
     if (loading) {
       return (
         <main>
           <Loading />
         </main>
       );
     }
     if(tours.length===0){
      return(
        <main>
          <div className='title'>
            <h4>no tours left</h4>
            <button className='btn' onClick={()=>fetchTours()}>refresh</button>
          </div>
        </main>
      )
     }
  return (
    <div>
      <Tours tours = {tours} removeTour={removeTour}/>
    </div>
  )
}

export default Main