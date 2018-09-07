# fds11-html

## html5

- 새로운 표준
- Contents Model
![Contents Model](/md_source/brcontent-venn.png)
- [outline algorithm](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD) 
- [Web API](https://developer.mozilla.org/en-US/docs/Web/API)
- SEO - Search Engine Optimization
> 각각의 키워드를 검색을 통해 자세히 공부해보자
---

## html5 template
```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Cafe-html5,css3,웹접근성</title>
    
    <link rel="shortcut icon" href="images/common/webcafe.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
</body>
</html>
```
---

## 디자인이 아닌 컨텐츠 중심의 markup
- class naming case "main menu"
    - PC : MainMenu
    - CC : mainMenu
    - SC : main_menu
    - KC : main-menu <
> 선택은 자유, 트렌드는 있음
---

## 구조
```html
<body>
    <div class="container">
        <header class="header">header</header>
        <div class="visual">visual</div>
        <div class="main">main</div>
        <article class="slogan">slogan</article>
        <footer class="footer">footer</footer>        
    </div>
</body>
```

## CSS
- vendor prefix

## web accessbility
### ARIA (Accessible Rich Internet Applications))
- [ARIA-MDN](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)
- [ARIA-github](https://github.com/w3c/using-aria/)
- [ARIA-using](https://w3c.github.io/using-aria/#do)

---

## flex
- [flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
```css
.elem{
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
}
```

- property : order
    - flex-item 의 순서를 결정

- [float clear](http://naradesign.net/wp/2008/05/27/144/)