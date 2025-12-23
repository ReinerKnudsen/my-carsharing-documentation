---
sidebar_position: 1
---

import Screenshots from '@site/src/components/Screenshots';

# Fahrten erstellen

<Screenshots iosImage="doku-fahrten/img/fahrten-screen-ios.png" androidImage="doku-fahrten/img/fahrten-screen-android.png" caption="Fahrten"/>


Auf der Seite `Fahrten` findest Du die Liste aller gespeicherten Fahrten. 

Von hier kannst Du eine neue Fahrt erstellen, indem Du 
- auf den Button `+ Neue Fahrt` klickst
- auf das Icon `+` klickst (unter iOS)
- auf den `+` Button unten rechts klickst (unter Android)

## Fahrt eintragen

<Screenshots iosImage="doku-fahrten/img/fahrt-eintragen-ios.png" androidImage="doku-fahrten/img/fahrt-eintragen-android.png" caption="Fahrt eintragen" alt="Fahrt eintragen"/>

In diesem Bildschirm kannst Du die Werte für eine neue Fahrt eintragen und die Fahrt speichern. 
### Datum eintragen
Wähle das **Datum** aus, an dem Du diese Fahrt **beendet** hast. 

Das Datum darf nicht in der Zukunft liegen. 

:::warning[Vorsicht]
Wählst Du ein Datum aus, das in der Zukunft liegt, wird Dir eine Fehlermeldung angezeigt und Du kannst die Fahrt nicht speichern.
:::

Das Datum muss größer oder gleich dem Datum der letzten Fahrt sein. 
:::warning[Vorsicht]
Wählst Du ein Startdatum aus, das vor dem Ende der letzten gespeicherten Fahrt liegt, wird Dir eine Fehlermeldung angezeigt und Du kannst die Fahrt nicht speichern.
:::

### Kilometerstände eintragen
Trag bitte die Kilometerstände beim **Start** und dem **Ende** der Fahrt ein. Bitte denke daran, dass der Start-Kilometerstand kleiner sein muss als der End-Kilometerstand.
:::warning[Vorsicht]
Gibst Du einen Start-Kilometerstand ein, der größer oder gleich dem End-Kilometerstand ist, wird Dir eine Fehlermeldung angezeigt und Du kannst die Fahrt nicht speichern.
:::

### Kommentar eintragen
Du kannst optional einen Kommentar Deiner Fahrt hinzufügen. Dieser Kommentar ist nur für Dich und andere Fahrer Deiner Gruppe sichtbar. 

<Screenshots iosImage="doku-fahrten/img/fahrt-eingetragen-ios.png" androidImage="doku-fahrten/img/fahrt-eingetragen-android.png" caption="Fahrt eingetragen" alt="Fahrt eingetragen"/>

Wenn die Kilometerstände valide sind, wird Dir am unteren Bildschirmrand angezeigt, welche Strecke Du für diese Fahrt zurück gelegt hast und was Du dafür bezahlen musst.

Wenn Du auf den Button `Fahrt erstellen` klickst, wird die Fahrt gespeichert und Du wirst zur Liste der Fahrten weitergeleitet.

### Fahrtenliste

<Screenshots iosImage="doku-fahrten/img/fahrten-liste-ios.png" androidImage="doku-fahrten/img/fahrten-liste-android.png" caption="Fahrtenliste" alt="Fahrtenliste"/>

In dieser Liste kannst Du alle vergangenen Fahrten sehen. 

Unter `Unsere Fahrten` findest Du alle Fahrten, die jemand aus Deiner Gruppe erstellt hat.

Unter `Alle Fahrten` findest Du alle Fahrten, die von anderen Fahrern erstellt wurden. 

### Differenzfahrten
Es kann vorkommen, dass ein Fahrer vergisst, seine Fahrt einzutragen. Der aktuelle Kilometerstand, bei dem Deine Fahrt beginnt, stimmt dann nicht mit dem End-Kilometerstand der letzten Fahrt überein.

Du kannst trotzdem eine Fahrt erstellen. Gib dazu einfach wie oben beschrieben Datum und Kilometerstände ein. Überschreibe den vorgeschlagenen Wert für den Start-Kilometerstand mit dem aktuellen Kilometerstand.

Wenn Du Deine Fahrt speicherst, wird Dir am unteren Bildschirmrand angezeigt, dass eine zusätzliche Fahrt erstellt wurde, die keinem Fahrer zuordnet ist.

Diese Fahrten - die sogenannten *Differenzfahrten* - werden den Fahrern **aller Gruppen** angezeigt. Jeder Fahrer kann diese Fahrt aus der Übersicht in das eigene Konto übernehmen, indem er auf den Button `Fahrt übernehmen` klickt.

<Screenshots iosImage="doku-fahrten/img/fahrt-differenz-ios.png" androidImage="doku-fahrten/img/fahrt-differenz-android.png" caption="Differenzfahrt" alt="Differenzfahrt"/>