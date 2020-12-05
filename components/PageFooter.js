import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PageFooter() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Link href="https://rockpixel.com.br">
                            <a target="_blank" className="footer--rockpixel">
                                <Image
                                    src="/img/rockpixel-logo-negative.png"
                                    alt="Rock Pixel Marketing e Vendas"
                                    width={107}
                                    height={20}
                                    layout={'fixed'}
                                    quality={70}
                                    loading={'lazy'}
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="col-lg-12">
                        <Link href="/">
                            <a>Página inicial</a>
                        </Link>

                        <i className="fas fa-circle"></i>
                        
                        <Link href="/politica-de-privacidade">
                            <a>Política de privacidade</a>
                        </Link>

                        <i className="fas fa-circle"></i>

                        <Link href="/termos-de-uso">
                            <a>Termos de uso</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}