import { writeFile, open } from 'node:fs';

const PATH = 'src/fs/files/fresh.txt'

export const create = async () => {
    await open(PATH, 'wx', (err) => {
        if (err?.code === 'EEXIST') throw 'FS operation failed'
    })

    writeFile(PATH, 'I am fresh and young', (err) => {
        if (err) throw err
    })
};

create()
