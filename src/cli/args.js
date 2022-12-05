export const parseArgs = () => {
    process.argv.forEach((propName, index, array) => {
        if (propName.startsWith('--')) {
            console.log(`${propName.substring(2)} is ${array[index + 1]}`);
        }
    });
};

parseArgs()
