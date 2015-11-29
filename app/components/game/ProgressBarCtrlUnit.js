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

describe("ProgressBarCtrl", function(){
    var controller
    var $scope
    
    beforeEach(module('idle.controller'))
    
    beforeEach(inject(function(_$controller_){
        $scope = {}
        
        controller = _$controller_('ProgressBarCtrl', { $scope: $scope })
    }))
    
    describe("getBaseProgress", function(){
        it("should return the overall progress when it is less than or equal to 100%", function(){
            $scope.progress = 0
            expect($scope.getBaseProgress()).toEqual(0)
            $scope.progress = 47.42
            expect($scope.getBaseProgress()).toEqual(47.42)
            $scope.progress = 100
            expect($scope.getBaseProgress()).toEqual(100)
        })
        
        it("should fill the remaining available bar when overall progress is more than 100%", function(){
            $scope.progress = 101
            expect($scope.getBaseProgress()).toEqual(99)
            $scope.progress = 150.5
            expect($scope.getBaseProgress()).toEqual(49.5)
            $scope.progress = 200
            expect($scope.getBaseProgress()).toEqual(0)
        })
    })
    
    describe("getPolishProgress", function(){
        it("should return zero when the overall progress is less than or equal to 100%", function(){
            $scope.progress = 0
            expect($scope.getPolishProgress()).toEqual(0)
            $scope.progress = 47.42
            expect($scope.getPolishProgress()).toEqual(0)
            $scope.progress = 100
            expect($scope.getPolishProgress()).toEqual(0)
        })
        
        it("should return the number of percentage points that the overall progress is above 100%", function(){
            $scope.progress = 101
            expect($scope.getPolishProgress()).toEqual(1)
            $scope.progress = 150.5
            expect($scope.getPolishProgress()).toEqual(50.5)
            $scope.progress = 200
            expect($scope.getPolishProgress()).toEqual(100)
        })
    })
})
