# View
![fe-advanced](https://user-images.githubusercontent.com/96028495/183102827-3a53bcf0-693b-4cbd-8327-28c09a70841c.gif)

# 배포링크
http://meanjeful-codestates-fe-advanced-course.s3-website.ap-northeast-2.amazonaws.com/

## Installation
```npm run start```

## Stack
JavaScript, React, React-Router, React-Router-Dom, Axios, Tailwind CSS

## Software Requirement Specification
- 게시물 리스트와 게시물 상세 페이지
- 게시물 리스트 페이지네이션
- 게시물 조회시 Modal 표시

## 추가 구현 사항 및 구현 방법
- 페이지네이션
  - Api 호출 후 현재 선택한 페이지에 따라 필요한 데이터만 slice 하여 렌더링
- Modal
  - ReactDOM의 createPortal을 이용하여 root node의 sibling node인 modal node를 생성해 렌더링
  - State를 사용하여 modal 조건부 렌더링
