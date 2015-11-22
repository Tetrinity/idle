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

describe("GameCtrl", function(){
    var controller
    var $scope, saveDataService
    
    beforeEach(module('idle.controller'))
    beforeEach(module('idle.service'))
    
    beforeEach(inject(function(_$controller_, _SaveDataService_){
        $scope = {}
        saveDataService = _SaveDataService_
        
        controller = _$controller_('GameCtrl', { $scope: $scope, SaveDataService: saveDataService })
    }))
    
    describe("saveGame", function(){
        beforeEach(function(){
            spyOn(saveDataService, "saveGame")
        })
        
        it("should call the saveGame function on the saveDataService", function(){
            $scope.saveGame()
            
            expect(saveDataService.saveGame).toHaveBeenCalled()
        })
    })
})
