# 37-1st-Melon-Plate-backend

## 멜론플레이트 프로젝트 Back-end 소개

- 국내 최대 맛집 검색 포털 사이트 [망고플레이트](https://www.mangoplate.com/) 클론 프로젝트
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 프론트앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2022/9/19 ~ 2022/09/29
- 개발 인원 : 프론트엔드 4명, 백엔드 2명
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/37-1st-Melon-Plate-frontend/)

### 프로젝트 선정이유

- 이 사이트는 백엔드 기초적인 기능을 구현하기에 적합하다고 판단해서 선정했습니다.

### 데모 영상(이미지 클릭)

![image](https://user-images.githubusercontent.com/109185297/193211583-7351d3ca-4ed3-4a10-be08-7ce8659b12b2.png)

<br>

## 적용 기술 및 구현 기능

### 적용 기술
> - Front-End : HTML, CSS, REACT
> - Back-End : Nodejs, express, multer, jwt, Bcrypt, My SQL, NPM, TYPEORM, Git,Github
> - Common :  AWS(S3,RDS), RESTful API, JavaScript

### 구현 기능

#### 공통

- ERD를 활용한 database 구축

#### 메인페이지

- queryString 활용해 검색 기능 구현
- 필터, 맛집 리스트 키워드 검색 결과 제공
- column 별 오름차순, 내림 차순 구현

#### 회원가입 / 로그인

- JWT, bcrypt 를 통한 회원가입 및 로그인 로직 구축
- 회원 간 계층에 따른 차등적인 권한을 부여

#### 회원 / 가게 CRUD

- 관리자권한을 가진 유저에 대해 맛집 등록 / 수정 / 관리 페이지를 제공
- 개인회원에 대하여 프로필, 즐겨찾기 등 유저 편의 기능 제공


#### 리뷰 기능

- multer 기능 활용해 여러 장의 사진을 한 번에 받는 로직 구현
- 클라우드 서비스를 연동하여 이미지 파일을 업로드 / 관리

<br>

## Reference

- 이 프로젝트는 [망고플레이트](https://www.mangoplate.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무의 flow를 참조한 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
