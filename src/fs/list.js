import { access, readdir } from 'node:fs';

const PATH = 'src/fs/files'

export const list = async () => {
    await access(PATH, (err) => {
        if (err?.code === "ENOENT") throw 'FS operation failed'
    })

    readdir(PATH, (err, files) => {
        if (err) throw 'FS operation failed'

        console.log(files)
    })
};

list()
