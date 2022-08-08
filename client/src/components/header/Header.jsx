import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles"> 
            <span className='headerTitleSm'> React & Node </span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://res.cloudinary.com/avomeraydin/image/upload/v1605345592/samples/landscapes/beach-boat.jpg" alt="" />
    </div>
  )
}
