import React, { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'


/**
 * @function VisitorGuard
 * @description - constructs the applications authentication routes layout
 * @returns {ReactElement} - ReactElement
 */

const VisitorGuard: React.FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const token = localStorage.getItem('token')

  const location = useLocation()


  if (token) {
    return <Navigate to={'/Board'} state={{ from: location }} replace />
  }

  return children
}

export default VisitorGuard
