import { createReadStream } from 'node:fs';

export const read = async () => {
    await createReadStream("src/streams/files/fileToRead.txt")
        .pipe(process.stdout);
};

read()
