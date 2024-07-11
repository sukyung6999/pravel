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
  const handleTabButtonClick = () => {
    router.push(`/search/list/${name}?type=${typeParam}`);
  };

  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={`panel_${id?.slice(4) || ''}`}
      tabIndex={!selected ? -1 : 0}
      onClick={handleTabButtonClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TabButton;
