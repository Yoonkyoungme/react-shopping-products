# react-shopping-products

### 기능 요구 사항

- [x] 상품 목록 조회
  - [x] 상품 목록 데이터를 가져온다.
    - [x] 커스텀 훅을 사용해서 데이터 가져오기 -> 상품 목록 페이지에서 호출 -> props 로 전달
    - [x] 맨 처음 불러 오는 갯수는 20개
    - [x] 이후에는 무한스크롤을 사용하여 상품 목록을 추가한다.
      - [x] Intersection Observer API 사용
      - [x] 추가되는 데이터는 4개씩이다.
- [x] 상품 정렬 및 필터링
  - [x] 정렬 (ul tag)
    - [x] 낮은 가격 순
    - [x] 높은 가격 순
  - [x] 필터링 (ul tag)
    - [x] 전체
    - [x] 카테고리
      - [x] fashion
      - [x] beverage
      - [x] electronics
      - [x] kitchen
      - [x] fitness
      - [x] books
- [x] 상품 장바구니 담기
  - [x] 장바구니 아이콘
    - [x] 추가시 1씩 숫자 증가
    - [x] 텅 빈 장바구니일 시 숫자 파트 없음
  - [x] 담기 버튼 클릭 시 장바구니에 추가
    - [x] 장바구니 추가 API 연결
    - [x] 추가 시 장바구니 아이템 '종류' 의 갯수로 숫자를 표시
  - [x] 장바구니 담기 요청 중 에러가 발생시, 에러 메시지를 사용자에게 알려주는 UI를 표시
  - [x] 빼기 버튼 클릭 시 장바구니에서 삭제
    - [x] 장바구니 삭제 API 연결
    - [x] 빼기 시 장바구니 아이템 '종류' 의 갯수로 숫자를 표시

### MSW 테스트

- [x] 상품 목록 조회 테스트
  - [x] MSW를 이용하여 /products API를 모킹
  - [x] 페이지네이션 테스트
    - [x] MSW를 이용하여 페이지별 받아오는 데이터 개수 확인
  - [x] 로딩 상태 테스트
    - [x] 상품 목록 조회 중 로딩 상태
    - [x] 추가 데이터 목록 조회 중 로딩 상태
  - [x] 에러 상태 테스트
    - [x] 상품 목록 조회 중 에러 발생시 에러 상태
  - [x] 마지막 페이지일 시 더 이상 조회되지 않은지 확인
- [x] 상품 정렬 및 필터링 테스트
  - [x] 정렬 상태 테스트
  - [x] 필터링 상태 테스트
- [x] 상품 장바구니 상태 테스트
  - [x] 담기 기능 작동 테스트
    - [x] MSW를 이용하여 /cart-items API를 모킹
  - [x] 빼기 기능 작동 테스트
    - [x] MSW를 이용하여 /cart-items{id} API를 모킹
