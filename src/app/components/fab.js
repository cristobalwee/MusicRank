import Button from './button';
import { PLUS } from '../constants/icons';

import '../styles/fab.scss';

export default function Fab() {
  return (
    <div className='fab'>
      <Button as='primary' icon={ PLUS } text='Start a ranking' />
    </div>
  )
}