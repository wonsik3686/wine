'use client';

import { deleteReview } from '@/api/reviews.api';
import { getUserReviews, getUserWines } from '@/api/users.api';
import { deleteWine } from '@/api/wines.api';
import { PriceBox, RatingBox } from '@/components/common/Boxes';
import Dropdown from '@/components/common/dropdown/Dropdown';
import Kebab from '@/public/icons/kebab.svg';
import { Params, Reviews, WineList, Wines } from '@/types/user.types';
import formatDistanceToNowKor from '@/utils/dateTimeUtils/FormatDistanceToNow';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import AddWineModal from '../modal/AddWineModal';
import DeleteModal from '../modal/DeleteModal';
import AddReviewModal from '../modal/reviewmodal/AddReviewModal';

const isActive: {
  [index: string]: boolean;
} = { review: true, wine: true };

const TapMenus = [
  { key: 'review', value: '내가 쓴 후기' },
  { key: 'wine', value: '내가 등록한 와인' },
];

const options = [
  { label: '수정하기', value: 'edit' },
  { label: '삭제하기', value: 'delete' },
];

type FormValues = {
  id: number;
  name: string;
  price: number;
  region: string;
  type: string;
  image: File | string | null;
};

function UserTapMenu() {
  const [menu, setMenu] = useState(TapMenus[0].key);
  const [reviews, setReviews] = useState({} as Reviews);
  const [wines, setWines] = useState({} as Wines);
  const [modal, setModal] = useState<{
    [index: string]: boolean;
  }>({ edit: false, delete: false });
  const [itemId, setItemId] = useState(0);
  const [reviewItem, setReviewItem] = useState(
    {} as { id: number; name: string }
  );
  const [wineItem, setWineItem] = useState({} as FormValues);

  const handleActiveModal = (e: string | number, i: number) => {
    const copy = { ...modal };
    copy[e] = !copy[e];
    setItemId(i);

    if (e === 'edit' && modal.edit === false) {
      if (menu === 'review') {
        const [item] = reviews.list.filter(
          ({ id }: { id: number }) => id === i
        );

        const getReview = {
          id: item.wine.id,
          name: item.wine.name,
        };

        setReviewItem(getReview);
        console.log(getReview);
      } else {
        const [item]: WineList[] = wines.list.filter(
          ({ id }: { id: number }) => id === i
        );

        const getWine = {
          id: item.id,
          name: item.name,
          price: item.price,
          region: item.region,
          type: item.type,
          image: item.image,
        };

        setWineItem(getWine);
        console.log(getWine);
      }
    }

    setModal(copy);
  };

  const handleDeleteItem = () => {
    const getMenu: {
      [index: string]: [any, any, Dispatch<SetStateAction<any>>];
    } = {
      review: [reviews, deleteReview, setReviews],
      wine: [wines, deleteWine, setWines],
    };
    const [isMenu, fetchItem, setItems] = getMenu[menu];

    fetchItem({ id: itemId });

    const copy = { ...isMenu };

    copy.list = copy.list.filter(({ id }: { id: number }) => id !== itemId);
    --copy.totalCount;

    setItems(copy);

    handleActiveModal('delete', 0);
  };

  const getItems = async () => {
    const getMenu: {
      [index: string]: [
        Reviews | Wines,
        (data: Params) => Promise<Reviews | Wines>,
        Dispatch<SetStateAction<any>>,
      ];
    } = {
      review: [reviews, getUserReviews, setReviews],
      wine: [wines, getUserWines, setWines],
    };
    const [isMenu, fetchItem, setItem] = getMenu[menu];

    const result = await fetchItem({
      limit: 10,
      ...(isMenu.nextCursor === undefined
        ? {}
        : {
            cursor: isMenu.nextCursor,
          }),
    });

    if (result.nextCursor === null) isActive[menu] = false;

    const data = {
      list: [...(isMenu.list === undefined ? [] : isMenu.list), ...result.list],
      totalCount: result.totalCount,
      nextCursor: result.nextCursor,
    };

    setItem(data);
  };

  return (
    <section className="flex w-full flex-col gap-y-4 tab2:gap-y-[1.375rem]">
      <header className="flex items-center justify-between">
        <div className="flex gap-x-4 text-2lg font-bold tab2:gap-x-8 tab2:text-xl">
          {TapMenus.map((tapMenu) => (
            <button
              key={tapMenu.key}
              type="button"
              className={`${menu === tapMenu.key ? 'text-gray-800' : 'text-gray-500'}`}
              onClick={() => {
                setMenu(tapMenu.key);
              }}
            >
              {tapMenu.value}
            </button>
          ))}
        </div>

        <p className="text-xs2 font-normal text-purple-100 tab2:text-md">
          총 {menu === 'review' ? reviews.totalCount : wines.totalCount}개
        </p>
      </header>

      {menu === 'review' && (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={getItems}
            hasMore={isActive[menu]}
            loader={
              <div className="loader" key={0}>
                Loading...
              </div>
            }
            className="flex flex-col gap-y-4 tab2:gap-y-2"
          >
            {reviews.list?.map((review) => (
              <article
                key={`review-${review.id}`}
                className="flex flex-col gap-y-4 rounded-2xl border border-gray-300 px-5 py-4 tab2:gap-y-5 tab2:px-10 tab2:py-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <RatingBox rating={review.rating} />
                    <p className="text-md font-normal text-gray-500 tab2:text-lg">
                      {formatDistanceToNowKor(review.updatedAt)}
                    </p>
                  </div>
                  <div>
                    <Dropdown
                      options={options}
                      onSelect={(e) => handleActiveModal(e, review.id)}
                      type="action"
                      trigger={<Kebab />}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-[0.625rem]">
                  <h2 className="text-md font-medium text-gray-500 tab2:text-lg">
                    {review.wine.name}
                  </h2>
                  <h3 className="text-md font-normal text-gray-800 tab2:text-lg">
                    {`${review.content}`}
                  </h3>
                </div>
              </article>
            ))}
          </InfiniteScroll>

          <AddReviewModal
            isOpen={modal.edit}
            mode="edit"
            onClick={() => handleActiveModal('edit', 0)}
            wineDetail={reviewItem}
            reviewId={itemId}
          />
        </>
      )}

      {menu === 'wine' && (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={getItems}
            hasMore={isActive[menu]}
            loader={
              <div className="loader" key={0}>
                Loading...
              </div>
            }
            className="flex flex-col gap-y-4 tab2:gap-y-5"
          >
            {wines.list?.map((wine) => (
              <article
                key={`wine-${wine.id}`}
                className="mt-5 flex justify-between gap-x-5 rounded-2xl border border-gray-300 p-5 tab2:mt-10 tab2:px-10 tab2:py-[1.875rem]"
              >
                <div className="relative w-[3.75rem] shrink-0 tab2:mx-5 tab2:w-20">
                  {wine.image && (
                    <Image
                      width={80}
                      height={160}
                      src={wine.image}
                      alt="와인 이미지"
                      className="absolute -bottom-5 h-[calc(100%+60px)] w-[3.75rem] tab2:-bottom-[1.875rem] tab2:h-[calc(100%+100px)] tab2:min-w-20"
                    />
                  )}
                </div>
                <div className="flex grow flex-col justify-between gap-y-1 tab2:gap-y-3">
                  <div className="flex flex-col gap-[0.9375rem] object-[20px] tab2:gap-5">
                    <h2 className="text-xl font-semibold text-gray-800 tab2:text-3xl">
                      {wine.name}
                    </h2>
                    <h3 className="text-md font-normal text-gray-500 tab2:text-lg">
                      {wine.region}
                    </h3>
                  </div>
                  <PriceBox price={wine.price} />
                </div>
                <div>
                  <Dropdown
                    options={options}
                    onSelect={(e) => handleActiveModal(e, wine.id)}
                    type="action"
                    trigger={<Kebab />}
                  />
                </div>
              </article>
            ))}
          </InfiniteScroll>

          <AddWineModal
            isOpen={modal.edit}
            mode="edit"
            onClick={() => handleActiveModal('edit', 0)}
            initialFormValue={wineItem}
          />
        </>
      )}
      <DeleteModal
        isOpen={modal.delete}
        onCancel={() => handleActiveModal('delete', 0)}
        onClick={handleDeleteItem}
      />
    </section>
  );
}

export default UserTapMenu;
