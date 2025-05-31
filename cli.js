#!/usr/bin/env node

// cli.js

import analyzeDirectory from './main.js';
import { resolve } from 'path';

// Les deux premiers arguments sont 'node' et le chemin du script, nous les ignorons.
const args = process.argv.slice(2);
const targetPath = args[0]; // Le chemin optionnel est le premier argument.

// Détermine le dossier à analyser :
// 1. Si un chemin est fourni, on l'utilise.
// 2. Sinon, on utilise le dossier actuel (où la commande est lancée).
const directoryToAnalyze = targetPath ? resolve(targetPath) : process.cwd();

console.log(`Lancement de l'analyse pour le dossier : ${directoryToAnalyze}`);

// Appel de la fonction principale d'analyse
analyzeDirectory(directoryToAnalyze);