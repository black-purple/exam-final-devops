// main.js
import { access, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function analyzeLogFile(directoryPath, outputFileName = 'rapport.txt') {
    const logFilePath = join(directoryPath, 'log.txt');
    const reportFilePath = join(directoryPath, outputFileName);

    try {
        try {
            await access(logFilePath);
        } catch (error) {
            console.error(`\x1b[31mErreur : Le fichier ${logFilePath} n'a pas été trouvé.\x1b[0m`);
            process.exit(1);
        }

        const logContent = await readFile(logFilePath, 'utf-8');
        const lines = logContent.split('\n');

        const counts = {
            ERROR: 0,
            WARNING: 0,
            INFO: 0,
            TOTAL_LINES: lines.filter(line => line.trim() !== '').length,
        };

        lines.forEach(line => {
            if (line.includes('ERROR')) counts.ERROR++;
            if (line.includes('WARNING')) counts.WARNING++;
            if (line.includes('INFO')) counts.INFO++;
        });

        let reportContent = 'Rapport d\'analyse du fichier log.txt\n';
        reportContent += '=====================================\n\n';
        reportContent += `Fichier analysé : ${logFilePath}\n`;
        reportContent += `Date de l'analyse : ${new Date().toLocaleString()}\n`;
        reportContent += `Nombre total de lignes non vides dans le log : ${counts.TOTAL_LINES}\n\n`;
        reportContent += 'Statistiques des types de log :\n';
        reportContent += `- ERROR: ${counts.ERROR}\n`;
        reportContent += `- WARNING: ${counts.WARNING}\n`;
        reportContent += `- INFO: ${counts.INFO}\n`;

        await writeFile(reportFilePath, reportContent);

        console.log(`\nAnalyse de log.txt terminée avec succès.`);
        console.log(`Le rapport a été sauvegardé ici : ${reportFilePath}`);

        // --- NOUVELLE CONDITION D'ÉCHEC POUR JENKINS (TÂCHE 4) ---
        if (counts.ERROR > 5) {
            console.error(`\x1b[31mÉchec du build : Plus de 5 erreurs détectées (${counts.ERROR} erreurs).\x1b[0m`);
            process.exit(1); // Quitte avec un code d'erreur pour faire échouer le build Jenkins
        }
        // ---------------------------------------------------------

    } catch (error) {
        console.error(`\x1b[31mUne erreur est survenue lors de l'analyse : ${error.message}\x1b[0m`);
        process.exit(1);
    }
}
