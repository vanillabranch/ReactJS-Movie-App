#ReactJS-Movie-App


>01.ReactJS Practice
-> 02.React-for-beginner
-> 03.ReactJS To Do List :)
-> 04.ReactJS-Coin-Tracker
-> 05.ReactJS-Movie-App



# 1. 리액트js 샘플 웹 시작하기.

1.node.js 사이트가서 다운.  (nodejs.org)<br>
   설치하고 윈도우 커맨드에서 node -v 있는지 체크.<br>
<br>
2.npx체크하기<br>
   cmd에서 npx -v 해서 버전나오면 설치성공<br>
<br>
3.샘플 프로젝트 생성<br>
   cmd에서 npx create-react-app 내프로젝트명<br> 
    (위치시킬 경로로 셋팅해야함. cd c:\users\desktop...처럼)<br>
<br>
4.개발툴에서 다운받아진 샘플 프로젝트를 열고나서 터미널에서 npm start를 해서 개발서버를 오픈<br>
   ( 개발툴 웹스톰에서 진행했음)<br>
<br>
5.그리고 소스트리에서 public에 index.html과, src안에 index.js파일등 소스 한번 둘러보자<br>
<br>
6.소스 파일 아무거나 수정해서 오토리로드 되는지도 보자 <br>
(서버가 올라왔으면 브라우저가 하나 떠있을거임)<br>
<br>
7.완전 바닥부터 시작하기 위해, 기초작업 해주기<br>
   index.js 파일 에서 ↓<br>
   import React from 'react';<br>
   import ReactDOM from 'react-dom';<br>
   import App from './App';<br>
<br>
ReactDOM.render(<br>
<React.StrictMode><br>
<App /><br>
</React.StrictMode>,<br>
document.getElementById('root')<br>
);<br>
↑ 이것만 남기고 다지우기<br>
<br>
8.app.js파일에서도 위에 import다 제거(logo랑 css)<br>
   그리고 리턴안에 div 기본태그 하나만 두기<br>
   <br>
9.마지막으로 바닥부터 시작할거기 때문에 아래 파일들 다 삭제<br>
   App.test.js<br>
   App.css<br>
   index.css<br>
   logo.svg<br>
   reportWebVitals.js<br>
   setupTests.js<br>
   <br>
10.index.js랑 app.js만 남겨두기. 바닥부터 시작할 리액트앱의 초기설정 끝<br>
    <br>
※파일 날려버리고 수정 중간에 오류날수 있음.  <br>
그땐 브라우저 새로고침이나 npm restart 할것.<br>
    <br>
------------------------------------------------------------------------

# 2. 만들어진 프로젝트 git으로 보내기<br>

1.먼저 git저장소에 가서 new repository 하나 만들기.<br>
   readme.md추가 없이 그냥 단순하게 레파지토리 이름과 설명정도만 입력해서 생성<br>
