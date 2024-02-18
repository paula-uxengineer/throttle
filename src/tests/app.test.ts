import { throttle } from '../index';
import { generateRandomColor } from '../index';

jest.useFakeTimers(); //create jest timers

describe('HEX color', () => {

    it('should return a string', () => {
        expect(typeof generateRandomColor()).toBe('string');
    });


    it('should return throttle function calls', () => {
         const mockFunction = jest.fn();
         const generateThrottleColor = throttle( 
             mockFunction, 3000);
        
         generateThrottleColor();

         setTimeout(() => generateThrottleColor(), 2000);
         setTimeout(() => generateThrottleColor(), 7100);

         jest.runAllTimers();
        
         expect(mockFunction).toHaveBeenCalledTimes(2);
    })
});