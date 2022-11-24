import { GetStaticPathsContext, GetStaticPropsContext, NextPage, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Fragment } from 'react';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById } from '../../dummy-data';
import { getFeaturedEvents } from '../../helpers/api-utils';
import { IEvent } from '../../types/event-types';

interface IEventDetailPageProps {
  selectedEvent: IEvent;
}

const EventDetailPage: NextPage<IEventDetailPageProps> = ({ selectedEvent }) => {
  const event = selectedEvent;

  if (!event) {
    return (
      <div className='center'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  console.log('getStaticPaths');
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  console.log('getStaticProps');
  const eventId = (context.params as ParsedUrlQuery).eventId;
  const event = await getEventById(eventId as string);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30
  }
}

export default EventDetailPage