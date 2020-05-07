export default (str: string): string => {
  return str
  .toString()
  .toLowerCase()
  .normalize('NFD')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[^\w\-]+/g, '')
  .replace(/\-\-+/g, '-');
}
