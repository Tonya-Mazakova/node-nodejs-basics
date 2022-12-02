import { Transform } from 'node:stream';

const reverseStream = () => {
    return new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
}

export const transform = async () => {
    await process.stdin
        .pipe(reverseStream())
        .on('error', e => console.error(e))
        .pipe(process.stdout);
};

transform()
