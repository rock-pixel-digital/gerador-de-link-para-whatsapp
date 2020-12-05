import React from 'react'
import { useState } from 'react'

import InputMask from "react-input-mask"
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'

import Link from 'next/link'
import Image from 'next/image'

export default function WhatsappLinkGenerator() {
    const [phone, setPhone] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [message, setMessage] = useState('')
    const [messageValue, setMessageValue] = useState('')
    const [link, setLink] = useState('')
    const [generated, setGenerated] = useState(false)
    const [errorNumber, setErrorNumber] = useState(false)
    const buttonDefaultText = 'Clique para copiar'
    const [buttonText, setButtonText] = useState(buttonDefaultText)

    if (link === '') {
        setLink('https://api.whatsapp.com/send?phone=')
    }

    if (phone === '') {
        setPhone('+55 (11) 3030-4040')
    }

    if (message === '') {
        setMessage('Este é um exemplo de mensagem que você pode enviar automaticamente ao clicar no link que você irá gerar!')
    }

    const handleNumber = (e) => {
        setPhone(e.target.value)
        setPhoneValue(e.target.value.replace(/\D/g, ""))
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
        setMessageValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (phoneValue === '') {
            setErrorNumber(true)
        } else if (phoneValue !== '' && phoneValue.length < 12) {
            setErrorNumber(true)
        }

        if (phoneValue !== '' && phoneValue.length >= 12) {
            let url = 'https://api.whatsapp.com/send?phone=' + phoneValue + '&text=' + encodeURIComponent(messageValue)
            setGenerated(true)
            setLink(url)
            setErrorNumber(false)
        } else {
            setGenerated(false)
        }
    }

    const handleNewLink = (e) => {
        e.preventDefault()
        setGenerated(false)
    }

    const beforeMaskedValueChange = (newState) => {
        let { value } = newState

        const newValue = value.replace(/\D/g, "")
        if (newValue.length === 13) {
            value = newValue.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, "+$1 ($2) $3-$4")
        }

        return {
            ...newState,
            value
        }
    }

    const copyToClipboard = (e) => {
        e.preventDefault()

        var textField = document.createElement('textarea')
        textField.innerText = link
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        setButtonText('Copiado!')
        e.target.style = 'background-color:#4FCE5D; color:#ffffff'
        setTimeout(function () {
            setButtonText(buttonDefaultText)
            e.target.style = ''
        }, 3000);
    }

    return (
        <div className="content">
            <PageHeader pageTitle="Gerador de link para WhatsApp" />

            <section id="generator">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 col-lg-5 offset-lg-1">
                            <div className="generate--content">
                                <Link href="https://rockpixel.com.br">
                                    <a target="_blank" className="generate--rockpixel">
                                        <Image
                                            src="/img/rockpixel-logo-positive.png"
                                            alt="Rock Pixel Marketing e Vendas"
                                            width={107}
                                            height={20}
                                            layout={'fixed'}
                                            quality={70}
                                            loading={'lazy'}
                                        />
                                    </a>
                                </Link>

                                <h1>Gerador de link para WhatsApp</h1>

                                {!generated && (
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className={`form--control${errorNumber ? ' error' : ''}`}>
                                            <i className={`fas fa-${errorNumber ? 'exclamation' : 'mobile-alt'}`}></i>
                                            <label htmlFor="number" className="form--label">Número do celular</label>
                                            <InputMask mask="+55 (99) 9999-99999" maskChar={null} beforeMaskedValueChange={beforeMaskedValueChange} onChange={handleNumber} defaultValue={phoneValue} >
                                                {() => <input type="tel" name="number" placeholder={phone} />}
                                            </InputMask>
                                        </div>

                                        <div className={`form--control${errorMessage ? ' error' : ''}`}>
                                            <i className={`fas fa-${errorMessage ? 'exclamation' : 'comment-dots'}`}></i>
                                            <label htmlFor="message" className="form--label">Mensagem</label>
                                            <input type="text" placeholder="Escreva o texto que deseja enviar automaticamente" name="message" className="form--input" onChange={handleMessage} defaultValue={messageValue} />
                                        </div>

                                        <button className="form--button">Gerar link</button>
                                    </form>
                                )}

                                {generated && (
                                    <form className="form" onSubmit={handleNewLink}>
                                        <div className="form--control success">
                                            <i className="fas fa-link"></i>
                                            <label htmlFor="message" className="form--label">Aqui está o seu link</label>
                                            <input type="text" placeholder="Aqui está o seu link gerado" name="link" className="form--input" defaultValue={link} />
                                        </div>

                                        <p><i className="far fa-thumbs-up"></i><strong>Pronto!</strong> Copie e compartilhe este link em seu site!</p>

                                        <button className="form--button" onClick={copyToClipboard}>{buttonText}</button>
                                        <button className="form--button" type="submit">Gerar novo link</button>
                                    </form>
                                )}
                            </div>
                        </div>

                        <div className="col-10 offset-1 col-lg-4 offset-lg-1">
                            <div className="smartphone">
                                <div className="smartphone--image">
                                    <div className="smartphone--content">
                                        <div className="smartphone--content--headerbar"></div>

                                        <div className="smartphone--content--topbar">
                                            <div className="smartphone-content--topbar--icon">
                                                <Image
                                                    src="/img/phone-user-image.png"
                                                    alt="Gerador de link para WhatsApp"
                                                    width={28}
                                                    height={28}
                                                    layout={'fixed'}
                                                    quality={70}
                                                    loading={'lazy'}
                                                />
                                            </div>
                                            <p>{phone}</p>
                                        </div>

                                        <div className="smartphone--content--message">
                                            <div className="smartphone--content--message--text">
                                                {message}
                                                <div className="smartphone--content--message--readed">
                                                    14:22 <Image src="/img/phone-message-readed.png" alt="Gerador de link para WhatsApp" width={11} height={7} layout={'fixed'} quality={70} loading={'lazy'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Image
                                        src="/img/smartphone.png"
                                        alt="Gerador de link para WhatsApp"
                                        width={1200}
                                        height={2375}
                                        layout={'responsive'}
                                        quality={70}
                                        loading={'lazy'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="text">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 col-lg-6 offset-lg-0">
                            <div className="works--text">
                                <p>O gerador de links para o WhatsApp é uma ferramenta para ações de marketing ou relacionamento.</p>
                                <p>Com o link para mensagens personalizadas do WhatsApp, você pode utilizar em suas campanhas, redes sociais, email marketing, banners e etc.</p>
                                <p>O principal benefício de personalizar links e a mensagem padrão para o WhatsApp, é que este link funcionará em computadores e também em celulares da mesma forma.</p>
                                <p>Faça bom uso da ferramenta encurtadora de WhatsApp.</p>
                            </div>
                        </div>

                        <div className="col-10 offset-1 col-lg-6 offset-lg-0">
                            <div className="works--content">
                                <h2>Como funciona</h2>

                                <ol>
                                    <li>Digite o número de telefone que deseja enviar a mensagem, com o código de DDD.<small>Ex: (11) 99109-9109</small></li>
                                    <li>Escreva a mensagem padrão que deverá ser enviada no primeiro contato. <small>Ex: Olá Empresa, quero mais informações sobre os seus serviços</small></li>
                                    <li>Clique no botão <strong>GERAR LINK</strong>.</li>
                                    <li>Copie o link e compartilhe onde desejar.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PageFooter />
        </div>
    )
}