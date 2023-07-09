import HeroImage from '/images/hero-img.png'
import { HeroStyled } from './styles/Hero.styled'
import { Button } from './styles/Button.styled'

function Hero() {
  return (
    <HeroStyled>
      <div className='content'>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by
          one-of-a-kind hosts—all without leaving home.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam mollitia sed non eos, nostrum corporis reprehenderit, optio cum qui eaque neque .Erecusandae dolore? Reiciendis laboriosam voluptas, repellat et adipisci quo, nihil illo, earum rerum maiores labore asperiores? Eos, in!
        </p>

        <Button bg="#ff0099" color="#fff">
          Learn More
        </Button>
      </div>

      <div>
        <img src={HeroImage} />
      </div>
    </HeroStyled>
  )
}

export default Hero
