import { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../helpers/api-utils';
import { IEvent } from '../../types/event-types';

interface IAllEventsPageProps {
  events: IEvent[]
}

const AllEventsPage: NextPage<IAllEventsPageProps> = ({ events }) => {
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of greate events that allow you to evolve..." />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  }
}

export default AllEventsPage