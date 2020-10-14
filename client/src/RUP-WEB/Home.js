import React from 'react'
import './Home.css'
import $ from 'jquery';
import Login from "./Login.js";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => {
    const navigator1=(event)=>{
        var s=$('#content1').width(); //너비
        window.scrollTo(s,0); //이건 상단메뉴 값인데 수정해줄것
    }


    //나중에 상단메뉴 height값 정해지면 sb-크기값 해주기
    const navigator2=(event)=>{
        var sb=$('#content2').height(); //높이
        var s=$('#content2').width(); //너비
        window.scrollTo(s,sb+50); //이건 상단메뉴 값인데 수정해줄것
    }

    const navigator3=(event)=>{
        var sb=$('#content3').height(); //높이
        var s=$('#content3').width(); //너비
        window.scrollTo(s,(sb+50)*2); //이건 상단메뉴 값인데 수정해줄것
    }

    const navigator4=(event)=>{
        var sb=$('#content4').height(); //높이
        var s=$('#content4').width(); //너비
        window.scrollTo(s,(sb+50)*3); //이건 상단메뉴 값인데 수정해줄것
    }

    var cnt=0; //1부터 시작해야하나..?
    var scrollEvent=true; //false로 해줘야하나?
    const scrollEvent2 =(event)=>{
        var e=event|| window.event;
        e.preventDefault();
         var m=e.originalEvent.wheelDelta; //크롬에서 마우스 휠이 올라갈땐 + 값, 내려갈땐 -값
         //리액트에서는 wheelDelta처럼 휠데이터를 얻을 수 있는 속성이 없다..
         var sb=$('#content1').height();

         if(m>1 && scrollEvent == false && cnt>=1){
            scrollEvent=true;
            cnt--;
            $('html, body').stop().animate({scrollTop:sb*(cnt-1)-60}, //한페이지의 높이값 * cnt-1로 가도록
                {duration:300, complete:function(){
                    scrollEvent=false;}
                }
            );
        }
        else if(m<1 && scrollEvent==false &&cnt<6){
            scrollEvent=true;
            cnt++;
            $('html, body').stop().animate({scrollTop:sb*(cnt-1)-60}, //cnt-1인 이유는 movie에서 menu로 갈때 값을 안바꾸게 하기 위해서!
                {duration:300, complete:function(){
                    scrollEvent=false;}
                }
            );
        }
    }
    {/*이페이지를 상단 배너로 쓰고 나중에 이름을 바꾸자 */}
    return (
        <Router>
        <div id="mainHome" >
            <ul id="bannerTop">
                <li class="topmenu" id="rogoTop">
                    <a class="menuLink" href="/">RUP</a>
                
                <ul class="submenu" id="sub1">
                    contents
                    <li class="submenu1">쉬발!!!!!!</li>
                </ul></li>

                <li class="topmenu" id="introTop">
                    <a class="menuLink" href="#">회사 소개</a>
                <ul class="submenu" id="sub2">
                    contents
                    <li class="submenu2">기업 소개</li>
                    <li class="submenu2">협력 소개</li>
                    <li class="submenu2">연혁</li>
                    <li class="submenu2">어플 다운로드</li>
                </ul></li>

                <li class="topmenu" id="registrationTop">
                    <a class="menuLink" href="#">등록</a>
                <ul class="submenu" id="sub3">
                    contents
                    <li class="submenu3">포인트 등록</li>
                    <li class="submenu3">QR코드 등록</li>
                </ul></li>

                <li class="topmenu" id="questionTop">
                    <a class="menuLink" href="#">문의</a>
                <ul class="submenu" id="sub4">
                    contents
                    <li class="submenu4">FAQ</li>
                    <li class="submenu4">Q&amp;A</li>
                    <li class="submenu4">제휴문의</li>
                    <li class="submenu4">사용자 가이드</li>
                </ul></li>

                <li class="topmenu" id="questionTop">
                    <a class="menuLink" href="#">내 정보</a>
                <ul class="submenu" id="sub5">
                    contents
                    <li class="submenu4">
                    <Link to="/Login">로그인</Link>
                         <Route path="/Login" component={Login}/>
                        </li>
                    <li class="submenu4">회원가입</li>
                    <li class="submenu4">포인트</li>
                </ul>  </li>
            </ul>

            <ul id="navigator">
                <li id="nav1" onClick={navigator1}>
                    <button>1페이지</button>
                </li>
                <li id="nav2" onClick={navigator2}>
                    <button>2페이지</button>
                </li>
                <li id="nav3" onClick={navigator3}>
                    <button>3페이지</button>
                </li>
                <li id="nav4" onClick={navigator4}>
                    <button>4페이지</button>
                </li>
            </ul>

            <div id="content1" class="scrollContent">
                content1
            </div>

            <div id="content2" class="scrollContent">
                content2
            </div>

            <div id="content3" class="scrollContent">
                content3
            </div>

            <div id="content4" class="scrollContent">
                content4
            </div>
        </div>
        </Router>
    );
};

export default Home;