import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function PageHeader(props) {
    const router = useRouter()
    let location = process.env.fullUrl

    return (
        <Head>
            <title>{props.pageTitle} | Rock Pixel Marketing e Vendas</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="content-language" content="ptb" />
            <meta name="copyright" content="Rock Pixel Marketing e Vendas" />
            <meta name="author" content="Rock Pixel Marketing e Vendas" />
            <meta name="keywords" content="whatsapp, gerador de link, gerador de link para whatsapp, marketing, venda, personalizar whatsapp, campanha, redes sociais, banner, encurtador" />
            <link href={location+router.pathname} rel="canonical" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="robots" content="index, follow" />
            <meta name="application-name" content="Gerador de link para WhatsApp" />

            <meta property="og:title" content="Gerador de link para WhatsApp" />
            <meta property="og:description" content="Gere links para seu WhatsApp, para utilizar em campanhas, banners e ações de marketing, de uma forma rápida e fácil." />
            <meta itemProp="description" content="Gere links para seu WhatsApp, para utilizar em campanhas, banners e ações de marketing, de uma forma rápida e fácil." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={location+'/img/socials-background.jpg'} />
            <meta property="og:image:secure_url" content={location+'/img/socials-background.jpg'} />
            <meta itemProp="image" content={location+'/img/socials-background.jpg'} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Gerador de link para WhatsApp" />
            <meta property="og:image:type" content="image/jpg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Gerador de link para WhatsApp" />
            <meta name="twitter:description" content="Gere links para seu WhatsApp, para utilizar em campanhas, banners e ações de marketing, de uma forma rápida e fácil." />
            <meta name="twitter:site" content="@rpixeldigital" />
            <meta name="twitter:image" content={location+'/img/socials-background.jpg'} />

            <meta property="og:url" content={location+router.pathname} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:site_name" content="Gerador de link para WhatsApp" />
            <meta itemProp="name" content="Gerador de link para WhatsApp" />
            <meta itemProp="url" content={location+router.pathname} />
            <meta property="article:publisher" content="https://www.facebook.com/rockpixeldigital" />
            <meta property="article:author" content="https://www.facebook.com/rockpixeldigital" />
            <meta property="fb:app_id" content="624605917587018" />

            <link rel="apple-touch-icon" sizes="180x180" href={location+'/favicon/apple-touch-icon.png'} />
            <link rel="icon" type="image/png" sizes="32x32" href={location+'/favicon/favicon-32x32.png'} />
            <link rel="icon" type="image/png" sizes="16x16" href={location+'/favicon/favicon-16x16.png'} />
            <link rel="manifest" href={location+'/favicon/site.webmanifest'} />
            <link rel="mask-icon" href={location+'/favicon/safari-pinned-tab.svg'} color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}