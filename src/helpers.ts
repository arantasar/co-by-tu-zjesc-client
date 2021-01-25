export function getDaysInService(dateCreated: string) {
  const day = dateCreated.slice(0, 2);
  const month = dateCreated.slice(3, 5);
  const year = dateCreated.slice(6, 10);
  const accountCreated = new Date(+year, +month - 1, +day);
  const today = new Date();

  const diffTime = Math.abs(+today - +accountCreated);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
