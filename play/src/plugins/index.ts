import type { Plugin } from 'vite';
export function testPlugin(): Plugin {
  console.log('this is a test plugin');

  return {
    name: 'test-plugin'
  };
}
