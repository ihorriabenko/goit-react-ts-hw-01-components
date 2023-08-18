import { TransactionHistoryProps } from '../TransactionHistory/TransactionHistory';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistoryList: React.FC<TransactionHistoryProps> = ({
  items,
}): JSX.Element => {
  const elements = items.map((el) => (
    <TransactionHistoryItem
      key={el.id}
      type={el.type}
      amount={el.amount}
      currency={el.currency}
    />
  ));

  return <tbody>{elements}</tbody>;
};

export { TransactionHistoryList };
