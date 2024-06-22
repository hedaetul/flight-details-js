import { format, parse, isValid } from 'date-fns';

export const formatDateToYYYYMMDD = (date) => {
    let parsedDate;
    if (typeof date === 'string') {
        parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    } else {
        parsedDate = date;
    }

    if (!isValid(parsedDate)) {
        throw new Error(`Invalid date: ${date}`);
    }

    return format(parsedDate, 'yyyy-MM-dd');
};

export const formatDateToMMMDDYYYY = (date) => {
    let parsedDate;
    if (typeof date === 'string') {
        parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    } else {
        parsedDate = date;
    }

    if (!isValid(parsedDate)) {
        throw new Error(`Invalid date: ${date}`);
    }

    return format(parsedDate, 'MMM dd, yyyy');
};
