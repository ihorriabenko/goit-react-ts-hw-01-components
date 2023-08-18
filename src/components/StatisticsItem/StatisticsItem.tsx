import { Stats } from '../Statistics/Statistics';
import s from './statisticsItem.module.scss';

interface StatisticsItemProps extends Omit<Stats, 'id'> {}

const StatisticsItem: React.FC<StatisticsItemProps> = ({
  label,
  percentage,
}): JSX.Element => {
  return (
    <li className={s.item}>
      <span>{label}</span>
      <span>{percentage} %</span>
    </li>
  );
};

export { StatisticsItem };
