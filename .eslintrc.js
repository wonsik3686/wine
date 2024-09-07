module.exports = {
  env: {
    browser: true, // 브라우저 환경을 위한 전역 변수 사용을 허용합니다.
    es2021: true,  // 최신 ECMAScript 기능을 사용합니다.
  },
  extends: [
    'eslint:recommended', // ESLint의 기본 권장 설정 사용
    'airbnb', // Airbnb JavaScript 스타일 가이드 사용
    'airbnb/hooks', // React hooks 관련 규칙 사용
    'plugin:@typescript-eslint/recommended', // TypeScript 규칙 추가
    'plugin:react/recommended', // React 권장 규칙 추가
    'plugin:react/jsx-runtime', // React 17+ JSX 트랜스폼 설정
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
    'next/core-web-vitals', // Next.js 최적화 규칙 사용
  ],
  parser: '@typescript-eslint/parser', // TypeScript 파일(.ts, .tsx)을 파싱하기 위한 파서 설정
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 및 TSX 문법을 사용하여 React 컴포넌트를 작성할 수 있도록 허용
    },
    ecmaVersion: 'latest', // 최신 ECMAScript 문법을 지원합니다.
    sourceType: 'module', // ES 모듈을 사용합니다.
  },
  plugins: [
    'react', // React 관련 플러그인 추가
    'jsx-a11y', // 접근성 관련 플러그인 추가
    '@typescript-eslint', // TypeScript 관련 플러그인 추가
    'import', // ES 모듈 import/export 규칙을 지원하는 플러그인
  ],
  rules: {
    semi: ['error', 'always'], // 문장의 끝에 세미콜론을 항상 추가합니다.
    quotes: ['error', 'single'], // 문자열에 작은따옴표(')를 사용합니다.
    'no-console': 'warn', // console.log 사용 시 경고를 표시합니다.
    'no-plusplus': 'off', // 단항 연산자 ++ 및 --의 사용을 허용합니다.
    'no-restricted-syntax': 'off', // 특정 문법 사용을 금지하지 않도록 설정합니다.
    'consistent-return': 'off', // 함수에서 항상 일관된 반환 값을 요구하지 않습니다.
    'no-underscore-dangle': 'off', // 식별자 이름 앞뒤의 밑줄(_)을 허용합니다.
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 모듈 경계의 함수 반환 타입을 명시적으로 지정하지 않아도 됨
    '@typescript-eslint/no-explicit-any': 'off', // 'any' 타입 사용을 허용합니다.
    'react/jsx-props-no-spreading': 'off', // JSX에서 props 스프레딩을 허용합니다.
    'react/react-in-jsx-scope': 'off', // Next.js에서는 필요하지 않으므로 비활성화합니다.
    'react/prop-types': 'off', // TypeScript를 사용하므로 prop-types 검사를 비활성화합니다.
    'import/prefer-default-export': 'off', // 하나의 export만 있을 경우 default export를 강제하지 않습니다.
    'class-methods-use-this': 'off', // 클래스 메서드 내에서 'this'를 반드시 사용하지 않아도 됩니다.
    'react/state-in-constructor': 'off', // 클래스 컴포넌트의 상태(state)를 생성자에서 초기화하지 않아도 됩니다.
    'react/static-property-placement': 'off', // 클래스의 정적 속성 위치를 강제하지 않습니다.
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // JSX는 .tsx 파일 내에서만 사용하도록 설정합니다.
    'jsx-a11y/anchor-is-valid': 'off', // <a> 태그의 href 유효성 검사를 비활성화합니다.
    'react/require-default-props': 'off',
    'import/extensions': 'off', // 파일 확장자 명시 강제를 비활성화합니다.
    'react/display-name': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions' : 'off',
  },
};