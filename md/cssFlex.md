# Css Flex(Flexible Box)
- 전체 레이아웃이 수직 구성이며 ( 위 - 아래 )로 스크롤하여 사용 한다.
- Layout 구성 - 사용하는 Elements들 - 기본적으로 Block 개념 - Display 된다.
- View에 수직(위에서 아래로) 쌓이기 때문에 수직 구성은 쉽게 만들 수 있다. 
- 수평 (왼쪽에서 오른쪽으로) 구성의 경우는 조금 다르다.
- 문제는 수평 구조를 만드는 속성이 명확하지 않았기 때문이다.
- 그래서 사용 했던 것이 <table>, float, inlin-block등으로 구성 하였다.
- 하지만 이러한 방법들은 다양한 문제를 가지고 있기 때문에 어려 움을 겪었다.
- 이제는 Flex(Flexible(융통서있는) Box)라는 명확환 개념(속성들)으로 레이아웃을 쉽게 구성 항 수 있다.

> flex는 쉬운 수직 구성도 가능 하다.

- Flex는 수평이 될 요소들의 Container에 display: flex;를 적용 한다.
```
<style>
  .box-container {
    display: flex;
  }
</style>
<div class='box-container'>
  <div class='box'>box-2</div>
  <div class='box'>box-3</div>
  <div class='box'>box-3</div>
</div>
```
- <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-base.jpg">
- Flex Container  
  - display : Flex Container를 정의
    - flex : Block 특성의 Flex Container를 정의, Block 요소와 같은 수직 쌓임.
    - inline-flex : Inline특성의 Flex Container를 정의, Inline 요소와 같은 수평 쌓임
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-display.jpg">
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-display.jpg">
  - flex-flow : flex-direction, flex-wrap의 단축 속성
    - flex-direction : Items의 주 축 (main-axis)을 설정 row
    - flex-wrap : Items의 여러 줄 묶음(줄 바꿈) 설정 nowrap
  - flex-direction : Flex Items의 주 축 (main-axis)을 설정
    - row : Items를 수평축(왼쪽에서 오른쪽으로) 표시 row
    - row-revers : Items를 row의 반대 축으로 표시
    - column : Items를 수직축(위에서 아래로) 표시
    - column-reverse : Items를 Column의 반대 축으로 표시
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg">
  - main-axis와 cross-axis
    - 값 row 는 Items를 수평축으로 표시하므로 이때는 주축이 수평이며 교차 축은 수직이 된다.
    - 값 column은 Items를 수직축으로 표시하므로 주 축은 수직이며 교차 축은 수평이 된다.
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-axis.jpg">
  - flex-start와 flex-end
    - 주 축이나 교차 죽의 시작하는 지점과 끝나는 지점을 지칭 한다.
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-start.jpg">
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-cross-start.jpg">
  - flex-warp : Flex Items의 여러 줄 묶음 (줄 바꿈) 설정
    - nowrap : 모든 Items를 여러 줄로 묶지 않음 ( 한 줄 표시 )
    - wrap : Items를 여러 줄로 묶음
    - wrap-revers : ITems를 wrap의 역 방향으로 여러 줄로 묶음
    - 기본적으로 Items는 한 줄에서만 표시되고 줄 바꿈 되지 않는다.
    - 주 축에 따라 width, height를 무시하고 한 줄 안에서만 가변 한다.
    - Items를 줄 바꿈 하려면 값으로 wrap을 사용해야 한다.
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-wrap.jpg">
  - justify-content : 주 축(main-axis)의 정렬 방법을 설정
    - flex-start : Items를 시작점으로 정렬
    - flex-end : Items를 끝점으로 정렬
    - center : Items를 가운데 정렬
    - space-between : 시작 Items은 시작점에, 마지막 Items은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬됨
    - space-around : Items을 균등한 여백으로 포함하여 정렬
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-justify-content.jpg">
  - align-content : 교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)
    - stretch : Container의 교차 축을 채우기 위해 Items을 늘림
    - flex-start : Items를 시작점으로 정렬
    - flex-end : Items를 끝점으로 정렬
    - conter : Items를 가운데 정렬
    - space-between : 시작 Items은 시작점에, 마지막 Items은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬된다.
    - space-around : Items를 균등한 여백을 포함하여 정렬
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-align-content.jpg">
  - align-items : 교차 축(cross-axis)에서 Items의 정렬 방법을 설정(1줄)
    - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-align-items.jpg">
- Flex Items 
  - order : Items의 순서를 설정 한다.
  - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-order.jpg">
  - flex : 너비 (증가, 감소, 기본)를 설정하는 단축 속성
  - flex-grow : Items의 증가 너비 비율을 설정
  - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-grow.jpg">
  - flex-shrink :Items의 감소 너비 비율을 설정
  - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-shrink.jpg">
  - flex-basis :Items의(공간 배분 전 ) 기본 너비 설정
  - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-basis.jpg">
  - align-self : 교차 축(cross-axis)에서 개별 Item의 정렬 방법을 설정합니다.
  - <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-align-self.jpg">