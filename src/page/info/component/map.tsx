import '../info.scss';
import { LocationType } from './weather';
import { useRef, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function LocationMapCom({ mapx, mapy }: LocationType) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(mapy, mapx), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    var marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(mapy, mapx)
    });
    marker.setMap(map);

    var infowindow = new window.kakao.maps.InfoWindow({
      map: map,
      position: new window.kakao.maps.LatLng(mapy, mapx),
      content: '<p>구름이 개못생김</p>'
    });
    infowindow.open(map, marker);

    //var latlng = new window.kakao.maps.LatLng(mapy, mapx);

    var zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div
      id='map'
      style={{ width: '880px', height: '300px' }}
      className='kakaomap'
    ></div>
  );
}
