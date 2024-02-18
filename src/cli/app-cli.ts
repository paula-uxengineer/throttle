import { generateRandomColor, throttle } from '../index';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cli() {
    rl.question('Press Enter to generate a random color or type "exit" to quit: ', (answer) => {
        if (answer.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        const generateThrottleColor = throttle(() => {
            console.log(generateRandomColor())}, 3000); 
            
        console.log('Generated color:');
        generateThrottleColor();

        cli(); //repeat again 
    });
}

cli();
