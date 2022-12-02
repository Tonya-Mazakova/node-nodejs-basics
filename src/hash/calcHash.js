import { createHash } from 'node:crypto'
import { readFile } from 'node:fs';

export const calculateHash = async () => {
    readFile('src/hash/files/fileToCalculateHashFor.txt', { encoding: 'utf8' }, (err, content) => {
        if (err) throw err

        const hex = createHash('sha256').update(content).digest('hex')
        console.log(hex)
    })
};

calculateHash()
