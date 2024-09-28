import IcoCafe from '../../svg/ico_cafe.svg';
import IcoChinese from '../../svg/ico_chinese.svg';
import IcoFood from '../../svg/ico_food.svg';
import IcoJapanese from '../../svg/ico_japanese.svg';
import IcoWestern from '../../svg/ico_western.svg';

interface IcoCategoryProps {
  category: string;
}

const IcoCategory = ({ category }: IcoCategoryProps) => {
  switch (category) {
    case '양식':
      return <IcoWestern />;

    case '중식':
      return <IcoChinese />;

    case '일식':
      return <IcoJapanese />;

    case '카페':
      return <IcoCafe />;

    case '관광':
      return <></>;

    default:
      return <IcoFood />;
  }
};

export default IcoCategory;
