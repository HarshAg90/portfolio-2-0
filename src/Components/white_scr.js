import React from 'react'

CSS = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'var(--primary-bg2)',
    borderRadius: 10,
    padding: 5,
} 
export default function White_scr({children}) {
  return (
    <div className='screen' style={CSS}>
        {children}
    </div>
  )
}
