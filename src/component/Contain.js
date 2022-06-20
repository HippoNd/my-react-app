import '../App.css';
import Header from './Header';
import Table from './Table';
import React, { useState, useEffect } from 'react';
import { addProducts, editProducts, fetchProducts } from '../actions';
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Input, Form } from 'antd';
import { addProductsThunk, editProductsThunk, fetchProductsThunk } from '../redux/counterSlice';
import { actions } from '../redux/counterSaga';

function Products() {
  const [idSelected, setIdSelected] = useState(null)
  const product = useSelector(state => state.counter.product)
  const dataSelected = product.find(item => item.id === idSelected)
  const [form] = Form.useForm();

  const initialEdit =
  {
    ten: dataSelected?.ten,
    giaNhap: dataSelected?.giaNhap,
    giaBan: dataSelected?.giaBan,
    soLuongDangVe: dataSelected?.soLuongDangVe,
    soLuongCon: dataSelected?.soLuongCon,
    soLuongDaBan: dataSelected?.soLuongDaBan
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchProductsThunk()) }, [])

  const showModal = () => {
    setIsModalVisible(true);
    setIdSelected(null);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(()=>form.setFieldsValue(initialEdit),[idSelected])

  const showModalEdit = (id) => {
    setIdSelected(id);
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    if (idSelected) {
      setIsModalVisible(false);
      dispatch(editProductsThunk(idSelected,values))
    }
    else {
      setIsModalVisible(false);
      dispatch(addProductsThunk(values))
      form.resetFields()
    }
  };

  return (
    <div className="App">
      <Header showModal={showModal} />
      <Table showModalEdit={showModalEdit} />
      <Modal forceRender title={idSelected ? "Edit" : "Add"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form onFinish={onFinish} form={form} >
          <Form.Item
            label="Tên"
            name="ten"
            rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Giá nhập"
            name="giaNhap"
            rules={[{ required: true, message: 'Vui lòng nhập giá nhập !' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Giá bán"
            name="giaBan"
            rules={[{ required: true, message: 'Vui lòng nhập giá bán !' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số lượng còn"
            name="soLuongCon"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng còn !' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số lượng đã bán"
            name="soLuongDaBan"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng đã bán !' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số lượng đang về"
            name="soLuongDangVe"
            rules={[{ required: true, message: 'Vui lòng nhập số lượng đang về !' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <button type="primary" htmltype="submit" >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Products;
