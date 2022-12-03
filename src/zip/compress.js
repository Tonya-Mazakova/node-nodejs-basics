import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

export const compress = async () => {
    const readStream = await createReadStream("src/zip/files/fileToCompress.txt")
    const writeStream = await createWriteStream("src/zip/files/archive.gz")

    readStream.pipe(createGzip()).pipe(writeStream);
};

compress()
