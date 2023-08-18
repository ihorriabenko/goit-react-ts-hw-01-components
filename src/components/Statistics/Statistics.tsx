import { StatisticsList } from '../StatisticsList/StatisticsList';
import s from './statistics.module.scss';

export interface Stats {
  id: string;
  label: string;
  percentage: number;
}

interface StatisticsProps {
  title?: string;
  stats: Stats[];
}

const Statistics: React.FC<StatisticsProps> = ({
  title,
  stats,
}): JSX.Element => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.statistics__title}>{title}</h2>}
      <StatisticsList stats={stats} />
    </section>
  );
};

export { Statistics };
