export const MarkerCurrentImage = (svgString: string) => {
  return {
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
    size: {
      width: 34,
      height: 34,
    },
  };
};
export const MarkerPlaceImage = (svgString: string) => {
  return {
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
    size: {
      width: 47,
      height: 46,
    },
    options: {
      offset: {
        x: 23,
        y: 0,
      },
    },
  };
};

export const CurrentMarkerString = (color: string) => {
  return `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="17" fill="${color}" fill-opacity="0.4"/>
    <circle cx="17.0011" cy="17.0011" r="10.3214" fill="${color}"/>
    </svg>`;
};

export const FoodMarkerString = (color: string) => {
  return `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_6497)">
<circle cx="23.5" cy="21" r="16" fill="${color}"/>
</g>
<rect x="16.5" y="19" width="14" height="2" fill="#0BC58D"/>
<path d="M15.5 27H16.6972C16.8946 27 17.0877 27.0584 17.2519 27.1679L17.7442 27.4962C18.237 27.8247 18.8161 28 19.4083 28H27.5917C28.1839 28 28.763 27.8247 29.2558 27.4962L29.7481 27.1679C29.9123 27.0584 30.1054 27 30.3028 27H31.5C32.0523 27 32.5 26.5523 32.5 26C32.5 25.4477 32.0523 25 31.5 25H29.8028C29.6054 25 29.4123 25.0584 29.2481 25.1679L28.2519 25.8321C28.0877 25.9416 27.8946 26 27.6972 26H19.3028C19.1054 26 18.9123 25.9416 18.7481 25.8321L17.7519 25.1679C17.5877 25.0584 17.3946 25 17.1972 25H15.5C14.9477 25 14.5 25.4477 14.5 26C14.5 26.5523 14.9477 27 15.5 27Z" fill="#0BC58D"/>
<path d="M16.5 20C16.5 19.4477 16.9477 19 17.5 19H29.5C30.0523 19 30.5 19.4477 30.5 20V23C30.5 24.6569 29.1569 26 27.5 26H19.5C17.8431 26 16.5 24.6569 16.5 23V20Z" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M17.5 25H15.5C14.9477 25 14.5 25.4477 14.5 26V26C14.5 26.5523 14.9477 27 15.5 27H16.6972C16.8946 27 17.0877 27.0584 17.2519 27.1679L17.7442 27.4962C18.237 27.8247 18.8161 28 19.4083 28H27.5917C28.1839 28 28.763 27.8247 29.2558 27.4962L29.7481 27.1679C29.9123 27.0584 30.1054 27 30.3028 27H31.5C32.0523 27 32.5 26.5523 32.5 26V26C32.5 25.4477 32.0523 25 31.5 25H29.5" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M16.5 21.5H30.5" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M19.808 13C19.525 13.3333 19.2867 14.3859 19.808 15C20.2607 15.5334 19.8079 16.6667 19.5249 17" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M23.308 13C23.025 13.3333 22.7867 14.3859 23.308 15C23.7607 15.5334 23.3079 16.6667 23.0249 17" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M26.808 13C26.525 13.3333 26.2867 14.3859 26.808 15C27.2607 15.5334 26.8079 16.6667 26.5249 17" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_720_6497" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_6497"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_6497" result="shape"/>
</filter>
</defs>
</svg>
`;
};
export const JapaneseMarkerString = (color: string) => {
  return `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_8003)">
<circle cx="23.5" cy="21" r="16" fill="${color}"/>
</g>
<g clip-path="url(#clip0_720_8003)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 20C16.9477 20 16.5 20.4477 16.5 21V22L30.5 22V21C30.5 20.4477 30.0523 20 29.5 20H17.5Z" fill="#0BC58D"/>
<path d="M16.5 21C16.5 20.4477 16.9477 20 17.5 20H29.5C30.0523 20 30.5 20.4477 30.5 21V22C30.5 24.7614 28.2614 27 25.5 27H21.5C18.7386 27 16.5 24.7614 16.5 22V21Z" stroke="#1A1E27" stroke-width="1.2"/>
<rect x="20.5" y="27" width="6" height="1.5" rx="0.75" fill="#0BC58D" stroke="#1A1E27" stroke-width="1.2"/>
<line x1="16.5" y1="22.4" x2="30.5" y2="22.4" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M21 15V20" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M23.5 15V20" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M26 15V20" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M19.5 14.5H30.5" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M19.5 17H21M30.5 17H26.2222" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_720_8003" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_8003"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_8003" result="shape"/>
</filter>
<clipPath id="clip0_720_8003">
<rect width="24" height="24" fill="white" transform="translate(11.5 9)"/>
</clipPath>
</defs>
</svg>

`;
};
export const CafeMarkerString = (color: string) => {
  return `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_5245)">
<circle cx="23" cy="21" r="16" fill="${color}"/>
</g>
<path d="M19 29H27L27.5 23.5H18.5L19 29Z" fill="#0BC58D"/>
<path d="M18 18H28L27 29H19L18 18Z" stroke="#1A1E27" stroke-width="1.2" stroke-linejoin="round"/>
<path d="M19 29H27L27.5 23.5H18.5L19 29Z" stroke="#1A1E27" stroke-width="1.2" stroke-linejoin="round"/>
<path d="M26.5692 12.1897C26.674 11.8754 26.5041 11.5356 26.1897 11.4308C25.8754 11.326 25.5356 11.4959 25.4308 11.8103L26.5692 12.1897ZM25.5692 15.1897L26.5692 12.1897L25.4308 11.8103L24.4308 14.8103L25.5692 15.1897Z" fill="#1A1E27"/>
<path d="M17.5 15H28.5L29 18H17L17.5 15Z" fill="#0BC58D" stroke="#1A1E27" stroke-width="1.2" stroke-linejoin="round"/>
<defs>
<filter id="filter0_d_720_5245" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_5245"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_5245" result="shape"/>
</filter>
</defs>
</svg>

`;
};
export const WesternMarkerString = (color: string) => {
  return `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_2080)">
<circle cx="23.5" cy="21" r="16" fill="${color}"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8436 13.7382C15.139 14.7346 15.1845 16.0784 15.9549 17.0249L20.0573 22.065C20.3724 22.4521 20.9247 22.5476 21.3515 22.2887L21.6233 22.1238L27.6293 28.1298C28.0903 28.5909 28.8519 28.5405 29.2482 28.0227C29.5772 27.5927 29.5365 26.9854 29.1529 26.6033L20.8444 18.3273C20.829 18.312 20.8133 18.2972 20.7972 18.283L16.2203 13.7061C16.1119 13.5977 15.9321 13.613 15.8436 13.7382Z" fill="#0BC58D"/>
<path d="M15.9549 17.0249L15.4896 17.4036L15.9549 17.0249ZM15.8436 13.7382L16.3335 14.0846L16.3335 14.0846L15.8436 13.7382ZM20.0573 22.065L19.592 22.4437L20.0573 22.065ZM21.3515 22.2887L21.6627 22.8017L21.6627 22.8017L21.3515 22.2887ZM21.6233 22.1238L22.0476 21.6996L21.7147 21.3666L21.3121 21.6108L21.6233 22.1238ZM29.2482 28.0227L28.7717 27.658L28.7717 27.658L29.2482 28.0227ZM29.1529 26.6033L29.5763 26.1782L29.1529 26.6033ZM20.8444 18.3273L20.421 18.7524L20.421 18.7524L20.8444 18.3273ZM20.7972 18.283L20.3729 18.7072L20.3861 18.7204L20.4 18.7327L20.7972 18.283ZM16.4203 16.6461C15.8199 15.9085 15.7844 14.8612 16.3335 14.0846L15.3537 13.3917C14.4937 14.608 14.5492 16.2483 15.4896 17.4036L16.4203 16.6461ZM20.5226 21.6862L16.4203 16.6461L15.4896 17.4036L19.592 22.4437L20.5226 21.6862ZM21.0403 21.7757C20.8696 21.8793 20.6487 21.8411 20.5226 21.6862L19.592 22.4437C20.0961 23.0631 20.9798 23.2159 21.6627 22.8017L21.0403 21.7757ZM21.3121 21.6108L21.0403 21.7757L21.6627 22.8017L21.9345 22.6368L21.3121 21.6108ZM28.0536 27.7055L22.0476 21.6996L21.199 22.5481L27.205 28.5541L28.0536 27.7055ZM28.7717 27.658C28.5959 27.8877 28.2581 27.9101 28.0536 27.7055L27.205 28.5541C27.9226 29.2716 29.1079 29.1932 29.7246 28.3874L28.7717 27.658ZM28.7294 27.0284C28.8996 27.1979 28.9177 27.4673 28.7717 27.658L29.7246 28.3874C30.2368 27.7181 30.1733 26.7729 29.5763 26.1782L28.7294 27.0284ZM20.421 18.7524L28.7294 27.0284L29.5763 26.1782L21.2679 17.9022L20.421 18.7524ZM20.4 18.7327C20.4071 18.739 20.4141 18.7455 20.421 18.7524L21.2679 17.9022C21.244 17.8784 21.2195 17.8554 21.1944 17.8333L20.4 18.7327ZM15.796 14.1303L20.3729 18.7072L21.2215 17.8587L16.6446 13.2818L15.796 14.1303ZM16.3335 14.0846C16.2073 14.2631 15.9507 14.285 15.796 14.1303L16.6446 13.2818C16.2732 12.9105 15.6569 12.9629 15.3537 13.3917L16.3335 14.0846Z" fill="#1A1E27"/>
<path d="M28.4094 13.0283L25.0327 16.405C24.6422 16.7955 24.6422 17.4287 25.0327 17.8192L25.5648 18.3513C25.6429 18.4294 25.6429 18.556 25.5648 18.6341L24.7873 19.4116M32.4931 17.1121L29.1165 20.4887C28.726 20.8793 28.0928 20.8793 27.7023 20.4887L27.1322 19.9187C27.0541 19.8406 26.9275 19.8406 26.8494 19.9187L26.0719 20.6962M19.5818 24.6171L17.1476 27.0513C16.7929 27.406 16.7929 27.9811 17.1476 28.3358V28.3358C17.5024 28.6906 18.0775 28.6906 18.4322 28.3358L21.4999 25.2681" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M29.7707 14.3897L27.7288 16.4315" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M31.1001 15.7822L29.0582 17.8241" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_720_2080" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_2080"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_2080" result="shape"/>
</filter>
</defs>
</svg>


`;
};
export const ChineseMarkerString = (color: string) => {
  return `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_642_155)">
<circle cx="23" cy="21" r="16" fill="${color}"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 22.0012C14 21.725 14.2239 21.5012 14.5 21.5012H30.5C30.7761 21.5012 31 21.725 31 22.0012V27.0012C31 27.2773 30.7761 27.5012 30.5 27.5012H14.5C14.2239 27.5012 14 27.2773 14 27.0012V22.0012ZM15 22.5012V26.5012H30V22.5012H15Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 20.5012C15 20.225 15.2239 20.0012 15.5 20.0012H29.5C29.7761 20.0012 30 20.225 30 20.5012V22.0012C30 22.2773 29.7761 22.5012 29.5 22.5012H15.5C15.2239 22.5012 15 22.2773 15 22.0012V20.5012ZM16 21.0012V21.5012H29V21.0012H16Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 27.0012C15 26.725 15.2239 26.5012 15.5 26.5012H29.5C29.7761 26.5012 30 26.725 30 27.0012V28.5012C30 28.7773 29.7761 29.0012 29.5 29.0012H15.5C15.2239 29.0012 15 28.7773 15 28.5012V27.0012ZM16 27.5012V28.0012H29V27.5012H16Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 21.5012C19.7761 21.5012 20 21.725 20 22.0012V27.0012C20 27.2773 19.7761 27.5012 19.5 27.5012C19.2239 27.5012 19 27.2773 19 27.0012V22.0012C19 21.725 19.2239 21.5012 19.5 21.5012Z" fill="#1A1E27"/>
<path d="M24.5 18.5009C24.5 20.1577 22.7091 20.5009 20.5 20.5009C18.2909 20.5009 16.5 20.1577 16.5 18.5009C16.5 17.3904 17.3044 16.3161 18.5 15.5011C18.8095 15.2902 19.1452 15.1154 19.5 15.0011C19.6595 14.9498 19.3418 14.5011 19.5 14.0013C19.6672 13.473 20.327 13.5004 20.5 13.5004C20.673 13.5004 21.3328 13.4728 21.5 14.0011C21.6665 14.5273 21.3405 14.9498 21.5 15.0011C21.8548 15.1154 22.1905 15.2902 22.5 15.5011C23.6956 16.3161 24.5 17.3904 24.5 18.5009Z" fill="#0BC58D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5236 14.0004C20.5156 14.0004 20.5077 14.0004 20.5 14.0004C20.4924 14.0004 20.4845 14.0004 20.4766 14.0004C20.3763 14.0002 20.253 13.9999 20.135 14.0336C20.02 14.0664 19.9913 14.106 19.9767 14.1522C19.9396 14.2695 19.9524 14.3961 19.9889 14.5623C19.9909 14.5715 19.9935 14.583 19.9966 14.5963C20.0115 14.6611 20.0361 14.7676 20.0432 14.8509C20.0478 14.9044 20.0536 15.0178 20.0068 15.1412C19.9477 15.2971 19.8223 15.4227 19.6533 15.4771C19.3519 15.5741 19.059 15.7252 18.7816 15.9143C17.6421 16.691 17 17.6338 17 18.5009C17 18.819 17.0837 19.0412 17.2118 19.209C17.3446 19.3829 17.5533 19.535 17.8591 19.6587C18.4867 19.9126 19.4023 20.0009 20.5 20.0009C21.5977 20.0009 22.5133 19.9126 23.1409 19.6587C23.4467 19.535 23.6554 19.3829 23.7882 19.209C23.9163 19.0412 24 18.819 24 18.5009C24 17.6338 23.3579 16.691 22.2184 15.9143C21.941 15.7252 21.6481 15.5741 21.3467 15.4771C21.1847 15.4249 21.0554 15.3046 20.9939 15.1432C20.9454 15.0163 20.9533 14.9 20.9586 14.8472C20.9666 14.7681 20.9922 14.6628 21.0072 14.6012C21.0105 14.5876 21.0133 14.5761 21.0153 14.5675C21.0505 14.4138 21.0653 14.2846 21.0233 14.152C21.0087 14.1059 20.9801 14.0663 20.8651 14.0335C20.7472 13.9999 20.624 14.0002 20.5236 14.0004ZM21.1392 13.0718C21.4392 13.1573 21.8241 13.3681 21.9767 13.8503C22.0779 14.1699 22.054 14.4576 22.0167 14.6626C22.2879 14.7804 22.5437 14.9259 22.7816 15.088C24.0333 15.9412 25 17.147 25 18.5009C25 19.0111 24.8598 19.4532 24.5831 19.8157C24.3111 20.1721 23.934 20.4165 23.516 20.5857C22.6958 20.9175 21.6114 21.0009 20.5 21.0009C19.3886 21.0009 18.3042 20.9175 17.484 20.5857C17.066 20.4165 16.6889 20.1721 16.4169 19.8157C16.1402 19.4532 16 19.0111 16 18.5009C16 17.147 16.9667 15.9412 18.2184 15.088C18.4578 14.9248 18.7153 14.7785 18.9885 14.6604C18.9515 14.4578 18.9234 14.166 19.0233 13.8504C19.1759 13.3683 19.5607 13.1575 19.8607 13.0719C20.1244 12.9967 20.3842 12.9993 20.4786 13.0003C20.4871 13.0004 20.4943 13.0004 20.5 13.0004C20.5057 13.0004 20.5129 13.0004 20.5215 13.0003C20.6159 12.9993 20.8756 12.9967 21.1392 13.0718Z" fill="#1A1E27"/>
<path d="M24.5 20.5008C26.7091 20.5008 28.5 20.1577 28.5 18.5008C28.5 17.3904 27.6956 16.3161 26.5 15.5011C26.1905 15.2902 25.8548 15.1154 25.5 15.0011C25.3405 14.9498 25.6665 14.5273 25.5 14.0011C25.3328 13.4728 24.673 13.5004 24.5 13.5004C24.327 13.5004 23.6672 13.473 23.5 14.0013C23.3418 14.5011 23.6595 14.9498 23.5 15.0011C23.1452 15.1154 22.8095 15.2902 22.5 15.5011C23 15.8345 24.1 16.8012 24.5 18.0012C24.9 19.2012 23.6667 20.1191 23 20.4281C23.4632 20.4811 23.9695 20.5008 24.5 20.5008Z" fill="#0BC58D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5236 14.0004C24.5156 14.0004 24.5077 14.0004 24.5 14.0004C24.4924 14.0004 24.4846 14.0004 24.4766 14.0004C24.3763 14.0002 24.253 13.9999 24.135 14.0336C24.02 14.0664 23.9913 14.106 23.9767 14.1522C23.9396 14.2695 23.9524 14.3961 23.9889 14.5623C23.9909 14.5715 23.9935 14.583 23.9966 14.5963C24.0115 14.6611 24.0361 14.7676 24.0432 14.8509C24.0478 14.9044 24.0536 15.0178 24.0068 15.1412C23.9477 15.2971 23.8223 15.4227 23.6533 15.4771C23.5662 15.5051 23.4799 15.5377 23.3944 15.5743C23.5614 15.7254 23.7373 15.8995 23.9102 16.0929C24.3244 16.5561 24.7454 17.1561 24.9743 17.8431C25.2466 18.6598 24.9455 19.3654 24.5372 19.8651C24.4992 19.9116 24.46 19.9568 24.4197 20.0007C24.4464 20.0008 24.4731 20.0009 24.5 20.0009C25.5977 20.0009 26.5133 19.9126 27.1409 19.6587C27.4467 19.535 27.6554 19.3829 27.7882 19.209C27.9163 19.0412 28 18.819 28 18.5009C28 17.6338 27.3579 16.691 26.2184 15.9143C25.941 15.7252 25.6481 15.5741 25.3467 15.4771C25.1847 15.4249 25.0555 15.3046 24.9939 15.1432C24.9454 15.0163 24.9533 14.9 24.9586 14.8472C24.9666 14.7681 24.9922 14.6628 25.0072 14.6012C25.0105 14.5876 25.0133 14.5761 25.0153 14.5675C25.0505 14.4138 25.0653 14.2846 25.0233 14.152C25.0087 14.1059 24.9801 14.0663 24.8651 14.0335C24.7472 13.9999 24.624 14.0002 24.5236 14.0004ZM25.1392 13.0718C25.4392 13.1573 25.8241 13.3681 25.9767 13.8503C26.0779 14.1699 26.054 14.4576 26.0167 14.6626C26.288 14.7804 26.5438 14.9259 26.7816 15.088C28.0333 15.9412 29 17.147 29 18.5009C29 19.0111 28.8598 19.4532 28.5831 19.8157C28.3111 20.1721 27.934 20.4165 27.516 20.5857C26.6958 20.9175 25.6114 21.0009 24.5 21.0009C23.9585 21.0009 23.4318 20.9807 22.9432 20.9248L21.1755 20.7226L22.7898 19.9744C23.0739 19.8428 23.4809 19.5774 23.7628 19.2324C24.0378 18.8959 24.1534 18.5426 24.0257 18.1593C23.8546 17.6462 23.5256 17.1629 23.1648 16.7595C22.8049 16.357 22.4369 16.06 22.2227 15.9172L21.6055 15.5058L22.2184 15.088C22.4578 14.9248 22.7153 14.7785 22.9885 14.6604C22.9515 14.4578 22.9234 14.166 23.0233 13.8504C23.1759 13.3683 23.5607 13.1575 23.8607 13.0719C24.1244 12.9967 24.3842 12.9993 24.4786 13.0003C24.4871 13.0004 24.4943 13.0004 24.5 13.0004C24.5057 13.0004 24.5129 13.0004 24.5215 13.0003C24.6159 12.9993 24.8756 12.9967 25.1392 13.0718Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8746 16.0379C20.1306 16.1413 20.2543 16.4327 20.1509 16.6888L19.7763 17.616C19.6728 17.872 19.3814 17.9957 19.1254 17.8923C18.8693 17.7888 18.7456 17.4974 18.8491 17.2414L19.2237 16.3142C19.3271 16.0581 19.6185 15.9344 19.8746 16.0379Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1254 16.0379C20.8693 16.1413 20.7456 16.4327 20.8491 16.6888L21.2237 17.616C21.3271 17.872 21.6185 17.9957 21.8746 17.8923C22.1306 17.7888 22.2543 17.4974 22.1509 17.2414L21.7763 16.3142C21.6728 16.0581 21.3814 15.9344 21.1254 16.0379Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 23.5012C16.5 23.225 16.7239 23.0012 17 23.0012H18C18.2761 23.0012 18.5 23.225 18.5 23.5012C18.5 23.7773 18.2761 24.0012 18 24.0012H17C16.7239 24.0012 16.5 23.7773 16.5 23.5012Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 25.5012C16.5 25.225 16.7239 25.0012 17 25.0012H18C18.2761 25.0012 18.5 25.225 18.5 25.5012C18.5 25.7773 18.2761 26.0012 18 26.0012H17C16.7239 26.0012 16.5 25.7773 16.5 25.5012Z" fill="#1A1E27"/>
<defs>
<filter id="filter0_d_642_155" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_642_155"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_642_155" result="shape"/>
</filter>
</defs>
</svg>

`;
};
export const TourMarkerString = (color: string) => {
  return `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_642_153)">
<circle cx="23" cy="21" r="16" fill="${color}"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.3603 12.0199C22.4516 11.9934 22.5484 11.9934 22.6397 12.0199L30.6397 14.3472C30.8532 14.4093 31 14.6049 31 14.8273V16.5C31 16.7761 30.7761 17 30.5 17H14.5C14.2239 17 14 16.7761 14 16.5V14.8273C14 14.6049 14.1468 14.4093 14.3603 14.3472L22.3603 12.0199ZM15 15.2025V16H30V15.2025L22.5 13.0207L15 15.2025Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 27.5C14 27.2239 14.2239 27 14.5 27H30.5C30.7761 27 31 27.2239 31 27.5V29.5C31 29.7761 30.7761 30 30.5 30H14.5C14.2239 30 14 29.7761 14 29.5V27.5ZM15 28V29H30V28H15Z" fill="#1A1E27"/>
<path d="M14.5 16.5H30.5V18.5H14.5V16.5Z" fill="#0BC58D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 16.5C14 16.2239 14.2239 16 14.5 16H30.5C30.7761 16 31 16.2239 31 16.5V18.5C31 18.7761 30.7761 19 30.5 19H14.5C14.2239 19 14 18.7761 14 18.5V16.5ZM15 17V18H30V17H15Z" fill="#1A1E27"/>
<path d="M15.5 26H18.5V27.5H15.5V26Z" fill="#0BC58D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 26C15 25.7239 15.2239 25.5 15.5 25.5H18.5C18.7761 25.5 19 25.7239 19 26V27.5C19 27.7761 18.7761 28 18.5 28H15.5C15.2239 28 15 27.7761 15 27.5V26ZM16 26.5V27H18V26.5H16Z" fill="#1A1E27"/>
<path d="M21 26H24V27.5H21V26Z" fill="#0BC58D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 26C20.5 25.7239 20.7239 25.5 21 25.5H24C24.2761 25.5 24.5 25.7239 24.5 26V27.5C24.5 27.7761 24.2761 28 24 28H21C20.7239 28 20.5 27.7761 20.5 27.5V26ZM21.5 26.5V27H23.5V26.5H21.5Z" fill="#1A1E27"/>
<path d="M26.5 26H29.5V27.5H26.5V26Z" fill="#0BC58D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 26C26 25.7239 26.2239 25.5 26.5 25.5H29.5C29.7761 25.5 30 25.7239 30 26V27.5C30 27.7761 29.7761 28 29.5 28H26.5C26.2239 28 26 27.7761 26 27.5V26ZM27 26.5V27H29V26.5H27Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 26.5V18.5H16.5V26.5H15.5ZM17.5 26.5V18.5H18.5V26.5H17.5Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 26.5V18.5H22V26.5H21ZM23 26.5V18.5H24V26.5H23Z" fill="#1A1E27"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 26.5V18.5H27.5V26.5H26.5ZM28.5 26.5V18.5H29.5V26.5H28.5Z" fill="#1A1E27"/>
<defs>
<filter id="filter0_d_642_153" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_642_153"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_642_153" result="shape"/>
</filter>
</defs>
</svg>

`;
};
