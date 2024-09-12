/**
 * ### 쓰로틀링 함수
 *
 * 지정된 시간 동안 여러 번 호출되는 함수를 제한하여 일정 시간 내에 한 번만 호출되도록 합니다.
 *
 * - `func` - 호출될 **함수**
 * - `delay` - 함수 호출을 제한할 **시간 간격** (밀리초)
 *
 * @example
 * const throttledFunc = throttle(() => {
 *   console.log('쓰로틀링된 함수 호출');
 * }, 1200);
 *
 * window.addEventListener('scroll', throttledFunc);
 */
export function throttle(func: (...args: any[]) => void, delay: number) {
  let lastCall = 0;
  return (...args: any[]) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}
