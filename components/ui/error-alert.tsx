import classes from './error-alert.module.css';

interface IErrorAlertProps {
  children: React.ReactNode
}

const ErrorAlert: React.FC<IErrorAlertProps> = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
