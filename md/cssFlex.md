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

```
<style>
  .box {
    float:left;
  }
  .clear-element{
    clear:both
  }
</style>
<div class='box'>box-1</div>
<div class='box'>box-2</div>
<div class='box'>box-3</div>
<div class='clear-element'>clear</div>
```