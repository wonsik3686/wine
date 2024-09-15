export default function WineDetailSkeleton() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[71.25rem] flex-col tab:mt-5 tab:px-5 mob:mt-3 mob:px-4 pc:mt-5">
        {/* 스켈레톤 와인 이미지 */}
        <article className="relative mt-10 flex h-[16.25rem] w-full animate-pulse flex-col justify-end mob:h-[13.0625rem]">
          <div className="absolute bottom-0 h-[13.0625rem] w-[15.25rem] rounded-2xl bg-gray-200 tab:h-[18.875rem] tab:w-[12.75rem] mob:h-[15.0625rem] mob:w-[6.12rem]" />
          <div className="h-[16.25rem] w-full rounded-2xl border-[1px] border-gray-300 bg-gray-200 mob:h-[13.0625rem]" />
        </article>

        {/* 스켈레톤 리뷰 목록 */}
        <section className="flex tab:flex-col-reverse tab:gap-[2.25rem] mob:gap-[1.25rem] pc:flex-row pc:gap-[3.75rem]">
          <div className="flex flex-col pc:mt-[3.75rem] pc:w-[50rem]">
            <div className="h-8 rounded-2xl bg-gray-200 font-sans text-xl font-bold text-gray-800 tab:hidden mob:hidden pc:mb-[1.38rem]" />

            {/* 스켈레톤 리뷰 아이템 */}
            <article className="mb-5 mt-2 flex animate-pulse flex-col items-center justify-center gap-[0.625rem] self-stretch rounded-2xl border-[1px] border-gray-300 px-10 pb-6 pt-8 mob:px-6 mob:py-4">
              <div className="flex w-full flex-row justify-between">
                <div className="flex flex-row items-center gap-4">
                  {/* 스켈레톤 프로필 이미지 */}
                  <div className="h-16 w-16 rounded-full bg-gray-200 mob:h-[2.625rem] mob:w-[2.625rem]" />
                  <div className="flex flex-col">
                    <b className="h-[24px] w-[100px] rounded-2xl bg-gray-200 font-sans text-2lg font-semibold text-gray-800 mob:text-lg" />
                    <p className="mt-1 h-[16px] w-[50px] rounded-2xl bg-gray-200 font-sans text-lg font-normal text-gray-500 mob:text-md" />
                  </div>
                </div>
              </div>

              {/* 스켈레톤 리뷰 내용 */}
              <div className="mt-5 w-full">
                <div className="h-[50px] w-full rounded-2xl bg-gray-200" />
              </div>
            </article>

            {/* 또 다른 스켈레톤 리뷰 아이템 */}
            <article className="mb-5 mt-2 flex animate-pulse flex-col items-center justify-center gap-[0.625rem] self-stretch rounded-2xl border-[1px] border-gray-300 px-10 pb-6 pt-8 mob:px-6 mob:py-4">
              <div className="flex w-full flex-row justify-between">
                <div className="flex flex-row items-center gap-4">
                  {/* 스켈레톤 프로필 이미지 */}
                  <div className="h-16 w-16 rounded-full bg-gray-200 mob:h-[2.625rem] mob:w-[2.625rem]" />
                  <div className="flex flex-col">
                    <b className="h-[24px] w-[100px] rounded-2xl bg-gray-200 font-sans text-2lg font-semibold text-gray-800 mob:text-lg" />
                    <p className="mt-1 h-[16px] w-[50px] rounded-2xl bg-gray-200 font-sans text-lg font-normal text-gray-500 mob:text-md" />
                  </div>
                </div>
              </div>

              {/* 스켈레톤 리뷰 내용 */}
              <div className="mt-5 w-full">
                <div className="h-[50px] w-full rounded-2xl bg-gray-200" />
              </div>
            </article>
          </div>

          {/* 스켈레톤 리뷰 남기기 버튼 */}
          <div className="mt-14 flex rounded-2xl bg-gray-200 tab:h-32 tab:justify-center mob:mt-10 mob:h-60 mob:flex-col pc:h-72 pc:w-72 pc:flex-col">
            <div className="pc:hidden">
              <div className="h-[50px] w-[200px] animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
