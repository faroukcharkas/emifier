#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fs = require('fs');
const path = require('path');

const emToPx = (inputPx, basePx) => {
    return inputPx / basePx;
}

const replaceAllPxToEm = (cssContent, basePx) => {
    const regex = /font-size:\s*(\d+)px/g;

    return cssContent.replace(regex, (match, pxSize) => {
        const emSize = emToPx(parseFloat(pxSize), basePx);
        return `font-size: ${emSize}em`;
    });
}

const emifyFile = (fullPath) => {
    fs.readFile(fullPath, "utf-8", function(error, data) {
        if (error) throw error;
        fs.writeFile(fullPath, replaceAllPxToEm(data,16), (error) => {
            if (error) throw error;
        })
    });
}

const emifyPath = (inputPath) => {

    if (fs.statSync(inputPath).isDirectory()) {
        const files = fs.readdirSync(inputPath);
        files.forEach(file => {
            let fullPath = path.join(inputPath, file);
            if (fs.statSync(fullPath).isDirectory()) {
                emifyPath(fullPath);
            } else if (path.extname(file) == '.css') {
                emifyFile(fullPath);
            }
        })
    } else {
        if (path.extname(inputPath) === '.css') {
            emifyFile(inputPath);
        } else {
            console.error(`Provided path is not a CSS file, but instead a ${path.extname(inputPath)} file.`)
        }
    }
}

yargs(hideBin(process.argv)).command('emify [baseSize] [path]', 'Change all measurements to em', (yargs) => {
    return yargs.positional('baseSize', {
        describe: 'base px size',
        default: 16
    }).positional('path', {
        describe: 'the path of the folder or file to emify',
        default: process.cwd()
    });
}, (argv) => {
    emifyPath(argv.path);
}).parse();