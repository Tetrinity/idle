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

angular.module('idle.service')

.factory('ProjectService', [
    function(){
        var service = {}
        service.projects = []
        
        /*
         *  Project structure:
         *  name: the name of the project
         *  baseLoc: the number of lines of code required to write this program (without upgrades)
         *  baseProfit: the amount of money made by selling the rights to this program at 100% completion
         *  unlocked: whether this project is available for development
         */
        
        service.registerProject = function(name, baseLoc, baseProfit){
            service.projects.push({
                name: name,
                baseLoc: baseLoc,
                baseProfit: baseProfit,
                unlocked: false
            })
        }
        
        var register = service.registerProject
        
        register("Hello World", bigInt(5), bigInt(2))
        register("FizzBuzz", bigInt(15), bigInt(6))
        register("Recursion Lab Exercise", bigInt(50), bigInt(12))
        register("GeoCities Website", bigInt(200), bigInt(100))
        
        
        return service
    }
])