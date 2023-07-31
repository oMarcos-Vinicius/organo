import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt="logo do Facebook"/>
                </a>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/tw.png" alt="logo do Twiter"/>
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/ig.png" alt="logo do Instagram"/>
                </a>
            </div>
            <div className="footer-logo">
                <img src="/imagens/logo.png" alt="Logo do Organo"/>
            </div>
            <div className="footer-texto">
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape;