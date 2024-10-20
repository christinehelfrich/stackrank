export function formatDateToLongDateWithTime(datetime: Date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = days[datetime.getDay()];
    const month = months[datetime.getMonth()];
    const date = datetime.getDate();

    let hours = datetime.getHours();
    const isPM = hours >= 12;
    hours = hours % 12 || 12; // Convert 0 hour to 12 and 13+ to PM format

    const minutes = datetime.getMinutes() === 0 ? '' : `:${String(datetime.getMinutes()).padStart(2, '0')}`; 
    const period = isPM ? 'pm' : 'am';

    return `${dayOfWeek}, ${month} ${date} @ ${hours}${minutes}${period}`;
}