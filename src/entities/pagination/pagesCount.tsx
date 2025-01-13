export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages: number) => {
  let sum = [];
  for (let i = 1; i <= totalPages; i++) {
    sum.push(i);
  }
  return sum;
}
