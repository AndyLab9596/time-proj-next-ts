import React, { SyntheticEvent, useRef } from 'react'
import Button from '../ui/button';
import classes from './events-search.module.css';

interface IEventSearchProps {
    onSearch: (selectedYear: string, selectedMonth: string) => void;
}

const EventSearch: React.FC<IEventSearchProps> = (props) => {
    const yearInputRef = useRef<HTMLSelectElement | null>(null);
    const monthInputRef = useRef<HTMLSelectElement | null>(null);

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        const selectedYear = (yearInputRef.current as HTMLSelectElement).value;
        const selectedMonth = (monthInputRef.current as HTMLSelectElement).value;
        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">Januar</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>
                Find Events
            </Button>
        </form>
    )
}

export default EventSearch