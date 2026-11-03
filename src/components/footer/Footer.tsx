import NewsLetter from './NewsLetter'
import Information from './Information'
import BottomBar from './BottomBar'

export default function Footer() {
  return (
	<footer className='footer-container'>
		<NewsLetter />
		<Information />
		<BottomBar />
	</footer>
  )
}
