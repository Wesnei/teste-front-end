import BottomBar from './BottomBar';
import Information from './Information';
import NewsLetter from './NewsLetter';

export default function Footer() {
  return (
    <footer className="footer-container">
      <NewsLetter />
      <Information />
      <BottomBar />
    </footer>
  );
}
