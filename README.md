# Analyseur de Fichiers Journaux (Log Analyzer)

**Auteur :** [Votre Nom/Pseudo Ici]

## Description

Cet outil en ligne de commande (CLI) permet d'analyser le contenu d'un dossier spécifié. Il compte le nombre de fichiers présents et les regroupe par extension. Les résultats de l'analyse sont ensuite exportés dans un fichier texte nommé `rapport_analyse.txt` à la racine du dossier analysé.

L'outil peut être exécuté de deux manières :
1.  Directement dans un dossier pour analyser celui-ci.
2.  En lui fournissant le chemin d'un dossier spécifique à analyser.

## Prérequis

Avant de pouvoir utiliser cet outil, vous devez avoir **Node.js** et **npm** (Node Package Manager) installés sur votre machine. npm est généralement inclus avec l'installation de Node.js.

### Instructions d'installation de Node.js et npm :

* **Windows :**
    1.  Téléchargez l'installeur LTS depuis le site officiel de Node.js : [https://nodejs.org/](https://nodejs.org/)
    2.  Exécutez l'installeur et suivez les instructions. npm sera installé automatiquement.
    3.  Vérifiez l'installation en ouvrant une invite de commandes (CMD) ou PowerShell et en tapant :
        ```bash
        node -v
        npm -v
        ```

* **Linux (Debian/Ubuntu) :**
    1.  Ouvrez un terminal et exécutez les commandes suivantes :
        ```bash
        sudo apt update
        sudo apt install nodejs npm
        ```
    2.  Vérifiez l'installation :
        ```bash
        node -v
        npm -v
        ```

* **Linux (Autres distributions) :**
    Consultez la documentation de votre gestionnaire de paquets ou la page de Node.js pour les instructions spécifiques : [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

* **macOS :**
    1.  **Via Homebrew (recommandé) :**
        Si vous n'avez pas Homebrew, installez-le depuis [https://brew.sh/index_fr](https://brew.sh/index_fr).
        Ensuite, dans le terminal :
        ```bash
        brew install node
        ```
    2.  **Via l'installeur officiel :**
        Téléchargez le paquet `.pkg` depuis [https://nodejs.org/](https://nodejs.org/) et suivez les instructions.
    3.  Vérifiez l'installation :
        ```bash
        node -v
        npm -v
        ```

## Installation de l'Outil

1.  **Télécharger ou Cloner le Projet :**
    Si le projet est sur un dépôt Git (par exemple, GitHub), clonez-le :
    ```bash
    git clone https://github.com/black-purple/exam-final-devops
    cd exam-final-devops
    ```
    Si vous avez les fichiers `main.js`, `cli.js`, et `package.json` directement, placez-les dans un dossier de votre choix et naviguez vers ce dossier dans votre terminal.

2.  **Rendre le script CLI exécutable (Linux/macOS) :**
    Dans le terminal, à la racine du projet, exécutez :
    ```bash
    chmod +x cli.js
    ```
    Cette étape n'est généralement pas nécessaire sous Windows si Node.js est correctement configuré dans le PATH.

3.  **Lier la commande pour une utilisation globale :**
    Toujours à la racine du projet, exécutez la commande suivante. Cela vous permettra d'utiliser la commande `analyze-logs` depuis n'importe quel emplacement de votre système.
    ```bash
    npm link
    ```
    * **Note pour Linux/macOS :** Si vous rencontrez une erreur de permission, essayez avec `sudo` : `sudo npm link`.
    * **Note pour Windows :** Assurez-vous d'exécuter l'invite de commandes ou PowerShell en tant qu'administrateur pour que `npm link` fonctionne correctement.

## Utilisation de l'Outil

Une fois l'installation terminée, vous pouvez utiliser la commande `analyze-logs` de deux manières :

1.  **Analyser le dossier courant :**
    Naviguez avec votre terminal jusqu'au dossier que vous souhaitez analyser, puis exécutez simplement :
    ```bash
    analyze-logs
    ```
    Un fichier nommé `rapport_analyse.txt` sera créé dans ce dossier, contenant les statistiques des fichiers.

2.  **Analyser un dossier spécifique en fournissant un chemin :**
    Vous pouvez spécifier le chemin (relatif ou absolu) du dossier à analyser directement dans la commande :
    ```bash
    # Exemple avec un chemin relatif
    analyze-logs ./chemin/vers/mon/dossier

    # Exemple avec un chemin absolu (Linux/macOS)
    analyze-logs /var/log

    # Exemple avec un chemin absolu (Windows)
    analyze-logs C:\Utilisateurs\VotreNom\Documents\Logs
    ```
    Le fichier `rapport_analyse.txt` sera généré à l'intérieur du dossier spécifié.

## Dépannage

* **Commande `analyze-logs` non trouvée :**
    * Assurez-vous d'avoir exécuté `npm link` correctement (avec les droits d'administrateur si nécessaire).
    * Vérifiez que Node.js et npm sont correctement installés et accessibles dans votre PATH.
    * Sur Linux/macOS, vérifiez que `cli.js` est exécutable (`chmod +x cli.js`).

* **Erreurs de permission lors de la création du rapport :**
    Assurez-vous que l'outil a les droits d'écriture dans le dossier où le rapport doit être créé.
