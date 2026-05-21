# Blueprint : Projet Ilem (Cyber-Troll Deluxe)

## Vue d'ensemble
Ce projet est un site vitrine one-page humoristique et "troll" dédié à un ami, Ilem. L'objectif est de refondre entièrement l'application pour adopter une interface **ultra-moderne, fluide, épurée et futuriste (Cyberpunk / HUD-Style)**, du header au footer, en s'appuyant sur des composants structurés façon **Shadcn UI** et des animations de pointe avec Framer Motion.

Le site exploite un thème sombre profond ("Deep Space") ponctué de lueurs néon (Cyan et Rose/Violet) et d'effets de cartes "glassmorphism" avec bordures lumineuses réactives.

---

## Design et Système Visuel (Aesthetics)

### 1. Palette de Couleurs & Thème
*   **Fond principal (Background) :** Noir sidéral profond `#030308` avec des dégradés radiaux lumineux (Glows) :
    *   Accent Bleu Cyber / Cyan : `#00f0ff` (ou `var(--cyan)`)
    *   Accent Violet / Rose Néon : `#d946ef` / `#f43f5e` (ou `var(--pink)`)
*   **Surfaces & Cartes :** `rgba(10, 10, 18, 0.6)` avec un flou d'arrière-plan (`backdrop-blur-xl`) et des bordures semi-transparentes réactives.
*   **Texte :**
    *   Titres : Blanc pur `#ffffff` et gradients cyber.
    *   Corps : Gris argenté `#94a3b8` / `#cbd5e1` (Satoshi).

### 2. Typographie
*   **Titres & HUD :** `Clash Display` (Police géométrique bold à fort impact) avec styles typographiques futuristes (lettrage espacé, majuscules, code monospace).
*   **Corps de texte :** `Satoshi` (Sleek sans-serif).

### 3. Effets Spéciaux & Micro-Interactions
*   **Cyber Grid Background :** Grille numérique animée flottant subtilement en arrière-plan.
*   **Curseur Interactif :** Version futuriste améliorée du curseur doigt d'honneur, avec un halo de ciblage (crosshair) et des effets réactifs lors du survol de boutons ou de liens.
*   **Scanlines & Glitch :** Effets de balayage cathodique rétro-futuristes subtils sur les images et les titres en hover.
*   **Audio FX (Optionnel) :** Effets sonores d'activation futuristes (clics, transitions de tabs) désactivables via un contrôleur audio dans la barre de navigation.

---

## Composants Shadcn UI Personnalisés (dans `components/ui/`)
Nous allons implémenter à la main des composants inspirés de Shadcn UI, adaptés à notre charte graphique Tailwind v4 :
1.  **Button (`button.tsx`)** : Boutons HUD avec variantes néon (glow, contour cyber, particules au hover).
2.  **Dialog / Lightbox (`dialog.tsx`)** : Fenêtre modale avec flou d'arrière-plan profond et animation d'ouverture holographique pour la galerie.
3.  **Tabs (`tabs.tsx`)** : Commutateur de profil avec animations de glissement sous le bouton sélectionné.
4.  **Card (`card.tsx`)** : Conteneurs glassmorphism avec bordures lumineuses (gradient borders).
5.  **Badge (`badge.tsx`)** : Badges HUD de niveau de menace ou statut de dossier.
6.  **Tooltip (`tooltip.tsx`)** : Infobulles pour décoder les secrets d'Ilem.

---

## Structure de la Refonte

### 1. Navigation HUD (Header)
*   **Design** : Barre de navigation flottante, suspendue comme une visière HUD. Elle intègre :
    *   Logo de sécurité ou insigne "ILEM-OS v2.0".
    *   Indicateur de progression de défilement (laser néon).
    *   Bouton de partage sécurisé (copie d'adresse et animation de transfert).
    *   Contrôle audio cybernétique (sound toggle).

### 2. Hero Section (Dossier Anonyme)
*   **Structure** :
    *   Titre avec effet glitch de texte : "PROJET: ILEM // DOSSIER CLASSÉ TOP SECRET".
    *   Widget "Statistiques Vitales" : Taux de flemme, photos compromises, etc.
    *   Carousel 3D / Spotlight holographique des 3 photos phares.

### 3. Pourquoi ce Site (Diagnostic de Comportement)
*   Refonte sous forme de **Terminal de diagnostic**.
*   Utilisation de **Shadcn Tabs** : "DOSSIER", "ANOMALIES", "PROTOCOLE".
*   Rendu visuel dynamique simulant une analyse de système informatique.

### 4. Les Preuves (Dossiers Anomalie)
*   Cartes 3D interactives imitant des dossiers de preuve ou fiches d'analyse de cible.
*   Metadata HUD (Niveau de danger, Horodatage, Code d'erreur).
*   Overlay de scan au survol de la carte.

### 5. Galerie Interactive (La Chambre des Archives)
*   Système de filtres par catégories d'anomalies (ex. "Focus", "Sommeil", "Rire").
*   Lightbox holographique ultra-fluide avec zoom et détails de l'image.

### 6. CTA (Propagation du Virus)
*   Terminal de commande interactif simulant une propagation réseau.
*   Boutons d'action pour partager sur WhatsApp, Twitter, Facebook et copier le lien avec retours visuels futuristes.

### 7. Footer (Fin de Session)
*   Rapport de diagnostic final du système.
*   Signature cybernétique.

---

## Plan d'implémentation détaillé

*   **Étape 1 : Création des composants de base Shadcn UI**
    *   Créer `@/components/ui/button.tsx`
    *   Créer `@/components/ui/card.tsx`
    *   Créer `@/components/ui/tabs.tsx`
    *   Créer `@/components/ui/dialog.tsx`
    *   Créer `@/components/ui/badge.tsx`
*   **Étape 2 : Configuration du Thème Futuriste Sombre**
    *   Modifier `app/globals.css` pour définir le thème sombre et les variables néons.
    *   Mettre à jour la grille de fond animée et le curseur HUD.
*   **Étape 3 : Refonte des sections de la page**
    *   Refondre `components/Navbar.tsx` (Navbar HUD + Contrôle Audio).
    *   Refondre `components/Hero.tsx` (Widget Stats + Hologram Spotlights).
    *   Refondre `components/Pourquoi.tsx` (Terminal Tabs).
    *   Refondre `components/Preuves.tsx` (Cartes 3D HUD).
    *   Refondre `components/Galerie.tsx` (Filtres + Dialog Lightbox).
    *   Refondre `components/CTA.tsx` (Terminal de propagation).
    *   Refondre `components/Footer.tsx` (System Diagnostic).
*   **Étape 4 : Tests et Polissage**
    *   Valider la compilation de l'application.
    *   Exécuter `npm run lint` et corriger les anomalies éventuelles.
    *   Vérifier le rendu dans le navigateur.
