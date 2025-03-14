import { series, TaskFunction } from 'gulp';
import minimist from 'minimist';
import fs from 'fs';

import { run } from '../build/utils/run';
import { projectRoot, distPath } from '../build/utils/paths';

const rawCmd = minimist(process.argv.slice(2)).raw as string;
console.log('rawCmd', rawCmd);

export const buildChecker: TaskFunction = async () => {
  if (!fs.existsSync(distPath)) {
    await run('pnpm build', projectRoot);
  }

  // await run(rawCmd, projectRoot);
};

export default series(buildChecker);
