import Head from './Head';

const publicUrl = "https://beta.zumat.ch";

export const CreateHead = ({
    title = "Zumat Interaction Designer",
    description = "Page without description",
    image = publicUrl + "/zumat_interaction-designer_matteo-subet.png",
    url = publicUrl,
    type = "website"
}) => (
    <Head>
        <meta charset="utf-8" />
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href={`${publicUrl}/logo192.png`} />
        <link rel="manifest" href={`${publicUrl}/manifest.json`} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="en_EN" />
        <meta name="twitter:card" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content={image} />
    </Head>
);