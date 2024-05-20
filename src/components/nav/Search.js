import React, { Fragment } from 'react'

export default function Search({ getSearch }) {

  const handleChange = (eve) => {
    if(eve.target.value===""){
      getSearch("nature")
    }else{
    getSearch(eve.target.value)
    }
  }
  return (
    <form className="d-flex"  >
      <input className="form-control me-2" type="search" placeholder="Search" onChange={handleChange}/>
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
    </form>
  )
}
