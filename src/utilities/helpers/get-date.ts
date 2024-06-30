export function getDate(startDate: string, endDate: string) {
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);
  console.log(firstDate, secondDate)
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

  const startMonth = monthNames[firstDate.getUTCMonth()];
  const startDay = firstDate.getUTCDate();
  const startYear = firstDate.getUTCFullYear();

  const endMonth = monthNames[secondDate.getUTCMonth()];
  const endDay = secondDate.getUTCDate();
  const endYear = secondDate.getUTCFullYear();

  let startHours = firstDate.getUTCHours();
  const startMinutes = firstDate.getUTCMinutes();
  const startAmpm = startHours >= 12 ? 'PM' : 'AM';

  startHours = startHours % 12;
  startHours = startHours ? startHours : 12; // the hour '0' should be '12'
  const startMinutesStr = startMinutes < 10 ? '0' + startMinutes : startMinutes;

  let endHours = secondDate.getUTCHours();
  const endMinutes =secondDate.getUTCMinutes();
  endHours = endHours % 12;
  endHours = endHours ? endHours : 12; // the hour '0' should be '12'
  const endMinutesStr = endMinutes < 10 ? '0' + endMinutes : endMinutes;
  const endAmpm = startHours >= 12 ? 'PM' : 'AM';
  

  return `${startMonth}-${startDay}-${startYear}, ${startHours}:${startMinutesStr} ${startAmpm} - ${endMonth}-${endDay}-${endYear}, ${endHours}:${endMinutesStr} ${endAmpm}`

}
