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

describe("ProjectService", function(){
    var service
    
    beforeEach(module('idle.service'))
    
    beforeEach(inject(function(_ProjectService_){
        service = _ProjectService_
        service.projects = []
    }))
    
    describe("registerProject", function(){
        it("should push the project into the service object", function(){
            var name = "Test Project"
            var baseLoc = bigInt(10)
            var baseProfit = bigInt(500)
            
            service.registerProject(name, baseLoc, baseProfit)
            
            expect(service.projects.length).toEqual(1)
            
            expect(service.projects[0].name).toEqual(name)
            expect(service.projects[0].baseLoc).toEqual(baseLoc)
            expect(service.projects[0].baseProfit).toEqual(baseProfit)
            expect(service.projects[0].unlocked).toEqual(false)
        })
    })
})