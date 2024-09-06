import { rm } from 'fs/promises';

import { distPath } from './paths';

export const delPath = async () => {
  try {
    await rm(distPath, { recursive: true, force: true });
  } catch (error) {
    console.error('Error cleaning', error);
    throw error;
  }
};
