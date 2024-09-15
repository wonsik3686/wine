export default function WineDetailCardSkeleton() {
  return (
    <article className="relative mt-10 flex h-[16.25rem] w-full animate-pulse flex-col justify-end mob:h-[13.0625rem]">
      <div className="absolute bottom-0 h-[13.0625rem] w-[15.25rem] rounded-2xl bg-gray-200 tab:h-[18.875rem] tab:w-[12.75rem] mob:h-[15.0625rem] mob:w-[6.12rem]" />
      <div className="h-[16.25rem] w-full rounded-2xl border-[1px] border-gray-300 bg-gray-200 mob:h-[13.0625rem]" />
    </article>
  );
}
