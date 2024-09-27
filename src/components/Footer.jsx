import '../css/Footer.css'; // Importando o CSS para estilização

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="/home">Início</a></li>
                        <li><a href="/about">Sobre Nós</a></li>
                        <li><a href="/catalog">Catálogo</a></li>
                        <li><a href="/contact">Contato</a></li>
                        <li><a href="/privacy">Política de Privacidade</a></li>
                    </ul>
                </nav>
                <div className="footer-info">
                    <p>&copy; 2024 Loja de Músicas. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
