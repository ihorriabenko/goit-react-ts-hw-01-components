import { FriendItem } from '../FriendItem/FriendItem';
import s from './friendList.module.scss';

export interface Friends {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

interface FriendListProps {
  friends: Friends[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }): JSX.Element => {
  const elements = friends.map((el) => (
    <FriendItem
      key={el.id}
      avatar={el.avatar}
      name={el.name}
      isOnline={el.isOnline}
    />
  ));

  return <ul className={s.list}>{elements}</ul>;
};

export { FriendList };
