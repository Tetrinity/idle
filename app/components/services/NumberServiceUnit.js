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

describe("NumberService", function(){
    var service
    
    beforeEach(module('idle.service'))
    
    beforeEach(inject(function(_NumberService_){
        service = _NumberService_
    }))
    
    describe("getDisplayName", function(){
        xit("should call getEnglishName if the user has the English setting selected", function(){
            
        })
        
        xit("should call getScientificName if the user has the Scientific setting selected", function(){
            
        })
    })
    
    describe("getEnglishName", function(){
        beforeEach(function(){
            spyOn(service, "formatNumber").and.callFake(function(x){ return x })
        })
        
        it("should leave numbers less than 1 billion as they are", function(){
            expect(service.getEnglishName(bigInt("0"))).toEqual(0)
            expect(service.getEnglishName(bigInt("1234"))).toEqual(1234)
            expect(service.getEnglishName(bigInt("999999999"))).toEqual(999999999)
            
            expect(service.formatNumber).toHaveBeenCalled()
            expect(service.formatNumber.calls.count()).toEqual(3)
        })
        
        it("should convert numbers larger than 1 billion to English words", function(){
            expect(service.getEnglishName(bigInt("1e9"))).toEqual("1 billion")
            expect(service.getEnglishName(bigInt("1e31"))).toEqual("10 nonillion")
            expect(service.getEnglishName(bigInt("123456789000"))).toEqual("123.457 billion")
            expect(service.getEnglishName(bigInt("123450001234"))).toEqual("123.45 billion")
            expect(service.getEnglishName(bigInt("13450001234"))).toEqual("13.45 billion")
            
            expect(service.formatNumber).not.toHaveBeenCalled()
        })
    })
    
    describe("getScientificName", function(){
        xit("should leave numbers less than 1 billion as they are", function(){
            
        })
        
        xit("should convert numbers larger than 1 billion to scientific notation", function(){
            
        })
    })
    
    describe("bigIntFloorLog", function(){
        it("should calculate the floored base_10 logarithm of the passed bigInt", function(){
            expect(service.bigIntFloorLog(bigInt("1"))).toEqual(0)
            expect(service.bigIntFloorLog(bigInt("1e6"))).toEqual(6)
            expect(service.bigIntFloorLog(bigInt("1e749"))).toEqual(749)
            expect(service.bigIntFloorLog(bigInt("123456789"))).toEqual(8)
            // 9,999,999,999,999,999,999,999,999,999,999,999,999,999,999 ie. ~9.999 tredecillion 
            expect(service.bigIntFloorLog(bigInt("9999999999999999999999999999999999999999999"))).toEqual(42)
        })
    })
    
    describe("formatNumber", function(){
        it("should insert commas between every 3 non-fractional digits of the passed in string", function(){
            expect(service.formatNumber(bigInt("1000000"))).toEqual("1,000,000")
            expect(service.formatNumber("123456")).toEqual("123,456")
            expect(service.formatNumber("12345")).toEqual("12,345")
            expect(service.formatNumber("12345.67")).toEqual("12,345.67")
            expect(service.formatNumber("1123456.789")).toEqual("1,123,456.789")
        })
    })
})
