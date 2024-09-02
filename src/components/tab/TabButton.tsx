'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface TabButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  name: string;
}
const TabButton = ({
  id,
  selected,
  name,
  children,
  ...rest
}: TabButtonType) => {
  const router = useRouter();
  const params = useSearchParams();
  const typeParam = params.get('type');
  const filterParam = params.get('filter');
  const handleTabButtonClick = () => {
    router.push(`/search/${name}?type=${typeParam}&filter=${filterParam}`);
  };

  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      tabIndex={!selected ? -1 : 0}
      onClick={handleTabButtonClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TabButton;
