# Wedding Landing Page — Extended Specification for CODEX

## Context
Landing page oparty o zaproszenie ślubne.

Założenie nadrzędne:
Nie kopiujemy układu PDF 1:1.
Wykorzystujemy język wizualny, typografię, rytm i klimat plakatu.

Inspiracje:
- zaproszenie
- Robert Rodriguez
- Quentin Tarantino
- retro movie posters
- editorial web

---

# 1. Information Architecture

```txt
Navbar
Hero
Program
RSVP
Post Scriptum
Footer
```

Sekcje w navbar:
- Program
- RSVP
- Post Scriptum
- Potwierdź obecność
- PL / EN

Sticky + smooth scroll.

---

# 2. Wireframe

## Hero

Układ:
- ilustracja z pierwszej strony zaproszenia
- Antonina × Piotr
- data
- countdown
- CTA

Countdown:

19 września 2026
15:00
Europe/Warsaw

```ts
const ceremonyDate = new Date('2026-09-19T15:00:00+02:00')
```

---

## Program

### Część I — Ceremonia

- godzina: 15:00
- Bazylika pw. św. Wincentego à Paulo
- mini mapa
- CTA → Google Maps

### Część II — Weselisko

- Karczma Gazdówka
- Szosa Bydgoska 9
- Żołędowo
- mapa
- CTA

---

## RSVP

Termin:
31 lipca 2026

Kontakt:
- Antonina
- Piotr

Opcjonalny formularz.

---

## Post Scriptum

Treść prezentowana jako dopisek.

---

# 3. Design System

## Grid

```txt
12 columns
1440 max
1180 content
24 gap
```

## Spacing

```txt
4
8
16
24
40
64
96
128
```

## Tokens

```scss
$poster-yellow: #F5BE33;
$poster-red: #F7394D;
$poster-cyan: #65D7E7;
$poster-navy: #0B1D36;
$paper: #FFFDF8;
$black-soft: #121212;
```

## Typography

Hero:
Anton

Body:
Geist Sans

Scale:

```txt
96
48
32
18
```

---

# 4. Poster Shadows

```scss
:root {
--shadow-block:
10px 10px 0 var(--poster-red);
}
```

```scss
.shadow-poster {
box-shadow: var(--shadow-block);
}
```

```scss
.shadow-poster:hover {
transform: translate(-2px,-2px);
box-shadow:
14px 14px 0 var(--poster-red);
}
```

---

# 5. Components (shadcn + Radix)

## Layout

```txt
Navbar
Section
Container
Footer
```

## Hero

```txt
HeroSection
HeroArtwork
Countdown
HeroActions
```

Props:

```ts
{
 title,
 date,
 image,
 countdown
}
```

## Program

```txt
EventSection
EventCard
EventMeta
MapPreview
LocationButton
```

## RSVP

```txt
RSVPSection
ContactCard
RSVPButton
```

## Post Scriptum

```txt
PosterQuote
MarqueeText
HandwrittenNote
```

## UI

shadcn:

```txt
Button
Card
Drawer
Dialog
Badge
Tabs
Accordion
```

Radix:

```txt
NavigationMenu
Popover
Tooltip
Slot
```

---

# 6. Folder Structure

```txt
app/
components/
layout/
sections/
ui/
effects/
styles/
tokens/
messages/
```

---

# 7. Motion

Hero → fade
Countdown → flip
Map → zoom
CTA → scale

Max duration:
250–300ms

Zasada:
Wygląda jak plakat.
Działa jak nowoczesny landing page.
