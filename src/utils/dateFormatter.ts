const dateFormatter = (date: string) => {
    const newDate = new Date(date);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

    return formattedDate;
};

export const dateFormatterV2 = (value: string) => {
    const date = new Date(value);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

export default dateFormatter;

