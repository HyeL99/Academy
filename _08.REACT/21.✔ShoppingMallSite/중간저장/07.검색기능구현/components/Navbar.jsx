import React, { useState } from 'react'
import { VscAccount } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss'
import logoImage from '../assets/LOGO.png'


const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','스포츠','Sale','지속가능성'];

  const [keyword,setKeyword] = useState('');
  const navigate = useNavigate();

  const searchKeyword = (e) => {
    if(e.key === 'Enter'){  //엔터키만 눌렀을 때 반응
      let keyword = e.target.value; //js와 다름 event 안에 value가 들어있음
      console.log('keyword?',keyword);
      setKeyword('');
      navigate(`/?q=${keyword}`);  //추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
    }
  }

  return (
    <div className='navBar'>
      <div className='loginBtnWrap'>
        <div className="loginBtn">
          <VscAccount /><span>로그인</span>
        </div>
      </div>
      <h1>
        <Link to='/'>
          <img src={logoImage} alt="H&M" width={60}/>
        </Link>
      </h1>
      <nav>
        <ul className='menuList'>
          {menuList.map((menu,index) => (<li key={index}>{menu}</li>))}
        </ul>
      </nav> 
      <div className='search'>
        <FiSearch />
        <input type="text" placeholder='제품검색' value={keyword} onKeyPress={(e)=>{searchKeyword(e)}} onChange={(e)=>{setKeyword(e.target.value)}}/>
      </div>
    </div>
  )
}

export default Navbar
