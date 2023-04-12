// expect = '12 Apr 2023'
export const getCustomDate = (): string => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return formattedDate;
};
