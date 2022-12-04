import { fork } from 'node:child_process';

export const spawnChildProcess = async (args) => {
   const child = fork('src/cp/files/script.js', args);

    child.on('error', (error) => {
        console.error(`error: ${error.message}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

spawnChildProcess(process.argv)
