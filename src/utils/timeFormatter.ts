const timeFormatter = (time: string) => {
    const newTime = new Date(time);

    const hours = newTime.getHours();
    const minutes = newTime.getMinutes();

    const formattedTime = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

    return formattedTime;
};

export default timeFormatter;
