import IcoLogo from '../../svg/ico_logo.svg';

interface DefaultImgProps {
  addClass?: string;
  logoWidth: number;
  logoHeight: number;
}

const DefaultImg = ({ addClass, logoWidth, logoHeight }: DefaultImgProps) => {
  return (
    <div className={`bg-gray-300 ${addClass}`}>
      <IcoLogo
        width={logoWidth}
        height={logoHeight}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
    </div>
  );
};

export default DefaultImg;
