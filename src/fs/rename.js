import { access, rename as renameFile } from 'node:fs';

const ERROR_MSG = 'FS operation failed'
const WRONG_FILE_PATH = 'src/fs/files/wrongFilename.txt'
const PROPER_FILE_PATH = 'src/fs/files/properFilename.md'

export const rename = async () => {
    await access(WRONG_FILE_PATH, (err) => {
        if (err?.code === "ENOENT") throw ERROR_MSG
    })

    await access(PROPER_FILE_PATH, (err) => {
       if (!err) throw ERROR_MSG
    })

    renameFile(WRONG_FILE_PATH, PROPER_FILE_PATH, (err) => {
        if (err) throw err
    })
};

rename()
