export type GalleryItem = {
    src: string;
    alt: string;
    caption: string;
};

const captions = [
    'Mode focus active',
    'Regard de champion',
    'Pause dramatique',
    'Reaction cinematique',
    'Zero stress visible',
    'Version ultra zoom',
    'Mise au point parfaite',
    'Session intense',
    'Le doigt de la victoire',
    'Ambiance bureau',
    'Code et cafe',
    'Moment legendaire',
];

export const galleryImages: GalleryItem[] = Array.from({ length: 34 }, (_, index) => {
    const id = String(index + 1).padStart(2, '0');
    return {
        src: `/images/kevin-${id}.jpeg`,
        alt: `Ilem moment ${index + 1}`,
        caption: `${captions[index % captions.length]} #${index + 1}`,
    };
});

export const heroSpotlight = [galleryImages[0], galleryImages[8], galleryImages[21]];

export const whyImage = galleryImages[33];

export const proofCards = [
    {
        title: 'Concentration sous tension',
        description: 'Le cerveau compile, le cafe aussi. Une oeuvre de patience.',
        image: galleryImages[19],
    },
    {
        title: 'Reaction hors contexte',
        description: 'Quand le bug est minuscule mais la reaction est XXL.',
        image: galleryImages[7],
    },
    {
        title: 'Niveau drama maximal',
        description: 'Le timing est parfait, la pose aussi. Aucun montage requis.',
        image: galleryImages[30],
    },
    {
        title: 'Esprit tactique',
        description: 'Plan en cours, schema mental en 4D, methode implacable.',
        image: galleryImages[11],
    },
    {
        title: 'Le trio des legends',
        description: 'Chaque frame raconte une histoire et un fou rire garanti.',
        image: galleryImages[24],
    },
    {
        title: 'Mode furtif',
        description: 'Invisible pour les deadlines, visible pour les photos.',
        image: galleryImages[32],
    },
];

export const ctaImages = [galleryImages[5], galleryImages[14], galleryImages[25], galleryImages[28]];
