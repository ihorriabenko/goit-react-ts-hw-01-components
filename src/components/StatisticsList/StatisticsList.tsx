import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { Stats } from '../Statistics/Statistics';
import s from './statisticsList.module.scss';

interface StatisticsListProps {
  stats: Stats[];
}

const StatisticsList: React.FC<StatisticsListProps> = ({
  stats,
}): JSX.Element => {
  const elements = stats.map(({ id, label, percentage }) => (
    <StatisticsItem key={id} label={label} percentage={percentage} />
  ));

  return <ul className={s.list}>{elements}</ul>;
};

export { StatisticsList };
