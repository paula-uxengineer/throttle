export function generateRandomColor (): string {

    let numero = Math.floor (Math.random () * 16777216); // 16777216 = total numbers of hexadecimal colors (256^3 = 16777216)

    const color = '#' + numero.toString(16); // 16 = transform random number to hexadecimal base16

    return color;
  }
  

export function throttle (f: Function, delay: number): Function {
    
    let toWait: boolean = false;
    
    return (...args: any []) => {
        
        if (!toWait) {
            f.apply (null, args);
            toWait = true;
            
            setTimeout (() => {
                toWait = false;
            }, delay);
        }
    };
}


// generateRandomColor();

// const generateThrottleColor = throttle(() => {
//     console.log(generateRandomColor())}, 3000); 
    
// generateThrottleColor();

// setTimeout(() => generateThrottleColor(),3000);
// setTimeout(() => generateThrottleColor(),4000);
