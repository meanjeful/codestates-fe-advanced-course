# View
![fe-advanced](https://user-images.githubusercontent.com/96028495/183102827-3a53bcf0-693b-4cbd-8327-28c09a70841c.gif)

# 배포링크
http://meanjeful-codestates-fe-advanced-course.s3-website.ap-northeast-2.amazonaws.com/

## Installation
```npm run start```

## Stack
<p>
  <img alt="javascript" src ="https://img.shields.io/badge/common-javascript-f39c12?style=for-the-badge&logo=JavaScript"/>
</p>
<p>
  <img alt="git" src ="https://img.shields.io/badge/common-git-f39c12?style=for-the-badge&logo=git"/>
</p>
<p>
  <img alt="axios" src ="https://img.shields.io/badge/common-axios-f39c12?style=for-the-badge&logo=axios"/>
</p>
<p>
  <img alt="react" src ="https://img.shields.io/badge/front-react-C0392B?style=for-the-badge&logo=React"/>
</p>
<p>
  <img alt="react-router-dom" src ="https://img.shields.io/badge/front-react router dom-C0392B?style=for-the-badge&logo=React Router"/>
</p>

<p>
<img src="https://img.shields.io/badge/front-tailwind css-C0392B?style=for-the-badge&logo=Tailwind CSS&logoColor=#06B6D4"/>
</p>

<p>
  <img alt="s3" src ="https://img.shields.io/badge/deploy-s3-27AE60?style=for-the-badge&logo=Amazon AWS"/>
</p>

## Software Requirement Specification
- 게시물 리스트와 게시물 상세 페이지
- 게시물 리스트 페이지네이션
- 게시물 조회시 Modal 표시

## 추가 구현 사항 및 구현 방법
- 페이지네이션
  - Api 호출 후 데이터를 현재 선택한 페이지에 따라 slice 하여 렌더링
- Modal
  - ReactDOM의 createPortal을 이용하여 root node의 sibling node인 modal node를 생성해 렌더링
  - modal 렌더링 여부를 state로 관리하여 modal 조건부 렌더링

## 느낀점
```
일정상 가용 시간이 적어 처음에는 시간안에 완성할 수 있을까 두려움이 생겼다.
10시간을 한시간 단위로 시간을 쪼개서 태스크 관리를 하며 처음에 계획했던 기능 구현을 포기하기도 하며, 마침내 완성했다.
진행했던 프로젝트에 비해서 엄청나게 작은 과제이지만, 오랜만에 시간에 쫓겨가며 재미있는 개발을 했다는 느낌이 든다.
개인적으로 디자이너와 소통하는 느낌이 들어서, 프로토타입을 기반으로 개발을 하는 것을 좋아하는데
시간상 프로토타입을 제작하지 못한 것과 성능 최적화에 대한 고민을 깊게 하지 못한 것이 아쉽다.
```
