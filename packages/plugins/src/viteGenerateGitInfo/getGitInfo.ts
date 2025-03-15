//只能在node环境下运行，因为用到了child_process，promisify
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface GitInfoOptions {
  commitHash?: boolean;
  version?: boolean;
  branch?: boolean;
  lastCommitTime?: boolean;
  lastCommitMsg?: boolean;
}

export const GIT_KEYS = {
  COMMITHASH_COMMAND: 'rev-parse HEAD',
  VERSION_COMMAND: 'describe --always',
  BRANCH_COMMAND: 'rev-parse --abbrev-ref HEAD',
  LASTCOMMITTIME_COMMAND: 'log -1 --format=%cI',
  LASTCOMMITMSG_COMMAND: 'log -1 --format=%s'
};

export const GIT_VAR = {
  COMMITHASH_VAR: 'GIT_COMMITHASH',
  VERSION_VAR: 'GIT_VERSION',
  BRANCH_VAR: 'GIT_BRANCH',
  LASTCOMMITTIME_VAR: 'GIT_LASTCOMMITTIME',
  LASTCOMMITMSG_VAR: 'GIT_LASTCOMMITMSG'
};

/**
 * 移除空行
 * @param string
 * @returns
 */

function removeEmptyLines(string: string): string {
  return string.replace(/[\s\r\n]+$/, '');
}

export default class GitInfoService {
  private gitWorkTree?: string;

  constructor(gitWorkTree?: string) {
    this.gitWorkTree = gitWorkTree;
  }

  /**
   * 执行git命令
   * @param command
   * @returns
   */
  async runGitCommand(command: string): Promise<string> {
    try {
      const gitBaseCommand = this.gitWorkTree
        ? `git --git-dir=${path.join(this.gitWorkTree, '.git')}`
        : 'git';
      const { stdout } = await execAsync(`${gitBaseCommand} ${command}`);
      return removeEmptyLines(stdout);
    } catch (err) {
      console.error('Error executing git command:', err);
      return `Error executing git command: ${err}`;
    }
  }

  /**
   * 获取最后一次提交的时间
   * @param options
   * @returns
   */
  async getLastCommitDateTime(): Promise<string> {
    return this.runGitCommand(GIT_KEYS.LASTCOMMITMSG_COMMAND);
  }

  /**
   * 获取提交hash
   * @param options
   * @returns
   */
  async getCommitHash(
    options: { commitHash?: string; commitHashVar?: string } = {}
  ): Promise<string> {
    if (options.commitHash) {
      return options.commitHash;
    }

    return await this.runGitCommand(GIT_KEYS.COMMITHASH_COMMAND);
  }

  /**
   * 获取版本
   * @param options
   * @returns
   */
  async getVersion(
    options: { version?: string; versionVar?: string } = {}
  ): Promise<string> {
    if (options.version) {
      return options.version;
    }

    return await this.runGitCommand(GIT_KEYS.VERSION_COMMAND);
  }

  /**
   * 获取分支
   * @param options
   * @returns
   */
  async getBranch(
    options: { branch?: string; branchVar?: string } = {}
  ): Promise<string> {
    if (options.branch) {
      return options.branch;
    }

    return await this.runGitCommand(GIT_KEYS.BRANCH_COMMAND);
  }

  /**
   * 获取最后一次提交的时间
   * @param options
   * @returns
   */
  async getLastCommitTime(
    options: { lastCommitTime?: string; lastCommitTimeVar?: string } = {}
  ): Promise<string> {
    if (options.lastCommitTime) {
      return options.lastCommitTime;
    }

    return await this.runGitCommand(GIT_KEYS.LASTCOMMITTIME_COMMAND);
  }

  /**
   * 获取最后一次提交的消息
   * @param options
   * @returns
   */
  async getLastCommitMsg(
    options: { lastCommitMsg?: string; lastCommitMsgVar?: string } = {}
  ): Promise<string> {
    if (options.lastCommitMsg) {
      return options.lastCommitMsg;
    }

    return await this.runGitCommand(GIT_KEYS.LASTCOMMITMSG_COMMAND);
  }

  /**
   * 生成git信息
   * @param options
   * @returns
   */
  async generateGitInfo(
    options: 'all' | GitInfoOptions
  ): Promise<Record<keyof typeof GIT_VAR, string>> {
    const info: Record<string, string> = {};
    if (options === 'all') {
      options = {
        commitHash: true,
        version: true,
        branch: true,
        lastCommitTime: true,
        lastCommitMsg: true
      };
    }

    if (options.commitHash) {
      info[GIT_VAR.COMMITHASH_VAR] = await this.getCommitHash();
    }

    if (options.version) {
      info[GIT_VAR.VERSION_VAR] = await this.getVersion();
    }

    if (options.branch) {
      info[GIT_VAR.BRANCH_VAR] = await this.getBranch();
    }

    if (options.lastCommitTime) {
      info[GIT_VAR.LASTCOMMITTIME_VAR] = await this.getLastCommitTime();
    }

    if (options.lastCommitMsg) {
      info[GIT_VAR.LASTCOMMITMSG_VAR] = await this.getLastCommitMsg();
    }

    return info;
  }
}
