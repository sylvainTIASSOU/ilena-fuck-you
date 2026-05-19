
# Blueprint : Site Troll pour Ilem

## Vue d'ensemble

Ce document décrit le plan de développement pour un site vitrine one-page humoristique et "troll" destiné à un ami nommé Ilem. Le projet est construit avec Next.js (App Router), TypeScript, Tailwind CSS, et Framer Motion pour des animations modernes et fluides.

L'objectif est de créer une expérience utilisateur mémorable, visuellement agressive (thème sombre, néon) et remplie d'humour personnalisé, tout en respectant les meilleures pratiques de développement web moderne.

## Design et Style

*   **Palette de couleurs :**
    *   Fond principal : Noir profond (`#0a0a0a`)
    *   Accents néon : Rouge (`#ff0033`), Orange (`#ff6600`)
    *   Texte : Blanc pur (`#FFFFFF`) et gris clair (`#9ca3af`)
*   **Typographie :**
    *   Titres : Police "Satoshi" (Bold, large tracking)
    *   Corps de texte : Police "Inter" (Regular)
*   **Effets visuels :**
    *   **Glassmorphism :** Appliqué à la barre de navigation.
    *   **Texture :** Bruit subtil sur l'arrière-plan pour une sensation premium.
    *   **Ombres :** Ombres portées douces et profondes pour donner une impression de profondeur aux éléments "liftés" comme les cartes.
    *   **Animations :** omniprésentes, fluides et déclenchées au défilement (scroll) et à l'interaction (hover).

## Structure et Fonctionnalités

Le site est une single-page avec défilement fluide (smooth scroll) entre les sections.

1.  **Navbar Fixe :**
    *   Logo : "Fuck You Ilem"
    *   Liens de navigation internes : Accueil, Pourquoi toi ?, Les Preuves, Galerie, Contact.
    *   Bouton de partage qui copie le lien du site dans le presse-papiers.
    *   Apparaît avec un effet de `glassmorphism` après un léger défilement.

2.  **Hero Section :**
    *   Plein écran avec une image de fond proéminente (doigt d'honneur stylisé).
    *   Titre principal : "Ilem, Tu mérites ça."
    *   Animations : Texte apparaissant lettre par lettre, image qui pulse.

3.  **Section "Pourquoi ce site existe ?" :**
    *   Titre : "Parce que tu l'as bien cherché".
    *   Texte humoristique listant les "défauts" de Ilem.
    *   Image d'un doigt d'honneur stylisé.

4.  **Section "Les moments légendaires" :**
    *   Présente 3-4 "exploits" de Ilem sous forme de cartes.
    *   Chaque carte contient une image, un titre et une légende.
    *   Animation au survol (`hover`) : la carte tremble et une icône apparaît.

5.  **Galerie de la Honte :**
    *   Galerie d'images en grille (Masonry) responsive.
    *   Contient un mélange de photos de Ilem et d'images/memes de doigts d'honneur.
    *   Effet de `lightbox` pour afficher les images en grand au clic.
    *   Animations d'apparition en cascade (stagger) pour les images.

6.  **Section Call to Action (CTA) :**
    *   Titre : "Tu veux que ça s'arrête ?"
    *   Bouton de partage massif.
    *   Image finale d'un doigt d'honneur.

7.  **Footer :**
    *   Crédits humoristiques.
    *   Liens vers les réseaux sociaux (factices ou réels).

## Plan d'implémentation actuel

*   **Étape 1 : Initialisation et Configuration**
    *   Installer les dépendances (`framer-motion`, `react-icons`, `clsx`, `tailwind-merge`). (Terminé)
    *   Configurer `tailwind.config.ts` avec la palette de couleurs, les polices et les effets.
    *   Mettre en place les styles de base dans `app/globals.css`.

*   **Étape 2 : Création des Composants**
    *   Développer chaque section en tant que composant React distinct (`Navbar`, `Hero`, `Gallery`, etc.).
    *   Utiliser Framer Motion pour toutes les animations (`whileInView`, `variants`, `staggerChildren`).

*   **Étape 3 : Assemblage et Finalisation**
    *   Intégrer tous les composants dans la page principale `app/page.tsx`.
    *   Assurer la réactivité (responsive design) sur mobile et tablette.
    *   Optimiser les performances (Next.js Image, lazy loading).
    *   Ajouter les méta-tags SEO humoristiques.
