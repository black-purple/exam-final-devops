// main.js
import { access, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

/**
 * Analyse un fichier log.txt dans un dossier donné, compte les occurrences
 * de ERROR, WARNING, INFO et génère un rapport.
 * @param {string} directoryPath - Le chemin du dossier où chercher log.txt.
 * @param {string} outputFileName - Le nom du fichier de rapport à générer.
 */
export async function analyzeLogFile(directoryPath, outputFileName = 'rapport.txt') {
    const logFilePath = join(directoryPath, 'log.txt');
    const reportFilePath = join(directoryPath, outputFileName);

    try {
        // Vérifier si log.txt existe
        try {
            await access(logFilePath);
        } catch (error) {
            console.error(`\x1b[31mErreur : Le fichier ${logFilePath} n'a pas été trouvé.\x1b[0m`);
            process.exit(1); // Quitte le processus avec un code d'erreur
        }

        // Lire le contenu du fichier log.txt
        const logContent = await readFile(logFilePath, 'utf-8');
        const lines = logContent.split('\n');

        // Initialiser les compteurs
        const counts = {
            ERROR: 0,
            WARNING: 0,
            INFO: 0,
            TOTAL_LINES: lines.length,
        };

        // Parcourir chaque ligne pour compter les occurrences
        lines.forEach(line => {
            if (line.includes('ERROR')) {
                counts.ERROR++;
            }
            if (line.includes('WARNING')) {
                counts.WARNING++;
            }
            if (line.includes('INFO')) {
                counts.INFO++;
            }
        });

        // Création du contenu du rapport
        let reportContent = 'Rapport d\'analyse du fichier log.txt\n';
        reportContent += '=====================================\n\n';
        reportContent += `Fichier analysé : ${logFilePath}\n`;
        reportContent += `Date de l'analyse : ${new Date().toLocaleString()}\n`;
        reportContent += `Nombre total de lignes dans le log : ${counts.TOTAL_LINES}\n\n`;
        reportContent += 'Statistiques des types de log :\n';
        reportContent += `- ERROR: ${counts.ERROR}\n`;
        reportContent += `- WARNING: ${counts.WARNING}\n`;
        reportContent += `- INFO: ${counts.INFO}\n`;

        // Écrire le rapport dans le fichier de sortie
        await writeFile(reportFilePath, reportContent);

        // Message de confirmation dans la console
        console.log(`\nAnalyse de log.txt terminée avec succès.`);
        console.log(`Le rapport a été sauvegardé ici : ${reportFilePath}`);

    } catch (error) {
        // Gestion des erreurs générales (ex: problème de lecture/écriture)
        console.error(`\x1b[31mUne erreur est survenue lors de l'analyse : ${error.message}\x1b[0m`);
        if (error.code === 'EACCES') {
            console.error(`\x1b[31mVeuillez vérifier les permissions de lecture/écriture pour le dossier et les fichiers.\x1b[0m`);
        }
        process.exit(1); // Quitte le processus avec un code d'erreur
    }
}
