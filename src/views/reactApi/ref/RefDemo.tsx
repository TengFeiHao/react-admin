import { useRef } from 'react';

export default function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>
          Tom
        </button>
        <button onClick={handleScrollToSecondCat}>
          Maru
        </button>
        <button onClick={handleScrollToThirdCat}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul style={{width: '200px', display: 'flex', overflowX: 'auto', listStyle: 'none', margin:0,padding:0}}>
          <li>
            <img
              width={200}
              src="https://files.jiankangyouyi.com/health-cloud-dd/images/sport/record_ROPE.png"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              width={200}
              src="https://files.jiankangyouyi.com/health-cloud-dd/images/sport/health_video.png"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              width={200}
              src="https://files.jiankangyouyi.com/health-cloud-dd/images/common/popup_close.png"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
