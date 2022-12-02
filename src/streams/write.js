import { createWriteStream } from 'node:fs';

export const write = async () => {
    const writeStream =
        await createWriteStream("src/streams/files/fileToWrite.txt")

    process.stdin.on('data', data => {
        writeStream.write(data);
    })

};

write()
