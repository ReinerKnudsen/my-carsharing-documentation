---
sidebar_position: 2
sidebar_label: 'Übersicht UI'
---

import Screenshots from '@site/src/components/Screenshots';

# Übersicht UI

Die Anwendung bietet für jedes Feature eine Übersichtsseite an. Administratoren haben zusätzliche
Seiten, um ihre Aufgaben zu erfüllen.

## Benutzerrollen und Seiten

| Benutzerrolle | Seiten                                                    |
| ------------- | --------------------------------------------------------- |
| Fahrer        | Dashboard, Fahrten, Buchungen, Belege, Profil             |
| Gruppenadmin  | Dashboard, Fahrten, Buchungen, Belege, Verwaltung, Profil |
| Administrator | Dashboard, Fahrten, Buchungen, Belege, Verwaltung, Profil |

## Dashboard

Das Dashboard ist die persönliche Übersichtsseite für jeden Benutzer.

<Screenshots 
	iosImage="img/dashboard-ios.png" 
	androidImage="img/dashboard-android.png" 
	caption="Dashboard"
/>

### Willkommenbox

Die Willkommenbox enthält den Namen des Benutzers und dessen Zuordnung zu einer Gruppe.

### Schalter für 'Fahrt aufzeichnen'

Mit diesem Schalter kannst Du auf schnelle Weise die
[Aufzeichnung von Fahrten](/docs/doku-fahrten/fahrten%20aufzeichnen.md) starten. Damit speicherst Du
den Kilometerstart am Beginn der Fahrt.

### Kommende Buchungen

In dieser Liste siehst Du die Buchungen aller Gruppen, die als nächstes anstehen. Hier werden Dir
die nächsten vier [Buchungen](/docs/category/dokumentation-buchungen/) angezeigt.

<hr />
<Screenshots 
	iosImage="img/dashboard-ios-2.png" 
	androidImage="img/dashboard-android-2.png" 
	caption="Dashboard"
/>

### Letzte Fahrten

In dieser Liste werden Dir die letzten Fahrten aller Gruppen angezeigt. Hier werden die letzten vier
[Fahrten](docs/category/dokumentation-fahrten/) angezeigt.

### Kostenübersicht

Am unteren Ende des Dashboard wird Dir eine Liste der Kosten Deiner Gruppe angezeigt. In einer
kleinen Statistik kannst Du sehen, wieviele Fahrten Deine Gruppen gemacht hat, welche Entfernung ihr
zurückgelegt habt und welche Kosten dabei angefallen sind.

Zusätzlich kannst Du hier die Kosten pro Fahrer sehen.
