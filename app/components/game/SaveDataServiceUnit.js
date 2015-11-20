/* 
 * The MIT License
 *
 * Copyright 2015 Tetrinity.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

describe("SaveDataService", function(){
    
    var saveDataService
    
    beforeEach(module('idle.service'))
    
    beforeEach(inject(function(_SaveDataService_){
        saveDataService = _SaveDataService_
    }))
    
    describe("newGame", function(){
        beforeEach(function(){
            spyOn(saveDataService, "initSave")
        })
        
        it("should set up the save file if it does not already exist", function(){
            spyOn(window, "confirm").and.returnValue(true)
            saveDataService.newGame()
            
            expect(window.confirm).not.toHaveBeenCalled()
            expect(saveDataService.initSave).toHaveBeenCalled() 
        })
        
        it("should prompt the user to confirm overwriting the save if it already exists", function(){
            spyOn(window, "confirm").and.returnValue(true)
            saveDataService.saveDataExists = true
            
            saveDataService.newGame()
            
            expect(window.confirm).toHaveBeenCalled()
            expect(saveDataService.initSave).toHaveBeenCalled()            
        })
        
        it("should not initialise the save if a save file already exists and the user declines overwriting it", function(){
            spyOn(window, "confirm").and.returnValue(false)
            saveDataService.saveDataExists = true
            
            saveDataService.newGame()
            
            expect(window.confirm).toHaveBeenCalled()
            expect(saveDataService.initSave).not.toHaveBeenCalled()  
        })
    })
    
    describe("initSave", function(){
        it("should set the amount of code written by the player to zero", function(){
            saveDataService.initSave()
            
            expect(saveDataService.linesOfCode).toEqual(bigInt(0))
        })
        
        it("should disable all projects except the first", function(){
            
        })
        
        it("should reset all upgrades", function(){
            
        })
    })
    
    
})
