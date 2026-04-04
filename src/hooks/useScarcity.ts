import { useMemo } from 'react';

/**
 * Pure client-side scarcity engine.
 * Resets to 8 every Monday at midnight.
 * Decrements by 1 every 48 hours after the reset.
 * Never shows 0 — locks at 1.
 */
export const useScarcity = () => {
  const spots = useMemo(() => {
    const now = new Date();
    // Find the most recent Monday midnight
    const day = now.getDay(); // 0=Sun, 1=Mon
    const daysSinceMonday = day === 0 ? 6 : day - 1;
    const lastMonday = new Date(now);
    lastMonday.setDate(now.getDate() - daysSinceMonday);
    lastMonday.setHours(0, 0, 0, 0);

    const msSinceMonday = now.getTime() - lastMonday.getTime();
    const hoursSinceMonday = msSinceMonday / (1000 * 60 * 60);
    const decrements = Math.floor(hoursSinceMonday / 48);

    return Math.max(1, 8 - decrements);
  }, []);

  return spots;
};
