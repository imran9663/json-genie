'use client'
import React from 'react'

const PrimaryBtn = ({ children, className, ...rest }) => {
  return (
    <button
      className={`px-4 flex flex-row justify-center items-center gap-1.5 py-1
   text-orange-500 disabled:bg-white-200
    disabled:ring-slate-500 disabled:text-slate-500
     disabled:hover:bg-white dark:disabled:bg-slate-500
      dark:disabled:text-slate-800 disabled:cursor-not-allowed
       bg-white ring ring-orange-500  dark:text-slate-900
        dark:bg-orange-500 rounded-md dark:hover:bg-orange-600 cursor-pointer
         hover:bg-orange-50 pointer focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn