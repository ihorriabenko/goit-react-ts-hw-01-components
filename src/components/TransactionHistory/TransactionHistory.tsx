import { TransactionHistoryList } from '../TransactionHistoryList/TransactionHistoryList';
import s from './transactionHistory.module.scss';

export interface Items {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface TransactionHistoryProps {
  items: Items[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  items,
}): JSX.Element => {
  return (
    <table className={s.transaction}>
      <thead>
        <tr className={s.transaction__tr}>
          <th className={s.transaction__th}>Type</th>
          <th className={s.transaction__th}>Amount</th>
          <th className={s.transaction__th}>Currency</th>
        </tr>
      </thead>
      <TransactionHistoryList items={items} />
    </table>
  );
};

export { TransactionHistory };
