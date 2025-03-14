import { series } from 'gulp';

import createPkgJson from '../build/utils/createPkgJson';
import { withTaskName } from '../build/utils/withTaskName';

export const createPkg = withTaskName('createPkg', async () => {
  await createPkgJson();
});

export default series(createPkg);
