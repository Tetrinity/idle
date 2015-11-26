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
    
    var service
    var $cookies
    
    beforeEach(module('idle.service'))
    
    beforeEach(function(){
        var mockProjectService = {
            projects: []
        }
        for (var i = 0; i < 5; i++){
            mockProjectService.projects.push({unlocked: false})
            mockProjectService.projects.push({unlocked: true})
        }

        module('idle.service', function($provide){
            $provide.value('ProjectService', mockProjectService)
        })
    })
    
    beforeEach(inject(function(_SaveDataService_, _$cookies_){
        service = _SaveDataService_
        $cookies = _$cookies_
    }))
    
    describe("newGame", function(){
        beforeEach(function(){
            spyOn(service, "initSave")
        })
        
        it("should set up the save file if it does not already exist", function(){
            spyOn(window, "confirm").and.returnValue(true)
            
            service.newGame()
            
            expect(window.confirm).not.toHaveBeenCalled()
            expect(service.initSave).toHaveBeenCalled()
        })
        
        it("should prompt the user to confirm overwriting the save if it already exists", function(){
            $cookies.saveGame = {}
            spyOn(window, "confirm").and.returnValue(true)
            
            service.newGame()
            
            expect(window.confirm).toHaveBeenCalled()
            expect(service.initSave).toHaveBeenCalled()
        })
        
        it("should not initialise the save if a save file already exists and the user declines overwriting it", function(){
            $cookies.saveGame = {}
            spyOn(window, "confirm").and.returnValue(false)
            
            service.newGame()
            
            expect(window.confirm).toHaveBeenCalled()
            expect(service.initSave).not.toHaveBeenCalled()
        })
    })
    
    describe("initSave", function(){
        it("should set the amount of money the player has to the base amount", function(){
            service.initSave()
            
            expect(service.money).toEqual(bigInt(10))
        })
        
        it("should set the amount of code written by the player to zero", function(){
            service.initSave()
            
            expect(service.linesOfCode).toEqual(bigInt(0))
        })
        
        it("should disable all projects except the first", function(){
            service.initSave()
            
            expect(service.projects[0].unlocked).toEqual(true)
            for (var i = 1; i < service.projects.length; i++){
                expect(service.projects[i].unlocked).toEqual(false)
            }
        })
        
        it("should reset all upgrades", function(){
            
        })
    })
    
    describe("saveGame", function(){
        it("should save a cookie with the current save state", function(){
            service.saveGame()
            
            expect($cookies.saveGame).toBeDefined()
        })
    })
    
    describe("loadGame", function(){
        beforeEach(function(){
            spyOn(service, "initSave")
        })
        
        it("should restore the save state from a cookie", function(){
            $cookies.saveGame = {}
            
            service.loadGame()
            expect(service.initSave).not.toHaveBeenCalled()
        })
        
        it("should redirect to initSave if no cookie is available", function(){
            service.loadGame()
            expect(service.initSave).toHaveBeenCalled()
        })
    })
})