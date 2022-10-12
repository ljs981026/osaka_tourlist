var getRouteList = new Array();

//번호, 이름, 위도, 경도, 주소, 입장료
getRouteList = [
  [
    "1",
    "유니버설 스튜디오 재팬",
    "34.66559199383723",
    "135.43240257101186",
    "554-0031 오사카부 고노하나구 사쿠라지마 2-1-33",
    "67000",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003921405_1WQZMWN7N.jpg/fb276_50_i1.jpg?type=w540_fst&type=f520_288_travelsearch",
    "0",
  ],
  [
    "2",
    "가이유칸",
    "34.65470351552128",
    "135.42893231139468",
    "552-0022 오사카부 오사카시 미나토구 카이간도리 1가 1-10",
    "23000",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/0d/dc/f5/be/caption.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "3",
    "오사카 성",
    "34.68534499766244",
    "135.52570700586224",
    "540-0002 오사카부 오사카시 주오구 오사카성",
    "5900",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003152074_XQEQWWM1X.jpg/fb276_36_i1.jpg?type=w540_fst&type=w800_travelsearch",
    "0",
  ],
  [
    "4",
    "아베노 하루카스",
    "34.64614657913103",
    "135.51350575066536",
    "545-6016 오사카부 오사카시 아베노구 아베노스지 1가 1-43",
    "9900",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/1b/53/0f/fc/photo0jpg.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "5",
    "덴포잔 대관람차",
    "34.6564009598626",
    "135.43095516906425",
    "552-0022 오사카부 오사카시 미나토구 카이간도리 1가 1-10",
    "7900",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/daodao/photo-o/10/9b/fc/b8/caption.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "6",
    "쓰텐가쿠",
    "34.65263664496603",
    "135.50632038440375",
    "556-0002 오사카부 오사카시 나니와구 에미스 히가시1쵸메 18-6",
    "7900",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/19/e6/a4/08/photo0jpg.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "7",
    "신세카이 혼도리 상점가",
    "34.65164048678843",
    "135.50590529789895",
    "556-0002 오사카부 오사카시 나니와구 에미스 히가시2쵸메",
    "무료",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003514278_IS9F42VCH.jpg/fb276_42_i1.jpg?type=w540_fst&type=w800_travelsearch",
    "0",
  ],
  [
    "8",
    "덴노지 동물원",
    "34.65059971359427",
    "135.5086110690641",
    "543-0063 오사카부 오사카시 텐노지구 다우스야마초 1-108",
    "4400",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003534533_Q6K6W3VWW.jpg/fb276_43_i1.jpg?type=w540_fst&type=w800_travelsearch",
    "0",
  ],
  [
    "9",
    "하루카스 300 전망대",
    "34.64642092306506",
    "135.5132983690642",
    "545-0052 오사카부 오사카시 아베노구 아베노스지 1가 1-43",
    "5000",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003641035_ZNBRH06B8.jpg/fb276_45_i1.jpg?type=w540_fst&type=w800_travelsearch",
    "0",
  ],
  [
    "10",
    "도톤보리 글리코 간판",
    "34.669039149200984",
    "135.50106700829133",
    "542-0071 오사카부 오사카시 주오구 도톤보리 1가 10-3",
    "무료",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003743372_LPAL3X0SY.jpg/fb276_46_i1.jpg?type=w540_fst&type=m1500_travelsearch",
    "0",
  ],
  [
    "11",
    "오사카 성 니시노마루 정원",
    "34.686939677226235",
    "135.52343476906464",
    "540-0002 오사카부 오사카시 주오구 오사카성 2",
    "무료",
    "https://search.pstatic.net/common?src=https://dbscthumb-phinf.pstatic.net/5885_000_10/20201112003256422_IT05QRE7C.jpg/fb276_38_i1.jpg?type=w540_fst&type=m1500_travelsearch",
    "0",
  ],
  [
    "12",
    "신사이바시스지 상점가",
    "34.67112355504902",
    "135.5013373978994",
    "542-0085 오사카부 오사카시 주오구 신사이바시스지 2가 2-22",
    "무료",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/0b/86/90/a2/caption.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "13",
    "오사카 구로몬 시장",
    "34.665488045344254",
    "135.50621516906455",
    "542-0073 오사카부 오사카시 주오구 니혼바시 2가",
    "무료",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/13/e6/70/0b/20180707-110958-largejpg.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "14",
    "우메다 공중정원 전망대",
    "34.705495921944916",
    "135.49051444023024",
    "531-6039 오사카부 오사카시 기타구 오요도나카 1가 1-88 우메다 스카이 빌딩",
    "7800",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/0a/cc/e0/28/caption.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "15",
    "헵 파이브 관람차",
    "34.70390228271293",
    "135.49992956906522",
    "530-0017 오사카부 오사카시 기타구 카쿠다초 5-15 HEP FIVE 7F",
    "5900",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/0f/37/d6/cf/from-below.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "16",
    "오사카 시텐노지",
    "34.65461969082572",
    "135.51651994450322",
    "543-0051 오사카부 오사카시 텐노지구 시텐노지 1-11-18",
    "16000",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/10/f7/5d/75/photo3jpg.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "17",
    "오사카 주택 박물관",
    "34.710492702824816",
    "135.51162130651105",
    "530-0041 오사카부 오사카시 기타구 텐진바시 6가 4-20",
    "4000",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/12/3b/56/24/photo1jpg.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "18",
    "스미요시 타이샤",
    "34.61242250939514",
    "135.49376393457328",
    "558-0045 오사카부 오사카시 스미요시구 스미요시 2가 9-89",
    "무료",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/1b/bb/dd/a9/photo4jpg.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "19",
    "오사카 역사 박물관",
    "34.6827333952803",
    "135.52081392673455",
    "540-0008 오사카부 오사카시 주오구 오테마에 4초메 1-32",
    "6000",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/0f/d2/95/c4/osaka-museum-of-history.jpg&type=w800_travelsearch",
    "0",
  ],
  [
    "20",
    "그랜드 프론트 오사카",
    "34.70407953859905",
    "135.4949055804236",
    "530-0011 오사카부 오사카시 기타구 오후카마치 4-20",
    "무료",
    "https://search.pstatic.net/common?src=http://media-cdn.tripadvisor.com/media/photo-o/15/2d/e5/b5/grand-front-osaka.jpg&type=w800_travelsearch",
    "0",
  ],
];
