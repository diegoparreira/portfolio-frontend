import React from 'react';
import { Modal as RBModal, Button, Row, Col, Image } from 'react-bootstrap';

interface AboutModalProps {
  show: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ show, onClose }) => {
  return (
    <RBModal show={show} onHide={onClose} size="xl" centered>
      <RBModal.Header closeButton className="about-modal-header">
        <RBModal.Title>Um pouco mais sobre mim...</RBModal.Title>
      </RBModal.Header>
      <RBModal.Body>
        <Row className="g-3 p-3 flex-column-reverse flex-lg-row">
          <Col md={12} lg={8} xs={12} className="px-2 modal-text">
            <p>
              <strong>Me chamo Diego de Almeida Parreira, nascido em mar/1994 🐟. </strong>
              <br />
              <br />
              <strong>
                Filho da Juceli e do Manoel, tenho uma irmã gêmea chamada Luara que é&nbsp;dentista
                🦷.
              </strong>
              <br />
              Nascido em Campinas/SP 🌆, mas atualmente morando em Limeira com a minha gatinha Frida
              🐈‍⬛ - sim, sou um ótimo "pai de pet"!
              <br />
              <br />
              <strong>Minha paixão por tecnologia 👨‍💻 começou muito cedo</strong> - sempre fui aquele
              curioso 🔍 que desmontava controles 🎮, aparelhos antigos 📻 e tudo mais só para ver
              como funcionavam.
              <br />
              <br />
              Aos 9 anos, já criava servidores para jogar MU e Tibia com amigos!{' '}
              <span style={{ textDecoration: 'line-through' }}>
                Na época liamos tutoriais em vez de ter vídeos no YouTube
              </span>
              &nbsp;📚. Nem imaginava que aquilo era programação! Um amigo ainda me ensinou HTML
              básico 💻 - meus primeiros contatos com códigos.
              <br />
              <br />
              <strong>Formação:</strong>
              <br />
              <br />
              🎓 Técnico em Administração na ETEC Bento Quirino
              <br />
              🎓 <strong>Bacharel em Sistemas de Informação pela UNICAMP</strong>
              <br />
              <br />
              <strong>Atualmente:</strong>
              <br />
              <br />
              💼 Consultor de Arquitetura de Sistemas na Accenture
              <br />
              📐 Projeto, execução e gestão de desenvolvimento
              <br />
              <br />
              <strong>Nas horas vagas:</strong>
              <br />
              <br />
              🎮 Jogador ávido de CS2
              <br />
              🎾 Tênis
              <br />
              🎸 Em busca de aprender violão
              <br />
              📚 Filosofia e literatura
              <br />
              🍽️ Explorar restaurantes e cozinhar coisas novas
              <br />
              ✈️ Viajar e criar memórias
              <br />
              💖 Tempo com pessoas queridas
              <br />
              <br />
              <br />
              Afinal, <strong>experienciar a vida</strong> 🌈 é o que me faz sentir vivo!
              <br />
              <br />
            </p>
          </Col>
          <Col md={12} lg={4} xs={12} className="d-flex flex-column align-items-center my-auto">
            <Image
              src="/profile.jpg"
              alt="Avatar"
              roundedCircle
              fluid
              className="border border-3 border-light shadow-sm mb-4 modal-avatar"
            />
            <Col className="d-flex flex-column justify-content-center align-items-center gap-2 w-100 px-2">
              <Button variant="outline-primary" size="sm" className="main-button" href="#">
                Currículo
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="main-button"
                href="/gallup34.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CliftonStrenghts
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="main-button"
                href="https://www.linkedin.com/in/diegoparreira-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="main-button"
                href="https://github.com/diegoparreira"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </Col>
          </Col>
        </Row>
      </RBModal.Body>
    </RBModal>
  );
};

export default AboutModal;
