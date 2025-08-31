'use client';

import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {/* Optional dashboard-specific layout like sidebar */}
      {children}
    </section>
  );
}
