import { series } from 'gulp';

import { distPath } from '../build/utils/paths';
import { run } from '../build/utils/run';

export const publish = async () => {
  run('release-it', distPath);
};

export default series(publish);
