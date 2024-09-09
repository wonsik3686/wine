import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale'; // 한국어 지원

export default function formatDistanceToNowKor(dateString: string): string {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true, locale: ko });
}
