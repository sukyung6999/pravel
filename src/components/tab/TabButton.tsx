'use client';

import { useRouter } from 'next/navigation';

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
  const handleTabButtonClick = () => {
    router.push(`/search/list/${name}`);
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
