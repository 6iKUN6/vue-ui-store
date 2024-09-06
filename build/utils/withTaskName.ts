export const withTaskName = <T>(name: string, fn: T): any =>
  Object.assign(fn as unknown as { [key: string]: any }, { displayName: name });
