# fds11-html

## html5

- 새로운 표준

- Contents Model
![Contents Model](/md_source/brcontent-venn.png)

- [outline algorithm](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD) 

- [Web API](https://developer.mozilla.org/en-US/docs/Web/API)

- SEO - Search Engine Optimization

- (html) tabindex="0" - html attr : 원래 탭 입력시 포커스되지 않는 영역을 포커스되도록 할 수 있는 html attr

> 각각의 키워드를 검색을 통해 자세히 공부해보자

### 디자인이 아닌 컨텐츠 중심의 markup
- class naming case "main menu"
    - PC : MainMenu
    - CC : mainMenu
    - SC : main_menu
    - KC : main-menu <
> 선택은 자유, 트렌드는 있음
---

## CSS

- vendor prefix

- (css) property : order
    - flex-item 의 순서를 결정

- (css) float을 clear하는 4가지 방법. [Link](http://naradesign.net/wp/2008/05/27/144/)

- (css) position : sticky [Link - DemoSite](http://html5-demos.appspot.com/static/css/sticky.html)

- (css) cascading selector power
    - Element : weak
    - Class : normal
    - Id Selector : powerful
    - !important 는 !important 로 밖에 재선언 안됨 (인라인스타일도 이걸 못이김 ㄷㄷ = 사용을 최대한 자제해야만 함)
    - > 선언이 구체적일수록 강려크한 파워를 가진다 (구체성 점수)

### flex
- css tricks : flex [Link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
```css
selector{
    /* default property */
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}
```

### tabindex
- html attribute
- 중립 태그 (ex/ div)를 키보드 탭 입력시 포커스 돠도록 해주는 html attribute
- tabindex=0 : noraml flow, 마크업 순서에 따라 적용된다
- tabindex= 1 이상, 숫자에 따라 문서에서 가장 먼저 포커스됨

### Reset CSS
- 여백 초기화

### Normalize CSS
- [https://github.com/necolas/normalize.css](https://github.com/necolas/normalize.css)

### html5 SHIV
- 구형 브라우저에서 지원하지 않는 태그를 자바스크립트를 통해 생성해주는 JS 라이브러리
---

## Js
- html5 `<script></script>` (defer, async...)속성 [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)
- 
- 
---

## web accessbility

### ARIA (Accessible Rich Internet Applications))
- [ARIA-MDN](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)
- [ARIA-github](https://github.com/w3c/using-aria/)
- [ARIA-using](https://w3c.github.io/using-aria/#do)
---






