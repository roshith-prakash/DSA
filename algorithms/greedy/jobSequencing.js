// Job Sequencing Problem
// The goal is to schedule jobs to maximize total profit given the constraints of deadlines and only one job can be scheduled at a time.

// Time Complexity : O(n log n)   , d << n
//                 : O(n^2)       , d=n

class Job {
  constructor(id, deadline, profit) {
    this.id = id;
    this.deadline = deadline;
    this.profit = profit;
  }
}

function jobSequencing(jobs) {
  // Step 1: Sort jobs in descending order of profit
  jobs.sort((a, b) => b.profit - a.profit);

  // Step 2: Find the maximum deadline
  let maxDeadline = Math.max(...jobs.map((job) => job.deadline));

  // Step 3: Initialize slots and result array
  const slots = new Array(maxDeadline).fill(false);
  const result = new Array(maxDeadline).fill(null);

  let totalProfit = 0;

  // Step 4: Try to schedule each job
  for (let job of jobs) {
    // Find a free slot before deadline (latest first)
    for (let i = Math.min(job.deadline, maxDeadline) - 1; i >= 0; i--) {
      if (!slots[i]) {
        slots[i] = true;
        result[i] = job.id;
        totalProfit += job.profit;
        break;
      }
    }
  }

  // Filter out empty slots
  const scheduledJobs = result.filter((id) => id !== null);

  return {
    sequence: scheduledJobs,
    totalProfit,
  };
}

// Test
const jobs = [
  // Job ID, Deadline, Profit
  new Job("Job A", 2, 100),
  new Job("Job B", 1, 19),
  new Job("Job C", 2, 27),
  new Job("Job D", 1, 25),
  new Job("Job E", 3, 15),
];

const { sequence, totalProfit } = jobSequencing(jobs);
console.log("Scheduled Jobs:", sequence);
console.log("Total Profit:", totalProfit);
