import s from './profile.module.scss';

interface Stats {
  followers: number;
  views: number;
  likes: number;
}

interface ProfileProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats;
}

const Profile: React.FC<ProfileProps> = ({
  username,
  tag,
  location,
  avatar,
  stats,
}): JSX.Element => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.description__avatar} src={avatar} alt='User avatar' />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export { Profile };
