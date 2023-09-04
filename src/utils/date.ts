const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getFormattedDate(date: string | Date) {
  const parsedDate = new Date(date);

  const monthName = monthNames[parsedDate.getMonth()];
  return `${monthName} ${parsedDate.getFullYear()}`;
}

export function getDateRange(
  startDate: string | Date,
  endDate?: string | Date,
) {
  return `${getFormattedDate(startDate)} - ${
    endDate ? getFormattedDate(endDate) : 'Present'
  }`;
}
