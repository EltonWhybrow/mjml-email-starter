const path = require('path');
const fs = require('fs-extra');
const { dirname } = require('path');
const partnerName = process.argv[2];
const { resolve } = require('path'),
    { readdir } = require('fs').promises;


async function main() {
    try {
        await fs.copy('BRAND-NAME/html/', 'shared-emails-list/html/BRAND-NAME')
        // Example adding multiple partners to folder structure
        // await fs.copy('BRAND-NAME-2/html/', 'shared-emails-list/html/BRAND-NAME-2')
        //console.log('>>>PARTNER NAME>>>', partnerName);

    } catch (err) {
        console.error(err)
    }

    createIndex();
}

async function getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    //console.log('>>>LOG>>>', dirents);


    const files = await Promise.all(dirents.map((dirent) => {
        //console.log('getFiles', dirent);

        const res = resolve(dir, dirent.name);
        //console.log(res);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    // let brand;
    // if (dirent.isDirectory(folder)) {
    //     brand = folder
    // }
    // console.log('>>>BRAND>>>', brand);
    return Array.prototype.concat(...files);
}

function createIndex() {
    const directory = "shared-emails-list/html";
    getFiles(directory).then(results => {
        //console.log('RESULTS', results);

        var stripPath = results.map(function (result) {
            return result.replace('/Users/elton/My_Local_Repos/mjml-email-starter/shared-emails-list/html/', '').replace('.html', '');
        });

        // var stripFilename = results.map(function (result) {
        //     return result.replace(/^.*[\\\/]/, '');
        // });

        //console.log('STRIPPATH', stripPath);
        const html = `<h2>${partnerName} - Responsive emails</h2><ol>` +
            stripPath.map(fileOrDirectory => `<li><a class="button primary small" href="html/${fileOrDirectory}.html" target="_blank">${fileOrDirectory} <span class="icon-link inverse"></span></a></li>`).join('\n') +
            `</ol>`;


        process.stdout.write(html);
        // or you could use something like fs.writeFile to write the file directly
    });
}

main();


