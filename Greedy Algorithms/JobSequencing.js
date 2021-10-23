class Job {
    constructor(profit, deadline){
        this.profit = profit;
        this.deadline = deadline;
    }
}

class JobQueue {
    execute(jobs){
        jobs.sort((a, b) =>  a.profit - b.profit)
        let maxDeadline = Math.max(...jobs.map((job) => job.deadline))
        let queue = new Array(maxDeadline);
        let size = 0;
        while(size < maxDeadline){
            let job = jobs.pop();
            this.addToQueue(job, queue);
            size += 1;
        }
        return queue;
    }

    addToQueue(job, queue){
        let deadline = job.deadline;
        while(queue[deadline]){
            deadline -= 1;
        }
        queue[deadline] = job;
    }
}

let job1 = new Job(35, 3)
let job2 = new Job(30, 4)
let job3 = new Job(25, 4)
let job4 = new Job(20, 2)
let job5 = new Job(15, 3)
let job6 = new Job(12, 1)
let job7 = new Job(5, 2)

let job_queue = new JobQueue();
console.log(job_queue.execute([job1, job2, job3, job4, job5, job6, job7]));