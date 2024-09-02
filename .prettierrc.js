module.exports = {
  tabWidth: 2, // 탭 너비를 2칸으로 설정하여 들여쓰기 스타일 통일
  semi: true, // 모든 문장의 끝에 세미콜론을 추가하여 명확성 유지
  singleQuote: true, // 문자열에 작은따옴표 사용
  trailingComma: 'es5', // ES5에서 유효한 경우에 후행 쉼표 추가
  printWidth: 80, // 한 줄의 최대 길이를 80자로 제한하여 가독성 유지
  quoteProps: 'as-needed', // 필요한 경우에만 객체 속성에 따옴표 사용
  arrowParens: 'always', // 화살표 함수에서 항상 괄호 사용
  htmlWhitespaceSensitivity: 'css', // HTML에서 CSS의 공백 처리 규칙을 따름
  endOfLine: 'lf', // 줄바꿈을 LF로 설정하여 여러 운영 체제 간의 일관성 유지
  bracketSameLine: false, // 여러 줄 JSX 요소의 닫는 괄호를 다음 줄에 배치
  bracketSpacing: true, // 객체 리터럴의 중괄호 안쪽에 공백 추가하여 가독성 향상
  jsxSingleQuote: false, // JSX에서는 더블 쿼트를 사용하여 HTML과 일관성 유지
};
