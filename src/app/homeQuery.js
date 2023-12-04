export const RESSONAR_QUERY = `
query hero {
    hero {
        heroVideo {
            video {
                streamingUrl
                thumbnailUrl
                mp4Url
            }
            url
            title
        }
        heroTittle
        heroParagraph
    }
    ressonar {
        parrafo
        titulo
        textoBoton
        imagen {
            responsiveImage(imgixParams: { w: 500, h: 300, auto: format }) {
                sizes
                src
                width
                height
                alt
                title
                base64
            }
            url
        }
    }
    allPacks {
        descripcion
        lista
        titulo
        imagen {
            responsiveImage {
                src
                title
                alt
            }
            url
        }
    }
    allClientLogos {
        logos {
            url
            responsiveImage {
                src
                title
            }
        }
    }
}
`;
