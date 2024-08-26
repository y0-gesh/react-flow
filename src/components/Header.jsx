import React from 'react';

const Header = (props) => {
  return (
    <div className='font-semibold absolute z-50 '>
      {props.title} 
    </div>
  )
}

export default Header
