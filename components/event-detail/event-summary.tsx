import classes from './event-summary.module.css';

interface IEventSummaryProps {
  title: string;
}

const EventSummary: React.FC<IEventSummaryProps> = ({ title }) => {

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;