// let brand = process.argv[2];
// console.log('The brand is: ', brand);

// // const glob = require("glob");
// // const path = require("path");
// const replace = require('replace-in-file');
// const fs = require('fs-extra');

// const replaceDoctypeAnom = {
//   files: brand + '/dist/anom.html',
//   from: /<\s*!doctype[^>]*>/g,
//   to: '<messaging:emailTemplate subject="We need to check your {!relatedto.policy__r.insurance_configurator__r.Name} box" recipientType="Contact" relatedToType="Call__c">',
// };

// // Replace Multiple
// const replaceAllHtmlTags = {
//   files: brand + '/dist/*.html',
//   from: /<\s*html[^>]*>/g,
//   to: '<messaging:htmlEmailBody >',
//   // dry: true,
// };

// const replaceAllClosingHtmlTags = {
//   files: brand + '/dist/*.html',
//   from: /<\/html>/g,
//   to: '</messaging:htmlEmailBody> \
//     </messaging:emailTemplate>',
//   // dry: true,
// };

// async function replaceFn() {
//   try {
//     const resultsDoctypeAnom = await replace(replaceDoctypeAnom);
//     const resultsAllClosingHtmlTags = await replace(replaceAllClosingHtmlTags);
//     const resultsAllHtmlTags = await replace(replaceAllHtmlTags);

//     // logging out
//     console.log('>> Replace Doctype in /dist/anom.html:', resultsDoctypeAnom);
//     console.log('>> Replace html tag in all with SF tag:', resultsAllHtmlTags);
//     console.log('>> Replace closing html tag in all with SF tag:', resultsAllClosingHtmlTags);

//   }
//   catch (error) {
//     console.error('>> Error occurred:', error);
//   }
// }

// async function main() {
//   try {
//     await fs.copy(brand + '/html/', brand + '/dist/')
//     console.log('>> Duplicate to html 2 dist folder...');
//     replaceFn();
//   } catch (err) {
//     console.error(err)
//   }
// }

// main();