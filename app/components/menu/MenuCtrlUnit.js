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
describe("MenuCtrl", function(){
    
    var controller
    var $scope, $location, saveDataService
    
    beforeEach(module('idle.controller'))
    beforeEach(module('idle.service'))
    
    beforeEach(inject(function(_$controller_, _$location_, _SaveDataService_){
        $scope = {}
        $location = _$location_
        saveDataService = _SaveDataService_
        
        controller = _$controller_('MenuCtrl', { $scope: $scope, $location: $location, SaveDataService: saveDataService })
    }))
    
    describe("newGame", function(){
        it("should direct the user to the game view", function(){
            spyOn(saveDataService, 'newGame').and.returnValue(true)
            
            var menuUrl = ''
            expect($location.path()).toEqual(menuUrl)
            
            $scope.newGame()
            
            var gameUrl = '/game'
            expect($location.path()).toEqual(gameUrl)
        })
        
        it("should do nothing if the game should not be started", function(){
            spyOn(saveDataService, 'newGame').and.returnValue(false)
            
            var menuUrl = ''
            expect($location.path()).toEqual(menuUrl)
            
            $scope.newGame()
            expect($location.path()).toEqual(menuUrl)
        })
    })
    
    describe("loadGame", function(){
        beforeEach(function(){
            spyOn(saveDataService, 'loadGame')
        })
        
        it("should direct the user to the game view", function(){
            var gameUrl = '/game'
            expect($location.path()).not.toEqual(gameUrl)
            
            $scope.loadGame()
            expect($location.path()).toEqual(gameUrl)
        })
        
        it("should restore the saved game state", function(){
            $scope.loadGame()
            expect(saveDataService.loadGame).toHaveBeenCalled()
        })
    })
})