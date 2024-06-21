import { Link } from 'react-router-dom'

const Section = ({ svg, text, link }) => {
  return (
    <Link className='flex  gap-5' to={link}>
      {svg}
      {text}
    </Link>
  )
}

export default Section