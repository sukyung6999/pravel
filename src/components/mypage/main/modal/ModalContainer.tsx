import ModalBackdrop from '../../modal/ModalBackdrop';

interface ModalContainerProps {
  title: string;
  children: React.ReactNode;
}

const ModalContainer = ({ title, children }: ModalContainerProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-dvh">
      <ModalBackdrop blur />
      <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col gap-[20px] z-20 px-[36px]">
        <h2 className="text-white font-semibold text-xl tracking-tighter text-center">
          {title}
        </h2>
        <div className="bg-white rounded-xl w-full pt-[37px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
