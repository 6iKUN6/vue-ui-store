import path from 'path';

export const projectRoot = path.resolve(__dirname, '../../');
export const distPath = path.join(projectRoot, 'dist');
export const outDir = path.join(__dirname, '../../dist');
export const componentsPath = path.join(projectRoot, 'packages/components');

// 获取项目根目录绝对路径
export const rootPath = path.resolve(__dirname, '../../');

// 标准化路径输出
export const resolveRoot = (...args: string[]) =>
  path.resolve(rootPath, ...args).replace(/\\/g, '/');
