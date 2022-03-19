export const truncateByWords: (text: string, wordsLimit: number) => string = (text, wordsLimit) => typeof text === 'string' ? text.split(' ').length <= wordsLimit ? text : text.split(' ').slice(0, wordsLimit).join(' ') + '...' : '';
export const truncateBySymbols: (text: string, symbolsLimit: number) => string = (text, symbolsLimit) => typeof text === 'string' ? text.length <= symbolsLimit ? text : text.slice(0, symbolsLimit) + '...' : '';
export const sleep: (callback: () => any, timeout: number) => Promise<any> = (callback, timeout) => new Promise(res => setTimeout(res, timeout)).then(callback);
export const getFirstLetters: (str: string, amount: number) => string = (str, amount) => {
  if (typeof str !== 'string')
    return '';

  const strArray = str.split(' ');

  if (strArray.length === 1) {
    return str.slice(0, amount);
  }

  return strArray.map(item => item[0]).join('').slice(0, amount);
}

type SearchQuery = {
  name?: string;
};

export const generateSearchPath = (queries: SearchQuery) => {
  if (!Object.values(queries).filter(value => !!value).length) return '/search';

  return `/search?${Object.entries(queries).map(([key, value]) => `${key}=${value}`).join('&')}`;
};