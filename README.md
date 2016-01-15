[Ionic Framework](http://ionicframework.com/)을 활용한 모바일 애플리케이션 개발 스타터 템플릿 by [yamoo9](http://yamoo9.net).

## 사용법

스타터 템플릿은 `Ionic`, `Cordova` 설치가 요구된다. 아래 명령어를 실행해 설치 후, 스타터 템플릿을 활용한다.

```bash
$ sudo npm install -g ionic cordova
$ ionic start APP_NAME https://github.com/yamoo9/ionic-starter-greetingApp
```

템플릿으로부터 생성된 프로젝트 디렉토리 `APP_NAME`로 이동 후, 아래 명령어 실행.

```bash
$ ionic platform add ios # android
$ ionic build ios # android
$ ionic emulate ios # android
```