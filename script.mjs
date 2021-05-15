import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { $ } from "zx";

// commit the empty change dynamic times...
async function mockCommits(
  startDate,
  endDate,
  count = 1,
  useDynamic = false,
  workdayOnly = false
) {
  while (endDate - startDate > 0) {
    if (workdayOnly) {
      const day = startDate.getDay();
      if (day === 0 || day === 6) {
        startDate.setDate(startDate.getDate() + 1);
        continue;
      }
    }
    const getRandom = (count) => Math.ceil(Math.random() * count);
    const execCount = useDynamic ? getRandom(count) : count;
    for (let i = 0; i < execCount; i++) {
      await $`git commit --allow-empty -m "mock commit (time=${i})" --date=${startDate.toString()}`;
    }
    startDate.setDate(startDate.getDate() + 1);
  }
}

const argv = yargs(hideBin(process.argv))
  .option("startDate", {
    type: "string",
    description:
      "YYYY-MM-DD, commit start date, if you don't provide, will automatically grab the latest commit",
  })
  .option("count", {
    type: "number",
    description: "commit count per day, default is 1",
    default: 1,
  })
  .option("useDynamic", {
    type: "boolean",
    description:
      "enable than commit count per day will random between 1 ~ argv.count, default is false",
    default: false,
  })
  .option("workdayOnly", {
    type: "boolean",
    description: "only exec commit in MON~FRI, default is false",
    default: false,
  })
  .option("branch", {
    type: "string",
    description: "branch name",
    default: "dev",
  }).argv;
const { startDate, count, useDynamic, workdayOnly, branch } = argv;

try {
  await $`git branch autoCommits-${branch}`;
} catch (_) {}
await $`git checkout autoCommits-${branch}`;

if (startDate) {
  let _startDate = new Date(startDate);
  await mockCommits(_startDate, Date.now(), count, useDynamic, workdayOnly);
} else {
  // using the latest commit as start, and commit until touch now
  const lastCommitDate = await $`git log -1 --format=%cd `;
  await mockCommits(lastCommitDate, Date.now(), count, useDynamic, workdayOnly);
}

await $`git push origin autoCommits-${branch}`;