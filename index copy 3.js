
import MarkerClusterer from '@google/markerclustererplus';

window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5400456, lng: 126.9921017 },
    zoom: 10,
  });

  
  function clusterMarkers(map, markers) {
    const clustererOptions = { imagePath: './img/m' }
    const markerCluster = new MarkerClusterer(map, markers, clustererOptions);
  }

  loader.then(() => {
    console.log('Maps JS API loaded');
    const map = displayMap();
    const markers = addMarkers(map);
    clusterMarkers(map, markers);
  });

  const malls = [
    { label: "0", name: "인천광역시 옹진군 자월면 대이작로 159번길 127", lat: 37.174685, lng: 126.264866 },
    { label: "1", name: "인천광역시 옹진군 자월면 승봉로29번길 100-13	", lat: 37.172847, lng: 126.296375 },
    { label: "2", name: "	인천광역시 옹진군 대청면 소청동로 159", lat: 37.771331, lng: 124.760943 },
    { label: "12", name: "전라남도 여수시 진달래길 310-157(월내동)", lat: 34.847594, lng: 127.738602 },
    { label: "21", name: "인천광역시 옹진군 연평면 소연평로 161-94", lat: 37.612735, lng: 125.720386 },
    { label: "22", name: "인천광역시 옹진군 덕적면 덕적남로 771번길 103", lat: 37.230422, lng: 126.106588 },
    { label: "41", name: "강원특별자치도 춘천시 신동면 한치로 681-1", lat: 37.799514, lng: 127.683607 },
    { label: "43", name: "	경상북도 청도군 매전면 중앙로 84-460", lat: 35.634815, lng: 128.777843 },
    { label: "47", name: "충청남도 보령시 해안로 543", lat: 36.338377, lng: 126.539491 },
    { label: "48", name: "전라북도 전주시 완산구 삼산길 51-24", lat: 35.799826, lng: 127.073693 },
    { label: "49", name: "인천광역시 옹진군 북도면 시도로86번길 78", lat: 37.535558, lng: 126.431179 },
    { label: "50", name: "	인천광역시 옹진군 연평면 연평로 746-46", lat: 37.653062, lng: 125.690860 },
    { label: "51", name: "인천광역시 옹진군 자월면 자월서로 78", lat: 37.250067, lng: 126.315176 },
    { label: "52", name: "인천광역시 옹진군 백령면 백령남로72번길 356", lat: 37.957139, lng: 124.696563 },
    { label: "53", name: "인천광역시 옹진군 북도면 장봉로 678	", lat: 37.543452, lng: 126.332705 },
    { label: "54", name: "인천광역시 옹진군 영흥면 영흥남로110번길 116", lat: 37.249823, lng: 126.466749 },
    { label: "55", name: "인천광역시 옹진군 덕적면 문갑로 61", lat: 37.172496, lng: 126.107333 },
    { label: "56", name: "정보 없음", lat: 37.076451, lng: 125.944233 },
    { label: "57", name: "인천광역시 옹진군 덕적면 울도로 182번길 8-1", lat: 37.025795, lng: 125.996688 },
    { label: "58", name: "인천광역시 옹진군 대청면 대청북로 53", lat: 37.839209, lng: 124.705303 },
    { label: "60", name: "경기도 용인시 처인구 경안천로 288", lat: 37.256559, lng: 127.219845 },
    { label: "90", name: "경상북도 포항시 남구 서원재로 45", lat: 35.986793, lng: 129.389004 },
    { label: "99", name: "경기도 시흥시 뒷방울길 80", lat: 37.371656, lng: 126.757216 },
    { label: "102", name: "전라남도 보성군 보성읍 평동로 1656", lat: 34.782488, lng: 127.087098 },
    { label: "117", name: "경상북도 예천군 예천읍 원고개길 57-25", lat: 36.637818, lng: 128.461653 },
    { label: "120", name: "전라북도 김제시 봉황공단1길 200", lat: 35.772187, lng: 126.919438 },
    { label: "135", name: "	경상북도 성주군 성주읍 삼산1길 266-3", lat: 35.926517, lng: 128.310688 },
    { label: "168", name: "강원도 춘천시 신동면 한치로 681-1", lat: 37.799514, lng: 127.683607 },
    { label: "178", name: "부산광역시 연제구 고분로 222", lat: 35.183252, lng: 129.106349 }

  ];
  malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map,
    });
  });
};

// markerCluster = new markerCluster(map,markers,)