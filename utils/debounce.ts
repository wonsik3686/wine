/**
 * ### 디바운싱 함수
 *
 * 짧은 시간 내에 여러 번 호출되는 함수를 마지막 호출만 처리하도록 제한합니다.
 *
 * - `func` - 호출될 **함수**
 * - `delay` - 호출을 제한할 **시간 간격** (밀리초)
 *
 * @example
 * const debouncedFunc = debounce(() => {
 *   console.log('디바운싱된 함수 호출');
 * }, 300);
 *
 * window.addEventListener('resize', debouncedFunc);
 */
export function debounce(func: (...args: any[]) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
