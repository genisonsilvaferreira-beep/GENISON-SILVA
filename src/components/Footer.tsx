'use client';

import Link from 'next/link';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">PROMOS DO GS</h3>
            <p className="text-gray-400 text-sm">
              As melhores promoções da internet em um só lugar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="/coupons" className="hover:text-primary transition">
                  Cupons
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-primary transition">
                  Lojas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-primary transition">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Receba as melhores promoções no seu email.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 rounded-l-lg text-dark text-sm"
              />
              <button
                type="submit"
                className="bg-primary px-3 py-2 rounded-r-lg text-dark font-semibold hover:bg-yellow-500 transition"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 PROMOS DO GS. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
