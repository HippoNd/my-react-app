
import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { deleteProducts } from '../actions';
import { deleteProductsThunk } from '../redux/counterSlice';
const TableData = (props) => {
  const dispatch = useDispatch()
  const product = useSelector(state=>state.counter.product.filter(item=>item.ten.toLowerCase().includes(state.counter.filter.toLowerCase())))
  const dataSource = product.map(function(item,index){
    return {
      key: index,
      id: item.id,
      ten: item.ten,
      giaNhap: item.giaNhap,
      giaBan: item.giaBan,
      soLuongDangVe: item.soLuongDangVe,
      soLuongDaBan: item.soLuongDaBan,
      soLuongCon: item.soLuongCon,
    }
  })
  const onDelete = (record) => {
    dispatch(deleteProductsThunk(record.id))
  }
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: 'Tên',
      dataIndex: 'ten',
      key: 'T',
    },
    {
      title: 'Giá Nhập',
      dataIndex: 'giaNhap',
      key: 'GN',
    },
    {
      title: 'Giá Bán',
      dataIndex: 'giaBan',
      key: 'GB',
    },
    {
      title: 'SL Đang Về',
      dataIndex: 'soLuongDangVe',
      key: 'SLDV',
    },
    {
      title: 'SL Còn',
      dataIndex: 'soLuongCon',
      key: 'SLC',
    },
    {
      title: 'SL Đã Bán',
      dataIndex: 'soLuongDaBan',
      key: 'SLDB',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button onClick={()=>props.showModalEdit(record.id)}>Edit</button>
          <button onClick={()=>onDelete(record)}>Delete</button>
        </Space>
      ),
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default TableData
