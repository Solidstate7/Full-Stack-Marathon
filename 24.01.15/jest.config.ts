import type { Config } from '@jest/types';

export const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/**/*.test.(js|ts)'],
  // 경로 패턴 설정
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
  },
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
};
