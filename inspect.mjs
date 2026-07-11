import mammoth from 'mammoth';

const { value } = await mammoth.extractRawText({
  path: 'data/FrontlinesFaith-Complete-Apologetics-Reference-8b98f8.docx',
});

console.log('LENGTH:', value.length);
console.log('----- FULL TEXT -----');
console.log(value);
