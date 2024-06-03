'use client';
import ButtonIcon from '../button/ButtonIcon';
import { useForm, SubmitHandler } from 'react-hook-form';

interface SearchInput {
  searchKeyword: string;
}

const SearchInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInput>();
  const onSubmit: SubmitHandler<SearchInput> = () => {};
  return (
    <div className="flex w-full h-[49px] px-[16px] box-border bg-gray-100 rounded-[20px] rounded-bl-[5px]">
      <label htmlFor="searchKeyword">
        <span className="ico_pravel ico_search24">키워드 검색</span>
      </label>
      <input
        type="text"
        id="searchKeyword"
        placeholder="가고 싶은곳이 있다면 바로 추가해요!"
        {...register('searchKeyword')}
        className="grow ml-[14px] bg-gray-100 text-[14px] placeholder-gray-600"
      />
      <ButtonIcon type="button" className="ico_pravel ico_close24" />
    </div>
  );
};
export default SearchInput;
