import Button from '@/components/common/Button';
import SearchInput from '@/components/common/SearchInput';
import FliteringModal from '@/components/wines/FilteringModal';
import WineCardGallery from '@/components/wines/WineCardGallery';

export default function WineSection() {
  return (
    <section className="flex gap-[60px]">
      <div>
        <div className="pt-[117px]" />
        <FliteringModal />
        <Button
          buttonStyle="box"
          buttonColor="purple"
          buttonWidth="fitToParent"
          textColor="white"
          style={{
            marginTop: '40px',
          }}
        >
          와인 등록하기
        </Button>
      </div>
      <div className="flex flex-col gap-[60px]">
        <SearchInput placeholder="와인을 검색해 보세요" />
        <WineCardGallery />
      </div>
    </section>
  );
}
