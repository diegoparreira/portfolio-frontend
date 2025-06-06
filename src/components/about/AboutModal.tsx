import React from 'react';
import Modal from '../common/Modal';

interface AboutModalProps {
    show: boolean;
    onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose} title="Um pouco mais sobre mim..." size="xl">
            <div className="row g-3">
                <div className="col-md-12 col-lg-8 pe-lg-3 modal-text">
                    <p><strong>Me chamo Diego de Almeida Parreira, nascido em mar/1994 🐟. </strong><br /><br /><strong>Filho da Juceli e do Manoel, tenho uma irmã gêmea chamada Luara que é&nbsp;dentista 🦷.</strong><br />Nascido em Campinas/SP 🌆, mas atualmente morando em Limeira com a minha gatinha Frida 🐈‍⬛ - sim, sou um ótimo "pai de pet"!<br /><br /><strong>Minha paixão por tecnologia 👨‍💻 começou muito cedo</strong> - sempre fui aquele curioso 🔍 que desmontava controles 🎮, aparelhos antigos 📻 e tudo mais só para ver como funcionavam.<br /><br />Aos 9 anos, já criava servidores para jogar MU e Tibia com amigos! <span style={{ textDecoration: 'line-through' }}>Na época liamos tutoriais em vez de ter vídeos no YouTube</span>&nbsp;📚. Nem imaginava que aquilo era programação! Um amigo ainda me ensinou HTML básico 💻 - meus primeiros contatos com códigos.<br /><br /><strong>Formação:</strong><br /><br />🎓 Técnico em Administração na ETEC Bento Quirino<br />🎓 <strong>Bacharel em Sistemas de Informação pela UNICAMP</strong><br /><br /><strong>Atualmente:</strong><br /><br />💼 Consultor de Arquitetura de Sistemas na Accenture<br />📐 Projeto, execução e gestão de desenvolvimento<br /><br /><strong>Nas horas vagas:</strong><br /><br />🎮 Jogador ávido de CS2<br />🎾 Tênis<br />🎸 Em busca de aprender violão<br />📚 Filosofia e literatura<br />🍽️ Explorar restaurantes e cozinhar coisas novas<br />✈️ Viajar e criar memórias<br />💖 Tempo com pessoas queridas<br /><br /><br />Afinal, <strong>experienciar a vida</strong> 🌈 é o que me faz sentir vivo!<br /><br /></p>
                </div>
                <div className="col-md-12 col-lg-4 d-flex flex-column align-items-center">
                    <img className="img-fluid border rounded-circle border-3 border-light shadow-sm d-block mx-auto mb-4 modal-avatar" src="/profile.jpg" alt="Avatar" />
                    <div className="d-flex flex-column gap-2 w-100 px-2">
                        <a className="btn btn-outline-primary btn-sm" href="#">Currículo</a>
                        <a className="btn btn-outline-primary btn-sm" href="/gallup34.pdf" target="_blank" rel="noopener noreferrer">CliftonStrenghts</a>
                        <a className="btn btn-outline-primary btn-sm" href="https://www.linkedin.com/in/diegoparreira-/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a className="btn btn-outline-primary btn-sm" href="https://github.com/diegoparreira" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AboutModal;
