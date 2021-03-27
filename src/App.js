import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(true)
  const [tour, setTour] = useState([])

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTour(tours)
            console.log(tours)
        }
        catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchTours()
    },[])

  if(loading) {
    return (
        <main>
          <Loading />
        </main>
    )
  }

  return (
    <main>
        <Tours />
    </main>
  )
}

export default App
