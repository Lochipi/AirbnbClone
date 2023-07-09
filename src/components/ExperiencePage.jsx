import React from 'react'
import { ExperienceStyled } from './styles/Experience.styled'
import Card from './Card'
import Data from '../Data'
import { Flex } from './styles/Flex.styled'


function ExperiencePage() {

    const cards = Data.map((item) => 
      <Card 
        key = {item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}  
        openSpots={item.openSpots}    
    />
    )

  return (
    <ExperienceStyled>
      <h2>Plan a trip with help from local Hosts around the world</h2>
      <Flex>
        {cards}
      </Flex>
    </ExperienceStyled>
  )
}

export default ExperiencePage
