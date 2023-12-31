import Image from 'next/image';
import Link from 'next/link';
import ArrowExternal from '../../../public/icon/Arrow-external.svg';
import ArrowRight from '../../../public/icon/Arrow-right.svg';
import Checkmark from '../../../public/icon/Checkmark.svg';
import ChevronDown from '../../../public/icon/Chevron-down.svg';
import Close from '../../../public/icon/Close.svg';
import Dots from '../../../public/icon/Dots.svg';
import Draggable from '../../../public/icon/Draggable.svg';
import Edit from '../../../public/icon/Edit.svg';
import Hamburger from '../../../public/icon/Hamburger.svg';
import Plus from '../../../public/icon/Plus.svg';
import Search from '../../../public/icon/Search.svg';
import Share from '../../../public/icon/Share.svg';

import '../styles/button.scss';

import {
  ARROW_EXTERNAL,
  ARROW_RIGHT,
  CHECKMARK,
  CHEVRON_DOWN,
  CLOSE,
  DOTS,
  DRAGGABLE,
  EDIT,
  HAMBURGER,
  PLUS,
  SEARCH,
  SHARE
} from '../constants/icons';

const icons = {
  [ARROW_EXTERNAL]: ArrowExternal,
  [ARROW_RIGHT]: ArrowRight,
  [CHECKMARK]: Checkmark,
  [CHEVRON_DOWN]: ChevronDown,
  [CLOSE]: Close,
  [DOTS]: Dots,
  [DRAGGABLE]: Draggable,
  [EDIT]: Edit,
  [HAMBURGER]: Hamburger,
  [PLUS]: Plus,
  [SEARCH]: Search,
  [SHARE]: Share
};

export default function Button({ as, text, icon, onClick, href = null, active, small }) {
  const btnIcon = icons[icon];

  const btn = (
    <button 
      className={ `button button-${as}`} 
      onClick={ onClick }
    >
      { text && as !== 'icon' && <span className='headline size-6'>{ text }</span> }
      { icon && (
        <div className='icon-wrapper'>
          <Image
            alt={ `${btnIcon} icon` }
            src={ btnIcon }
          />
        </div>
      )}
    </button>
  );

  return href ? (
    <Link href={ href }>
      { btn }
    </Link>
  ) : btn;
}