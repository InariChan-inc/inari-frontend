export const truncateByWords: (text: string, wordsLimit: number) => string = (text, wordsLimit) => text.split(' ').length <= wordsLimit ? text : text.split(' ').slice(0, wordsLimit).join(' ') + '...';
export const truncateBySymbols: (text: string, symbolsLimit: number) => string = (text, symbolsLimit) => text.slice(0, symbolsLimit) + '...';
export const sleep: (callback: () => any, timeout: number) => Promise<any> = (callback, timeout) => new Promise(res => setTimeout(res, timeout)).then(callback);
export const getFirstLetters: (str: string, amount: number) => string = (str, amount) => {
  const strArray = str.split(' ');

  if (strArray.length === 1) {
    return str.slice(0, amount);
  }

  return strArray.map(item => item[0]).join('').slice(0, amount);
}