/* 
৩. words নামের একটা অ্যারে তৈরি কর এবং চেক কর, অন্তত একটা শব্দ "hello"-এর সমান কি না।
 */
const words = ['boss', 'hello', 'mango', 'cherry', 'humanity', 'neighbor']
const newWords = words.some(word => word === 'hello')
console.log(newWords);