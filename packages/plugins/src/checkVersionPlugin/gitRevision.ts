import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

import GitInfoService from './gitInfo';
import { GIT_VAR } from './gitInfo';

// 确保 GIT_VAR 的类型是一个包含具体字符串的类型
type GitVarKeys = keyof typeof GIT_VAR;

export async function gitRevisionInfoPlugin(): Promise<Plugin> {
  const gitInfoService = new GitInfoService();
  const gitInfo = await gitInfoService.generateGitInfo('all');
  const res = JSON.stringify(gitInfo);
  const config = {
    gitInfo: gitInfo,
    version: `${gitInfo[GIT_VAR.BRANCH_VAR as GitVarKeys]}_${gitInfo[GIT_VAR.VERSION_VAR as GitVarKeys]}_${gitInfo[GIT_VAR.COMMITHASH_VAR as GitVarKeys]}_${Date.now()}`
  };
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(
    path.resolve(publicDir, 'config.json'),
    JSON.stringify(config)
  );

  return {
    name: 'git-revision-info',
    // apply: 'build',
    config() {
      return {
        define: {
          __GIT_REVISION_INFO__: res //挂载到全局变量上
        }
      };
    }
  };
}
