import classes from './logistics-item.module.css';

interface ILogisticsItemProps {
  icon: React.FC;
  children: React.ReactNode
}

const LogisticsItem: React.FC<ILogisticsItemProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
