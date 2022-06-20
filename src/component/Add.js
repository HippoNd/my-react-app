
import React, {useState} from 'react';
function Add(props) {
  const initialAdd = 
  {
    ten: '',
    giaNhap: '',
    giaBan: '',
    soLuongDangVe: '',
    soLuongCon: '',
    soLuongDaBan: ''
  }
  const initialEdit = {
    ten: props.dataSelected?.ten,
    giaNhap: props.dataSelected?.giaNhap,
    giaBan: props.dataSelected?.giaBan,
    soLuongDangVe: props.dataSelected?.soLuongDangVe,
    soLuongCon: props.dataSelected?.soLuongCon,
    soLuongDaBan: props.dataSelected?.soLuongDaBan,
  }
  const [inputValue, setInputValue] = useState(props.dataSelected?initialEdit:initialAdd)
 

  function onChangeInput(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value })
  }

  // function addNew () {
  //   props.OnAdd(data)
  //   setInputAddValue('')
  // }

  return (
    <div>
      <label>
        Ten:
        <input onChange={onChangeInput} name='ten' value={inputValue.ten}/>
      </label>
      <label>
        giaNhap:
        <input onChange={onChangeInput} name='giaNhap' value={inputValue.giaNhap}/>
      </label>
      <label>
        giaBan:
        <input onChange={onChangeInput} name='giaBan' value={inputValue.giaBan}/>
      </label>
      <label>
        soLuongDangVe:
        <input onChange={onChangeInput} name='soLuongDangVe' value={inputValue.soLuongDangVe}/>
      </label>
      <label>
        soLuongDaBan:
        <input onChange={onChangeInput} name='soLuongDaBan' value={inputValue.soLuongDaBan}/>
      </label>
      <label>
        soLuongCon:
        <input onChange={onChangeInput} name='soLuongCon' value={inputValue.soLuongCon}/>
      </label>
      <button onClick={()=>props.addNew(inputValue)}>{props.dataSelected?"Update":"Add"}</button>
    </div>
  )
}

export default Add
