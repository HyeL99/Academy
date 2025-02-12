import React from 'react'
import { VscAccount } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import './Navbar.scss'


const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','스포츠','Sale','지속가능성'];
  return (
    <div className='navbar'>
      <div className='loginBtn'>
        <VscAccount /><span>로그인</span>
      </div>
      <h1><img src="img/LOGO.png" alt="H&M" width={60}/></h1>
      <nav>
        <ul className='menuList'>
          {menuList.map((menu) => (<li>{menu}</li>))}
        </ul>
      </nav>
      <div className='search'>
        <FiSearch />
        <input type="text" placeholder='제품검색' />
      </div>
    </div>
  )
}

export default Navbar
