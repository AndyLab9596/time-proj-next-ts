import { GetStaticPropsContext, NextPage } from 'next';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';
import { IEvent } from '../types/event-types';
import Head from 'next/head';

interface IHomeProps {
  featuredEvents: IEvent[];
}

const Home: NextPage<IHomeProps> = ({ featuredEvents }) => {

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of greate events that allow you to evolve..." />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents
    },
    revalidate: 1800,
  }
}

export default Home