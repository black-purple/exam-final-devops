#!/usr/bin/env node

// cli.js
import { analyzeLogFile } from './main.js'; // Corrected: Named import
import { resolve } from 'node:path'; // Using node: prefix
import { cwd } from 'node:process'; // Using node: prefix for process.cwd()

// Les deux premiers arguments sont 'node' et le chemin du script, nous les ignorons.
const args = process.argv.slice(2);
const targetPathArgument = args[0]; // Le chemin optionnel est le premier argument.

// Détermine le dossier à analyser :
// 1. Si un chemin est fourni, on l'utilise.
// 2. Sinon, on utilise le dossier actuel (où la commande est lancée).
const directoryToAnalyze = targetPathArgument ? resolve(targetPathArgument) : cwd();

console.log(`Lancement de l'analyse de log.txt dans le dossier : ${directoryToAnalyze}`);

// Appel de la fonction principale d'analyse de log.txt
analyzeLogFile(directoryToAnalyze); // Corrected: Call the imported function
