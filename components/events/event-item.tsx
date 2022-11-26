import React from 'react';
import { IEvent } from '../../types/event-types';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Button from '../ui/button';
import classes from './event-item.module.css';
import Image from 'next/image';

interface IEventItemProps {
    item: IEvent;
}

const EventItem: React.FC<IEventItemProps> = ({ item }) => {
    const { id, image, title, date, location } = item;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedAdress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            {/* <img src={'/' + image} alt={title} /> */}
            <Image src={'/' + image} alt={title} width={250} height={160} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAdress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>
                            Explore Event
                        </span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem