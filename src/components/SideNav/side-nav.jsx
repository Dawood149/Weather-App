import React from "react"
import { NavLink } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella, faCloud, faBars, faMap, faSliders } from '@fortawesome/free-solid-svg-icons'


const SideNav = () => {
  return (
    <div className="text-center	py-3 ml-5 my-6 w-20 h-screen bg-slate-800 rounded-xl">
      <div>
        <FontAwesomeIcon icon={faUmbrella} size="2xl" className="text-blue-500" />
      </div>

      <ul className="py-12">
      <NavLink to='/'>
        <li className="text-white py-3" ><FontAwesomeIcon icon={faCloud} /> Weather
        </li>
        </NavLink>

        <NavLink to="/cities" className="nav-link" aria-current="page">
        <li className="text-white py-3"><FontAwesomeIcon icon={faBars} size="lg" /><br />
          Cities
        </li></NavLink>

        <li className="text-white py-3"><FontAwesomeIcon icon={faMap} size="lg" /><br />Map</li>
        <li className="text-white py-3"><FontAwesomeIcon icon={faSliders} size="lg" /><br />Settings</li>
      </ul>
    </div>

  )
}

export default SideNav;

