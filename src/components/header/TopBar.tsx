import { CreditCard, ShieldCheck, Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <ul className="top-bar-menu">
        <li className="top-bar-left-box">
          <ShieldCheck size={20} />
          <p>
            <span>Compra</span> 100% segura
          </p>
        </li>

        <li className="top-bar-center-box">
          <Truck size={20} />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </li>

        <li className="top-bar-right-box">
          <CreditCard size={20} />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </li>
      </ul>
    </div>
  );
}
