import {Menu, BookOpen} from "@styled-icons/feather";
//TODO: icon별로 출처와 이미지 노션에 공유하기. 겹치는거는 통일하고, 더 적절한거 상의.
import type {NextPage} from "next";
import {signIn, useSession} from "next-auth/react";
import React, {useCallback, useState,useEffect} from "react"
import * as S from "./index.styled";
import {Calendar} from "components/calendar"
import {Chip} from "components/chip";
import {LayoutMain} from "components/layout-main"
import {Sidebar} from "components/sidebar";

//TODO: stores/query/types 에 있는 UserData 타입으로 수정
// (followers 는 해당 유저를 팔로우하는 사용자 아이디의 배열)
export type UserInfo = {
  name : string,
  email : string,
  follwer: number,
  follwing : number,
}

const Home: NextPage = () => {
  const {data: session} = useSession();

  useEffect(() => {
    if (!session) {
      signIn();
    }
    if(session) console.log(session.user?.name,session.user?.email);
  }, [session]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name : "HongBeen Lee",
    email : "redbean-2@naver.com",
    follwer: 40,
    follwing :30
  });
  const [goalList,setGoalList] = useState(["Algorithm","Personal"]);

  const handleOpenMenu:React.MouseEventHandler = useCallback((event) => {
    setIsMenuOpen(!isMenuOpen);
  },[isMenuOpen]);

  const handleCloseMenu:React.MouseEventHandler = useCallback((event) => {
    if((event.target as HTMLElement).classList.contains("menuClose")){
      setIsMenuOpen(!isMenuOpen);
    }
  },[isMenuOpen]);

  return !session ? null : (
    <LayoutMain>
      <S.IconList>
        <S.MenuIcon onClick={handleOpenMenu}>
          <Menu />
        </S.MenuIcon>
      </S.IconList>
      <Calendar></Calendar>
      <Sidebar
        name={userInfo.name} 
        email={userInfo.email} 
        follwer={userInfo.follwer} 
        follwing={userInfo.follwing}
        isMenuOpen={isMenuOpen}
        onCloseMenu={handleCloseMenu}
        goalList={goalList}
      ></Sidebar>
      <S.Container>
        <S.Profile>
          <S.Name>{userInfo.name}</S.Name>
          <S.SecondaryName>{userInfo.email}</S.SecondaryName>
        </S.Profile>
        <S.Feed>
          <span>Feed</span>
          {goalList.map((value,index)=>(
            <Chip
              key={index}
              label={value}
              color="orange"
              icon={<BookOpen/>}
              onAdd={()=>console.log("chip clicked")}
            >
            </Chip>))}
        </S.Feed>
      </S.Container>
    </LayoutMain>
  );
};

export default Home;
