import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Holly Creek 2023</p>
      <Link to='/' className="link">Home</Link>
      <Link to='/about' className="link">About</Link>
    </footer>
  )
}

export default Footer