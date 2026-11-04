import BottomBar from './BottomBar';
import MiddleBar from './MiddleBar';
import TopBar from './TopBar';

export default function Header() {
  return (
    <header className="site-header">
      <TopBar />
      <MiddleBar />
      <BottomBar />
    </header>
  );
}
