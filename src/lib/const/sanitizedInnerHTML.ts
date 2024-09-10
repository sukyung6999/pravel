import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export const SanitizedInnerHTML = (text: string) => {
  const cleanCode = DOMPurify.sanitize(text);

  return parse(cleanCode);
};
export default {};
