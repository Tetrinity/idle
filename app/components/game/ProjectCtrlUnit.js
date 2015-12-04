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

describe("ProjectCtrl", function(){
    var controller
    var $scope
    
    beforeEach(module('idle.controller'))
    
    beforeEach(inject(function(_$controller_){
        $scope = {}
        
        controller = _$controller_('ProjectCtrl', { $scope: $scope })
    }))
    
    describe("getProgressPercent", function(){
        it("should compute the percentage of lines written for the project", function(){
            $scope.linesWritten = bigInt(0)
            $scope.linesNeeded = bigInt(200)
            expect($scope.getProgressPercent()).toEqual(0)
            
            $scope.linesWritten = bigInt(100)
            $scope.linesNeeded = bigInt(200)
            expect($scope.getProgressPercent()).toEqual(50)
            
            $scope.linesWritten = bigInt(173)
            $scope.linesNeeded = bigInt(200)
            expect($scope.getProgressPercent()).toEqual(86.5)

            $scope.linesWritten = bigInt(1)
            $scope.linesNeeded = bigInt(7)
            expect($scope.getProgressPercent()).toEqual(14.29)

            $scope.linesWritten = bigInt(250)
            $scope.linesNeeded = bigInt(200)
            expect($scope.getProgressPercent()).toEqual(125)
        })
    })
    
    describe("unlockProject", function(){
        it("should set the project's unlocked property to true", function(){
            $scope.unlocked = false
            
            $scope.unlockProject()
            expect($scope.unlocked).toEqual(true)
        })
    })
})
