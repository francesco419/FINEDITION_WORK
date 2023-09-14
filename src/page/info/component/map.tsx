import '../info.scss';
import { LocationType } from './weather';
import { useRef, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KAKAO_TYPE extends LocationType {
  place: string;
}

export default function LocationMapCom({ mapx, mapy, place }: KAKAO_TYPE) {
  const ref = useRef<HTMLDivElement>(null);
  let inputData = [place];

  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(mapy, mapx), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    /* var marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(mapy, mapx)
    });
    marker.setMap(map);

    var infowindow = new window.kakao.maps.InfoWindow({
      map: map,
      position: new window.kakao.maps.LatLng(mapy, mapx),
      content: '<p>구름이 개못생김</p>'
    });
    infowindow.open(map, marker); */

    //var latlng = new window.kakao.maps.LatLng(mapy, mapx);

    let count = 0;
    let bounds = new window.kakao.maps.LatLngBounds();

    // 장소 검색 객체를 생성합니다
    let ps = new window.kakao.maps.services.Places(map);

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(inputData[0], placesSearchCB);

    let marker;

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        displayMarker(data[0]);
        marker = new window.kakao.maps.LatLng(data[0].y, data[0].x);
        bounds.extend(marker);
        if (count < inputData.length) {
          kewwordSearch(inputData[count]);
        } else if (count == inputData.length) {
          setBounds();
        }
      }
    }

    function kewwordSearch(keword: any) {
      ps.keywordSearch(keword, placesSearchCB);
      count = count + 1;
    }

    function displayMarker(place: any) {
      var marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x)
      });
      window.kakao.maps.event.addListener(marker, 'click', function (o: any) {
        var position = marker.getPosition();
        var url = 'https://map.kakao.com/link/map/' + place.id;
        window.open(url, '_blank');
      });
    }

    function setBounds() {
      map.setBounds(bounds, 90, 30, 10, 30);
    }

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
