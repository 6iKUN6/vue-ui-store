import { spawn } from 'child_process';

// import { projectRoot } from './paths';

//使用node的spawn子进程来运行脚本
export const run = async (command: string, path: string) => {
  return new Promise<string>((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');
    const app = spawn(cmd, args, {
      cwd: path,
      stdio: 'inherit', //将子进程的输出共享给父进程
      shell: true //默认情况下linux才支持 rm- rf
    });

    app.on('close', code => {
      if (code === 0) {
        resolve(code.toString());
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    app.on('error', err => {
      reject(err);
    });
  });
};
