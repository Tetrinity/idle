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

.factory('SaveDataService', ['$cookies', 'ProjectService',
    function($cookies, projectService){
        var baseSave = {
            money: bigInt(10),
            linesOfCode: bigInt(0),
            projects: projectService.projects
        }

        var service = angular.copy(baseSave)

        service.newGame = function(){
            var CONFIRM_MESSAGE = "Overwrite save?"
            
            var savedState = $cookies.saveGame
            if (!savedState || confirm(CONFIRM_MESSAGE)){
                service.initSave()
                return true
            }

            return false
        }

        service.initSave = function(){
            for (var field in baseSave){
                if (!baseSave.hasOwnProperty(field)){ continue }
                
                service[field] = baseSave[field]
            }
            
            for (var i = 1; i < service.projects.length; i++){
                service.projects[i].unlocked = false
            }
            service.projects[0].unlocked = true
        }

        service.saveGame = function(){
            $cookies.saveGame = service
        }
        
        service.loadGame = function(){
            var savedState = $cookies.saveGame
            
            if (savedState){
                service = savedState
            } else {
                service.initSave()
            }
        }

        return service
    }
])
