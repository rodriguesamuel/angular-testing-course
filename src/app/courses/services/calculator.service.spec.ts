import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CaculatorService', ()=>{

  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(()=>{

    console.log("Calling beforeEach");

    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

    calculator = new CalculatorService(loggerSpy);

  });

  it('should add two numbers',()=>{

    const result = calculator.add(2,2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });

  it('should subtract two numbers',()=>{

    console.log("Subtract test");

    const result = calculator.subtract(2,2);

    expect(result).toBe(0, "unexpected subtraction result");

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });
});
