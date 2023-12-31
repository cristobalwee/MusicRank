import Link from 'next/link';
import Button from './button';
import classnames from 'classnames';
import { PLUS } from '../constants/icons';

import '../styles/fab.scss';

export default function Fab({ hide }) {
  return (
    <div className={ classnames('fab', { 'hidden': hide }) }>
      <Link href='/ranking'>
        <Button as='primary' icon={ PLUS } text='Start a ranking' />
      </Link>
    </div>
  )
}