import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/40682476?s=460&u=57f3d6e5f24b52f74bf95ee4c0e9aafab0f25358&v=4" alt="Davi Freitas"/>
                        <div>
                            <strong>Pedro Chamberlain</strong>
                            <span>Cinema</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta de Cinema.
                        <br /><br />
                        Apaixonado por Godard, Jean-Marie Straub, Danièle Huillet, Pedro Costa e Cassavetes.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>

                    </footer>
                </article>
    )
}

export default TeacherItem