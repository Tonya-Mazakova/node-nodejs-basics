import { open, readFile } from 'node:fs';

const PATH = 'src/fs/files/fileToRead.txt'

export const read = async () => {
    await open(PATH, 'r', (err) => {
        if (err?.code === 'ENOENT') throw 'FS operation failed'
    })

    readFile(PATH, { encoding: 'utf8' }, (err, content) => {
        if (err) throw err

        console.log(content)
    })
};

read()
