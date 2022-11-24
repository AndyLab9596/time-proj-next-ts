import React from 'react'
import { IEvent } from '../../types/event-types'
import EventItem from './event-item'
import classes from './event-list.module.css';

interface IEventListProps {
    items: IEvent[]
}

const EventList: React.FC<IEventListProps> = ({ items }) => {
    return (
        <ul className={classes.list}>
            {items.map(i => <EventItem item={i} key={i.id} />)}
        </ul>
    )
}

export default EventList