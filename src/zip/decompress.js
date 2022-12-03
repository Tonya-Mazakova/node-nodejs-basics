import { createUnzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

export const decompress = async () => {
    const readStream = await createReadStream("src/zip/files/archive.gz")
    const writeStream = await createWriteStream("src/zip/files/fileToCompress.txt")

    readStream.pipe(createUnzip()).pipe(writeStream);
};

decompress()
