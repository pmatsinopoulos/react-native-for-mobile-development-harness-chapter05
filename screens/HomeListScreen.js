import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import HomeItem from '../components/HomeItem.js'

const MOCK_DATA = [
  { name: 'Mr. Johns Conch house', address: '12th  Street, Neverland', images: 'http://hmp.me/ol5' },
  { name: 'Mr. Johns Conch 2 house', address: '13th  Street, Neverland', images: 'http://hmp.me/ol6' },
  { name: 'Mr. Johns Conch 3 house', address: '14th  Street, Neverland', images: 'http://hmp.me/ol7' },
  { name: 'Mr. Johns Conch 4 house', address: '15th  Street, Neverland', images: 'http://hmp.me/ol8' },
  { name: 'Mr. Johns Conch 5 house', address: '16th  Street, Neverland', images: 'http://hmp.me/ol9' },
  { name: 'Mr. Johns Conch 6 house', address: '17th  Street, Neverland', images: 'http://hmp.me/ol5' },
  { name: 'Mr. Johns Conch 7 house', address: '18th  Street, Neverland', images: 'http://hmp.me/ol6' },
  { name: 'Mr. Johns Conch 8 house', address: '19th  Street, Neverland', images: 'http://hmp.me/ol7' },
  { name: 'Mr. Johns Conch 9 house', address: '20th  Street, Neverland', images: 'http://hmp.me/ol8' },
  { name: 'Mr. Johns Conch 10 house', address: '21th  Street, Neverland', images: 'http://hmp.me/ol9' },
  { name: 'Mr. Johns Conch 11 house', address: '21th  Street, Neverland', images: 'http://hmp.me/ol9' },
  { name: 'Mr. Johns Conch 12 house', address: '21th  Street, Neverland', images: 'http://hmp.me/ol9' },
  { name: 'Mr. Johns Conch 13 house', address: '21th  Street, Neverland', images: 'http://hmp.me/ol9' },
  { name: 'Mr. Johns Conch 14 house', address: '21th  Street, Neverland', images: 'http://hmp.me/ol9' },
  { name: 'Mr. Johns Conch 15 house', address: '21th  Street, Neverland', images: 'http://hmp.me/ol9' },
]

const HomeListScreen = () => {
  return (
    <FlatList data={MOCK_DATA} renderItem={({item}) => <HomeItem {...item}/>} keyExtractor={(item, index) => index.toString()}/>
  )
}

export default HomeListScreen