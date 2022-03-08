import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocuments extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        name="description"
                        content="O aplicativo Move.it foi criado no NLW#04 da Rocketsea. O objetivo do app é gamificar a técnica de Pomodoro para pessoas que passam muito tempo na frente do computador, possam realizar exercícios físicos e subirem de níveis. "
                    />
                    <meta name="robots" content="all" />
                    <link
                        rel="shortcut icon"
                        href="favicon.png"
                        type="image/png"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
