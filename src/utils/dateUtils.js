import { format, parse } from 'date-fns';

export const formatDateToYYYYMMDD = (date) => {
    const parsedDate = typeof date === 'string' ? parse(date, 'yyyy-MM-dd', new Date()) : date;
    return format(parsedDate, 'yyyy-MM-dd');
};

export const formatDateToMMMDDYYYY = (date) => {
    const parsedDate = typeof date === 'string' ? parse(date, 'yyyy-MM-dd', new Date()) : date;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return format(parsedDate, 'MMM dd, yyyy', options);
};
