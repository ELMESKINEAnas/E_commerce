import React from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announce'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Announce></Announce>
    <Navbar></Navbar>
    <Slider></Slider>
    <Categories></Categories>
    <Products></Products>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </div>
  )
}
//array to object
// const arr = [
//   {
//     id: 1,
//     name: 'Nguyễn Văn A',
//     age: 20,
//
//   },
//   {
//     id: 2,
//     name: 'Nguyễn Văn B',
//     age: 21,
//
//   },
//   {
//     id: 3,
//     name: 'Nguyễn Văn C',
//     age: 22,
//
//   },
//   {
//     id: 4,
//     name: 'Nguyễn Văn D',
//     age: 23,
//
//   },
//   {
//     id: 5,
//     name: 'Nguyễn Văn E',
//     age: 24,
//
//   }]
// const obj = arr.reduce((acc, cur) => {
//   acc[cur.id] = cur
//   return acc
// }, {})
// console.log(obj)


export default Home