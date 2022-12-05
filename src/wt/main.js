import os from 'node:os';
import { Worker } from 'node:worker_threads';

export const performCalculations = async () => {
    const numOfCpus = os.cpus().length
    const workers = {}
    const workerPromises = []

    for(let i = 0; i < numOfCpus; i++) {
        workerPromises.push(
            new Promise((resolve, reject) => {
                workers[`worker_${i}`] =
                    new Worker('./src/wt/worker.js', { workerData: 10 + i })

                workers[`worker_${i}`].on('message', (msg) => {
                    resolve({ status: 'resolved', data: msg })
                })

                workers[`worker_${i}`].on('error', (error) => {
                    reject({ status: 'error', data: null });
                })
            })
        )
    }

    const thread_results = await Promise.all(workerPromises)
    console.log(thread_results)
};

performCalculations()
