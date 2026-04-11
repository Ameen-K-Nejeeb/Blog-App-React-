import React, { useState, createContext, useContext } from 'react'


const BlogContext = createContext()

const Context = ({children}) => {

  const [currentUser, setCurrentUser] = useState(false)

  return (
    <div>
      <h1><BlogContext.Provider value={{currentUser, setCurrentUser}}>{children}</BlogContext.Provider></h1>
    </div>
  )
}

export default Context

export const Blog = () => useContext(BlogContext)