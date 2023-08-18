import { Items } from '../TransactionHistory/TransactionHistory';
import s from './transactionHistoryItem.module.scss';

interface TransactionHistoryItemProps extends Omit<Items, 'id'> {}

const TransactionHistoryItem: React.FC<TransactionHistoryItemProps> = ({
  type,
  amount,
  currency,
}): JSX.Element => {
  return (
    <tr className={s.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export { TransactionHistoryItem };
