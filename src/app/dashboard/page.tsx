import React from 'react'
import Banner from './components/banner'
import Buttons from './components/buttons'
import CardList from './components/cardlist'

export default function page() {
  return (
    <div>
        <div><Banner /></div>
        <div><Buttons /> </div>
        <div><CardList /> </div>
        
    </div>
  )
}
