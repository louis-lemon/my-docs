'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        options: {
          type: 'static',
          // GitHub Pages 배포시 basePath 고려 - basePath가 이미 Next.js에서 자동으로 처리됨
          api: '/api/search',
        },
      }}
    >
      {children}
    </RootProvider>
  );
}