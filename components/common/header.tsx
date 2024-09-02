import HeaderLogo from '@/public/svg/wineWhiteLogo-s.svg';

export default function header() {
  return (
    <div
      className="
    flex 
    justify-center
    "
    >
      <div
        className="
    flex
    justify-between 
    items-center
    
    bg-black

    mob:mt-4 mob:mx-4 mob:rounded-[12px] mob:w-auto mob:py-4 mob:px-5
    tab:mt-6 tab:mx-5 tab:rounded-[16px] tab:w-[744px]
    pc:mt-6 pc:rounded-[16px] pc:w-[1200px]
    "
        style={{ padding: '11px 60px' }}
      >
        {/* 렌딩페이지 href 추가필요 */}
        <HeaderLogo aria-label="랜딩페이지 이동" />

        {/* 로그인 페이지 생성 후 Link로 수정 */}
        <span className="text-white text-[16px] font-medium">로그인</span>
      </div>
    </div>
  );
}
