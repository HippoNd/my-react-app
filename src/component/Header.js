import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterProducts } from '../redux/counterSlice'

const Header = (props) => {
  const dispatch = useDispatch()
  const [inputValue,setInputValue]=useState('')
  const searchValue = (e) => {
    const {value} = e.target
    setInputValue(value)
  }
  const filter = () => {
    dispatch(filterProducts(inputValue))
  }
  return (
    <div className='header'>
      <div>Danh Sách Sản Phẩm</div>
      <div className='header-left'>
            <input placeholder='Tên sản phẩm' onChange={searchValue}></input>
            <button onClick={filter}>Tìm kiếm</button>
            <button onClick={props.showModal}>Add</button>
      </div>
      
      </div>
  )
}

export default Header
