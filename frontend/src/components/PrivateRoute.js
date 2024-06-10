// frontend/src/components/PrivateRoute.js
import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated} = useSelector(state => state.auth)

  return isAuthenticated ? <Component {...rest} /> : <Navigate to='/signin' />
}

export default PrivateRoute
