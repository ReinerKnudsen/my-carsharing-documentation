---
sidebar_position: 2
---

import Screenshots from '@site/src/components/Screenshots';

# Fahrten aufzeichnen

Die App bietet die Möglichkeit, eine Fahrt aufzuzeichnen.

<Screenshots iosImage="doku-fahrten/img/fahrt-aufzeichnen-ios.png" androidImage="doku-fahrten/img/fahrt-aufzeichnen-android.png" caption="Fahrt aufzeichnen"/>

Auf dem Dashboard findest Du ganz oben einen Schalter `Fahrt starten`. Wenn Du diesen Schalter betätigst, wird Dir ein Formular angezeigt, in dem Du entweder den vorgeschlagenen Kilometerstand bei Start der Fahrt bestätigen oder einen anderen Kilometerstand eingeben kannst. 

<Screenshots iosImage="doku-fahrten/img/fahrt-aufzeichnen-dialog-ios.png" androidImage="doku-fahrten/img/fahrt-aufzeichnen-dialog-android.png" caption="Fahrt aufzeichnen - Eingabedialog"/>

Bitte beachte, dass der von Dir eingegebene Kilometerstand größer oder gleich sein muss als der letzte gespeicherte.
:::warning[Vorsicht]
Wenn Du hier einen Kilometerstand eingibst, der kleiner ist als der letzte gespeicherte, wird eine Fehlermeldung angezeigt und Du kannst die Fahrt nicht starten.
:::

Wenn Du die Fahrt gestartet hast, ändert sich die Farbe des Schalters. So kannst Du erkennen, dass für Dich aktuelle eine Aufzeichnung läuft.

<Screenshots iosImage="doku-fahrten/img/fahrt-laufende-aufzeichnung-ios.png" androidImage="doku-fahrten/img/fahrt-laufende-aufzeichnung-android.png" caption="Laufende Aufzeichnung"/>

# Aufzeichnungen beenden

Wenn Du Deine Fahrt beendest, kannst Du die Aufzeichnung beenden.

Dafür betätigst Du erneut den Schalter. Dir wird daraufhin ein Formular angezeigt, in dem Du den vorgeschlagenen Kilometerstand bei Ende der Fahrt eingeben kannst.

<Screenshots iosImage="doku-fahrten/img/fahrt-aufzeichnung-beenden-ios.png" androidImage="doku-fahrten/img/fahrt-aufzeichnung-beenden-android.png" caption="Aufzeichnung beenden"/>

Bitte beachte, dass der von Dir eingegebene Kilometerstand größer sein muss als der Start-Kilometerstand.
:::warning[Vorsicht]
Wenn Du hier einen leeren Kilometerstand eingibst oder einen Kilometerstand, der kleiner ist als der Start-Kilometerstand, wird eine Fehlermeldung angezeigt und Du kannst die Fahrt nicht beenden.
:::

Wenn Du die Fahrt korrekt beendet hast, wird die Fahrt für Dich gespeichert.

# Aufzeichnungen überschreiben

Es kann vorkommen, dass ein Fahrer vergisst, seine Aufzeichnung zu beenden. 

Du kannst auf Deinem Dashboard sehen, ob ein anderer Fahrer aktuell eine Aufzeichnung gestartet hat.

<Screenshots iosImage="doku-fahrten/img/fahrt-fremde-aufzeichnung-ios.png" androidImage="doku-fahrten/img/fahrt-fremde-aufzeichnung-android.png" caption="Aufzeichnung eines anderen Fahrers"/>

Wenn Du selbst eine Fahrt starten willst und Dir sicher bist, dass die laufende Aufzeichnung beendet ist, kannst Du Deine Aufzeichnung starten, indem Du den Schalter betätigst. Dir wird dann ein Formular angezeigt, in dem Du den von Dir abgelesenen Kilometerstand eintragen kannst.

<Screenshots iosImage="doku-fahrten/img/fahrt-fremde-aufzeichnung-stoppen-ios.png" androidImage="doku-fahrten/img/fahrt-fremde-aufzeichnung-stoppen-android.png" caption="Fremde Aufzeichnung stoppen"/>

Die App erstellt im Hintergrund eine *[Differenzfahrt](#differenzfahrten)*, die keinem Fahrer zugeordnet ist. Im Kommentar zu dieser Fahrt wird allerdings der Name des Fahrers angegeben, der die Aufzeichnung gestartet hat. Dieser kann später diese Fahrt übernehmen.

Wenn die Speicherung beendet ist, wird die Aufzeichnung Deiner Fahrt mit dem von Dir angegebenen Kilometerstand gestartet.

<Screenshots iosImage="doku-fahrten/img/fahrt-gespeicherte-differenzfahrt-ios.png" androidImage="doku-fahrten/img/fahrt-gespeicherte-differenzfahrt-android.png" caption="Gespeicherte Differenzfahrt" alt="Gespeicherte Differenzfahrt"/>

# Differenzfahrten

Es kann vorkommen, dass ein Fahrer vergisst, seine Fahrt einzutragen. Der aktuelle Kilometerstand, bei dem Deine Fahrt beginnt, stimmt dann nicht mit dem End-Kilometerstand der letzten Fahrt überein.

Du kannst trotzdem eine Fahrt aufzeichnen. Gib dazu, wie oben beschrieben, den Kilometerstand ein, den Du am Tachometer des Fahrzeugs abliest. Überschreibe den vorgeschlagenen Wert für den Start-Kilometerstand mit dem aktuellen Kilometerstand.

Wenn Du die Aufzeichnung Deiner Fahrt startest, wird Dir am unteren Bildschirmrand angezeigt, dass eine zusätzliche Fahrt erstellt wurde, die keinem Fahrer zugeordnet ist.

Diese Fahrten - die sogenannten *Differenzfahrten* - werden den Fahrern **aller Gruppen** angezeigt. Jeder Fahrer kann diese Fahrt aus der Übersicht in das eigene Konto übernehmen, indem er auf den Button `Fahrt übernehmen` klickt.

<Screenshots iosImage="doku-fahrten/img/fahrt-differenz-ios.png" androidImage="doku-fahrten/img/fahrt-differenz-android.png" caption="Differenzfahrt" alt="Differenzfahrt"/>