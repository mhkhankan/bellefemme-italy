import { useMemo } from 'react';

/**
 * Pure client-side scarcity engine.
 * Resets to 4 every Sunday at midnight (Europe/Rome).
 * Decrements by 1 every 48 hours after the reset.
 * Never shows 0 — locks at 1.
 */
export const useScarcity = () => {
  const spots = useMemo(() => {
    const now = new Date();
    // Find the most recent Sunday midnight in Europe/Rome
    const day = now.getDay(); // 0 = Sunday
    const lastSunday = new Date(now);
    lastSunday.setDate(now.getDate() - day);
    lastSunday.setHours(0, 0, 0, 0);

    const msSinceSunday = now.getTime() - lastSunday.getTime();
    const hoursSinceSunday = msSinceSunday / (1000 * 60 * 60);
    const decrements = Math.floor(hoursSinceSunday / 48);

    return Math.max(1, 4 - decrements);
  }, []);

  return spots;
};