<br>
2.생성이 완료되면 git 설정하는 설명 나오는데 다 무시하고 거기서 주소만 복사<br>
   (이렇게 생긴 주소 https://github.com/vanillabranch/react-for-beginners.git)<br>
<br>
3.그 다음 개발툴로 와서 (웹스톰 사용했음) 터미널에서 아래 명령어들 순차적으로 실행.<br>
<br>
4.git init<br>
<br>
5.git remote add origin https://github.com/vanillabranch/movie_app_2021.git<br>
<br>
6.git add .   <- 끝에 쩜 필수<br>
<br>
7.git commit -m "commit message 적고싶은대로"
<br>
8.git push origin master
<br>
9.여기까지 한 다음, 내 레파지토리로 가면 성공적으로 올라온것을 볼수 있음.
<br>
10.이후 소스 수정할때마다, 6번부터 8번을 반복해주면 수정내용들을 꾸준히 커밋&푸시할수 있다.
<br>
11.하지만 이건 새로운 브랜치를 따지 않고, 머지도 없고, 컨플릭트도 없는 <br>
단독으로 혼자서 할때나 가능한 얘기다.<br>
협업프로젝트시엔 git에 올리는 거 이후, 신규 브랜치, 머지, 컨플릭트 발생 처리등 <br>
다양하게 익혀야 한다.<br>
<br>
※참고로 git에서 올려버렸거나, 다른 팀원이 올린건 최신으로 받기 위해선, <br>
git pull origin master 하면 된다.<br>
<br>

------------------------------------------------------------------------

<br>

# 3.PropType 설치방법(값이 할당되어야 할 타입과 필수여부 등 지정하기 위함.)<br>
터미널 열고 npm i prop-types입력.<br>
만약 오류나면, npm audit fix 를 한다, (보통 오류 보정을 위한 코드가 제시됨)<br>
<br>

------------------------------------------------------------------------

# 4.리액트 라우터 설치<br>
터미널 열고 npm install react-router-dom<br>
만약 오류나면, npm audit fix 를 한다, (보통 오류 보정을 위한 코드가 제시됨)<br>
<br>

------------------------------------------------------------------------

# 5. github에 배포하기<br>
<br>
※내가 만든 프로젝트를 URL까지 달아서 배포해주는 깃허브 페이지 서비스를 이용하기.<br>
<br>

(1) 먼저 터미널에서 아래 명령어를 입력하여 설치<br>
npm i gh-pages<br>

<br>
(2) package.json 수정<br>
package.json파일에 보면, scripts영역에 build가 있다.<br>
이 명령어를 터미널에서 아래와 같이 입력 후 실행하면 production ready code를 생성한다.<br>
npm run build<br>
여기서 production ready code란 코드가 압축되고 소스 모든게 최적화 된다는 의미다.<br>
<br>

(3) 빌드 완료 후<br>
빌드가 완료되면 폴더 트리에 빌드 폴더가 생긴다. -> 코드가 압축된것을 의미하는데,<br>
이 소스들을 보면 내가 코딩한것과 다르게 이상하게 변환된 모습을 볼 수 있는데,<br>
이것이 바로 브라우저가 이해할수 있는 코드라고 할수 있다.(최적화 된 코드)<br>
(빌드가 끝나면 나오는결과물.)<br>

<br>
(4) 다시 package.json파일로 이동<br>
파일의 맨 밑에 아래 콤마를 포함한 구문을 추가한다<br>
, "homepage":"https://계정명.github.io/레파지토리 이름"<br>

※만약 레포지토리 이름을 모른다면? 터미널에서 git remote -v 를 입력하면 확인할 수 있다.<br>

그리고 다시 package.json의  scripts영역으로 가서 하나를 추가한다.<br>
바로 "deploy"<br>
<br>
이 명령어는 우리가 방금 설치한 gh-pages를 실행시키고<br>
"npm run build"를 수행 후 생성된 "build"라는 디렉토리를 가져가는것을 의미한다.<br>
추가할 구문 =>  "deploy" : "gh-pages -d build"<br>
<br>
하지만, deploy하기 전에 npm run build를 굳이 한번더 하기 싫으니,  <br>
deploy명령을 하면 미리 실행하는 predeploy도 추가한다.<br>
추가할 구문 => "predeploy" : "npm run build"<br>
<br>
제대로 동작하는지 확인하고 싶다면, 2번에서 수행한 run npm build를 삭제해보자.<br>
그리고 npm run deploy 실행한다.(최종 실행 명령어)<br>
<br>

>그럼 predeploy명령이 먼저 실행될것이고, 아래 명령이 수행되는것을 의미한다.
npm run build

>그럼 2번에서 수행한 build폴더가 만들어지고, deploy명령인 gh-pages -d build가 실행된다.
이후, gh-pages가 package.json에 homepage라는 이름으로 정의한 url에 업로드 될것이다.

마지막으로 위에서 실행한 npm run deploy 명령이 성공적으로 끝나면서 <br>
published라는 결과메세지가 도착하면 "homepage"에 정의한 홈페이지로 <br>
이동해서 확인해보자(2분정도 걸림) 배포 끝!<br>
