import inquirer from 'inquirer';
import chalk from 'chalk';
function countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length;
}
function getWordCount() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'sentence',
            message: 'Enter a sentence:'
        }
    ])
        .then(answers => {
        const sentence = answers.sentence;
        const wordCount = countWords(sentence);
        console.log(chalk.green(`Word Count: ${wordCount}`));
        showOptions();
    });
}
function showOptions() {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Choose an option:',
            choices: ['Count Words', 'Exit']
        }
    ])
        .then(answers => {
        switch (answers.option) {
            case 'Count Words':
                getWordCount();
                break;
            case 'Exit':
                console.log(chalk.yellow('Goodbye! user.'));
                break;
        }
    });
}
// Start the program
showOptions();
