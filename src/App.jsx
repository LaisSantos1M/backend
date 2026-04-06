import style from "./App.module.css";

import fotoPerfil from "/eu.jpg";
import FacebookIcon from "/face.avif";
import InstagramIcon from "/insta.jpg";
import linkedinIcon from "/like.avif";
import whastsappIcon from "/what.avif";


import { Card } from "./components/card";

import { useState, useEffect } from "react";

function App() {
  //Javascript
  const [dados,setDados] = useState([])

useEffect(() =>{
    fetch('/cardsInfo.json')
    .then(response => response.json())
    .then(data =>{
      setDados(data)
    })
}, [])


  const defaultPhoneNumber = "5541999200982";

  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text= 
    Nome:%20${name}
    Email:$%20${email}
    Mensagem:$%20${message}`;

    window.open(urlZap, "_blank");
  };

  return (
    <>
      <nav className={style.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">xx</a>
        <a href="#s5">Praias</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={style.s1} id="s1">
          <div className={style.left}>
            <img
              className={style.imgPerfil}
              src={fotoPerfil}
              alt="Foto perfil"
            />
          </div>  
          <div className={style.right}>
            <h2>Lais Cristina</h2>
            <p>
              Estudante do 1 ano do ensino medio, faço curso no instituto forja.{" "}
            </p>
          </div>
        </section>

        <section className={style.s2} id="s2">
          <h2 className={style.tecTitle}>TECNOLOGIAS</h2>
          <div className={style.wrapCards}>
            {dados.map((item) => {
              return(
                <div key={item.id}>
                <Card tec={item.tecnologia} image={item.imagem} text={item.texto}/>
                </div>
              )
            })}
          
          </div>
        </section>

        <section id="s3">
          <h2>sessao 3</h2>
        </section>

        <section id="s5" className={style.s5}>
          <h3>Praias 🏖️</h3>
          <h2> Pontal do parana </h2>
          <p>
            É uma praia muito tranquila não tem muitas ondas e é perfeita para
            relaxar.Nesta praia você não precisa ficar se preucupando com as
            pessoas porque é estremamente vazia KK. Recomendo muito esta praia
            se você quer descansar da correria da cidade.
          </p>
          <h2> Guarda do Embau </h2>
          <p>
            Esta praia é simpesmente encantadora. Ela tem trilhas que te levam
            ao topo de uma "pequena" montanha e la de cima é possivel ver a
            praia toda e, dependendo da epoca que você for, é possivel avistar
            baleias! A praia é limpa e organizada tem quadras com rede que podem
            ser utilizadas para diversas brincadeiras e esportes. É perfeita
            para ir com os amigos e familia.
          </p>

          <h2> Praia do Forte</h2>
          <p>
            Esta praia é localizada onde antes era um grande Forte e protegia
            aquela região, inclusive tem museu que pode ser visitado, a historia
            dali é estremamente interessante e a praia é linda.
          </p>
        </section>

        <section id="s4" className={style.s4}>
          <h2>CONTATO</h2>
          <div className={style.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Informe seu email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Informe sua mensagem</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              required
            />
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>
      </main>
      <footer className={style.rodape}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={FacebookIcon} alt="Facebook" />{" "}
        </a>
        <a
          href="https://www.instagram.com/laiss.secrets/following/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={InstagramIcon} alt="Instagram" />{" "}
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={linkedinIcon} alt="Linkedin" />{" "}
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img width={80} src={whastsappIcon} alt="WhastsApp" />{" "}
        </a>
      </footer>
    </>
  );
}

export default App;
