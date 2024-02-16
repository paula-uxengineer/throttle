function generateRandomColor (): string {

    let numero = Math.floor (Math.random () * 16777216); // 16777216 = total numbers of hexadecimal colors (256^3 = 16777216)

    let color = '#' + numero.toString (16); // 16 = transform random number to hexadecimal base16

    return color;
  }


export function throttle (f: Function, delay: number): Function {
    
    let inThrottle: boolean = false;
    
    return (...args: any []) => {
        
        if (!inThrottle) {
            f.apply (null, args);
            inThrottle = true;
            
            setTimeout (() => {
                inThrottle = false;
            }, delay);
        }
    };
}


generateRandomColor();

const generateThrottleColor = throttle(generateRandomColor, 3000); 

const call = generateThrottleColor();
console.log(call); 


// function changeBackgroundColor (elemento: HTMLElement): void {

//     let color = generateRandomColor ();

//     elemento.style.backgroundColor = color;
// }


// let elemento = document.querySelector ('body');

// document.addEventListener ('mousemove', function () {
//   throttle (changeBackgroundColor, 1000) (elemento);
// });