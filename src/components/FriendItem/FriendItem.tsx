import { Friends } from '../FriendList/FriendList';
import s from './friendItem.module.scss';

interface FriendItemProps extends Omit<Friends, 'id'> {}

const FriendItem: React.FC<FriendItemProps> = ({
  avatar,
  isOnline,
  name,
}): JSX.Element => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className='avatar' src={avatar} alt='User avatar' width='48' />
      <p className='name'>{name}</p>
    </li>
  );
};

export { FriendItem };
