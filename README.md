# TeamELK

![image](https://github.com/encore-full-stack-5/TeamELK/assets/92596263/ae2b983d-11b0-452f-92d6-0c2b33a9840a)


## 프로젝트 소개

- Welon는 음악 재생 웹 애플리케이션입니다.

- Welon는 사용자에게 노래 추천 기능 및 검색하는 서비스를 구현하였습니다.

- 또한, 사용자가 본인만의 음악을 모아들을 수 있도록 플레이리스트 서비스를 제공합니다.

- Welon는 어떤 음악을 들을지 고민하는 사용자를 위해 노래 추천 서비스를 제공합니다.

## 멤버 구성

- 김부자
  - server: User Server 구현 / User Entity 설계 / Playlist 기능 구현 / 회원가입 기능 구현
  - client: 회원 가입 페이지 구현 / 플레이리스트 페이지 구현
  - Elasticsearch: create 쿼리 작성
  
- 김세현
  - server: Playlist Table과 Music Table의 M:N 관계 설계 (**Bridge Table** 사용) / Music 기능 구현 / 로그인 구현 / Music Entity 설계
  - client: 노래 목록 페이지 / 로그인 페이지 구현
  - Elasticsearch: `_search` 쿼리 작성
  
- 김재민
  - server: Playlist Table과 Music Table의 M:N 관계 설계 (**Bridge Table** 사용) / Playlist 기능 구현 / Playlist Entity 설계 / 장르별 추천 기능 구현
  - client: 홈 화면 페이지 구현
  - Elasticsearch: Index mapping 쿼리 작성
 
- 박분도
  - server: Elasticsearch 다중 노드 연결 및 Search 기능 구현
  - client: Introduce Page 구현

## 개발 환경
- `Nest.js`
- `React`
- `Tailwindcss`
- `Elasticsearch`
- `MySQL`

## 프로젝트 선정 이유
- WaPT의 팀이 처음에 이 서비스를 개발하게 된 계기는 사슴 스택 일명 ELK Stack을 사용하기 위해 계획하였으나, ELK Stack을 사용하기 위해서는 대용량의 데이터가 필요한 점에 한계를 느꼈습니다.
- 따라서, 적은 데이터로도 검색 엔진을 사용할 수 있는 음악 웹 애플리케이션을 주제로 선정하게 되었습니다.
- 저희팀은 ELK Stack 중에 Elasticsearch를 사용하였고 자연어 처리하기 위한 Tokenizer로는 nori를 사용하였습니다.

## E-R Diagram
![image](https://github.com/encore-full-stack-5/TeamELK/assets/92596263/2d184308-fe2c-4493-8fc7-b870abaa2a3a)

</br>

## Welon 기능 흐름도
![image](https://github.com/encore-full-stack-5/TeamELK/assets/92596263/5610b54f-8c6f-4aa4-8d7a-7d91179fff8e)

</br>

## 실행 방법
- client 실행
```
npm run dev
```

- server 실행
```
npm run start:dev
```

## 느낀 점

김부자
> 안녕하세요 부자입니다.

</br>

김세현
> 안녕하세요

</br>

김재민
> 처음으로 서버를 설계하고 데이터베이스를 설계하고 맵핑하는 과정에서 하면 된다는 자신감을 얻게 되었다.</br>팀원분들이 할 수 있다고 해봐야한다고 하시면서 믿어주신 결과가 나름 좋게 나온 것 같아서 기분이 좋았다.</br>무엇보다도 이번 프로젝트를 통해서 나도 개발자로서 할 수 있겠다는 자신감을 많이 얻은 것이 가장 큰 수확이다.

</br>

박분도
> Elk 스택을 이론으로 공부할때는 어떤 느낌인지 잘 몰랐으나, 직접 쿼리를 작성하고 실행하면서, 검색 엔진의 매력적인 면을 느꼈습니다. 또한, React 프레임워크를 사용하였고, 초반에는 이해하기에 어려웠지만, 팀원들과 같이 적용하면서 React에 대해 많이 알게 되었습니다. 팀원들과의 협업을 통해 많은 경험을 했고 서버와 프론트가 어떻게 돌아가는지를 많이 배웠습니다.

