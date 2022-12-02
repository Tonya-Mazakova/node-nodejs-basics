import { access, rm } from 'node:fs';

const PATH = 'src/fs/files/fileToRemove.txt'

export const remove = async () => {
    await access(PATH, (err) => {
        if (err?.code === "ENOENT") throw 'FS operation failed'
    })

    rm(PATH, (err) => {
        if (err) throw err
    })
};

remove()
