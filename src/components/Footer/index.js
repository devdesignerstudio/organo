//src/componentes/Rodape/index.js

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/AluraCursosOnline/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="./img/fb.png" alt="ícone do facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/aluraonline"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/img/tw.png" alt="ícone do twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/aluraonline"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/img/ig.png" alt="ícone do instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./img/logo.png" alt="" />
      </section>
      <section>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://github.com/devdesignerstudio"
            rel="noreferrer"
            target="_blank"
          >
            DevDesignerStudio
          </a>{" "}
          no Curso Alura.
        </p>
      </section>
    </footer>
  )
}

export default Footer
