import React, { useState } from 'react';
import classnames from 'classnames';
import Button from './button';

import '../styles/menu.scss';

export default function Menu({ items, text, icon, align = 'left', ...rest }) {
  const [menuIsOpen, toggleMenu] = useState(false);

  return (
    <div className='menu'>
      <Button 
        as='secondary' 
        icon={ icon } 
        onClick={ () => toggleMenu(!menuIsOpen) }
        text={ text }
        { ...rest }
      />
      <div className={ classnames(`menu-drawer align-${align}`, { 'is-open': menuIsOpen })} >
        { items }
      </div>
    </div>
  );
}