export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function throttle<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    const elapsedTime = now - lastCall;

    if (elapsedTime < delay) {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastCall = now;
          func(...args);
          timeoutId = null;
        }, delay - elapsedTime);
      }
    } else {
      lastCall = now;
      func(...args);
    }
  };
}
